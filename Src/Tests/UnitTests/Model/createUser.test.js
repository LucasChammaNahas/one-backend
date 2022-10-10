const { describe, expect, it } = require('@jest/globals');
const { db } = require('../../../Database/__mocks__/db');
const { createUser } = require('../../../Model/CreateUser/createUser.model');
const { resetDb } = require('../../../Database/__mocks__/db');

jest.mock('../../../Database/dbConfig');

describe('MODEL createUser', () => {
  const NEW_USER = { email: 'new@google.com', password: 'asdfASDF' };
  const NEW_USER_BAD_EMAIL = { email: '1', password: 'asdfASDF' };
  const NEW_USER_BAD_PASSWORD = { email: 'new@google.com', password: '1' };
  const NEW_USER_BAD_BOTH = { email: '1', password: '1' };

  describe('Passing parameters correctly:', () => {
    beforeEach(() => resetDb());

    it('User is new', async () => {
      const shouldNotExist = db.find((user) => user.email === NEW_USER.email);
      await createUser(NEW_USER);
      const shouldExist = db.find((user) => user.email === NEW_USER.email);
      expect(shouldNotExist).toBeUndefined();
      expect(shouldExist).toStrictEqual(NEW_USER);
    });

    it('User already exists (should add anyway)', async () => {
      const lenBefore = db.length;
      await createUser(NEW_USER);
      await createUser(NEW_USER);
      await createUser(NEW_USER);
      const lenAfter = db.length;
      expect(lenAfter).toStrictEqual(lenBefore + 3);
    });

    it('Invalid email (should add anyway)', async () => {
      const lenBefore = db.length;
      await createUser(NEW_USER_BAD_EMAIL);
      const lenAfter = db.length;
      expect(lenAfter).toStrictEqual(lenBefore + 1);
    });

    it('Invalid password (should add anyway)', async () => {
      const lenBefore = db.length;
      await createUser(NEW_USER_BAD_PASSWORD);
      const lenAfter = db.length;
      expect(lenAfter).toStrictEqual(lenBefore + 1);
    });

    it('Invalid email and password (should add anyway)', async () => {
      const lenBefore = db.length;
      await createUser(NEW_USER_BAD_BOTH);
      const lenAfter = db.length;
      expect(lenAfter).toStrictEqual(lenBefore + 1);
    });
  });

  describe('Passing faulty parameters:', () => {
    const { email, password } = NEW_USER;

    it('Empty email or password', async () => {
      const invalids = [
        () => createUser({ email, password: '' }),
        () => createUser({ email: '', password }),
        () => createUser({ email: '', password: '' }),
      ];
      invalids.forEach(async (invalid) => {
        await expect(invalid).rejects.toThrowError();
      });
    });

    it('Email or password not string', async () => {
      const invalids = [
        () => createUser({ email: undefined, password }),
        () => createUser({ email: false, password }),
        () => createUser({ email: 0, password }),
        () => createUser({ email: {}, password }),
        () => createUser({ email: [], password }),

        () => createUser({ email, password: undefined }),
        () => createUser({ email, password: false }),
        () => createUser({ email, password: 0 }),
        () => createUser({ email, password: {} }),
        () => createUser({ email, password: [] }),

        () => createUser({ email: undefined, password: undefined }),
        () => createUser({ email: false, password: false }),
        () => createUser({ email: 0, password: 0 }),
        () => createUser({ email: {}, password: {} }),
        () => createUser({ email: [], password: [] }),
      ];
      invalids.forEach(async (invalid) => {
        await expect(invalid).rejects.toThrowError();
      });
    });

    it('Too few object entries', async () => {
      const invalids = [
        () => createUser({ email }),
        () => createUser({ password }),
        () => createUser({}),
      ];
      invalids.forEach(async (invalid) => {
        await expect(invalid).rejects.toThrowError();
      });
    });

    it('Too many object entries', async () => {
      const invalid = () => createUser({ email, password, a: 0 });
      await expect(invalid).rejects.toThrowError();
    });

    it('Wrong object entry', async () => {
      const invalid = () => createUser({ a: 0, b: 0 });
      await expect(invalid).rejects.toThrowError();
    });

    it('Too few arguments', async () => {
      const invalid = () => createUser();
      await expect(invalid).rejects.toThrowError();
    });

    it('Too many arguments', async () => {
      const invalid = () => createUser({ email, password }, null);
      await expect(invalid).rejects.toThrowError();
    });

    it('Wrong argument type', async () => {
      const invalids = [
        () => createUser(undefined),
        () => createUser(false),
        () => createUser(0),
        () => createUser(''),
        () => createUser([]),
      ];
      invalids.forEach(async (invalid) => {
        await expect(invalid).rejects.toThrowError();
      });
    });
  });
});
