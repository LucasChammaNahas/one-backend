const { describe, expect, it } = require('@jest/globals');
const { db, resetDb } = require('../../../Database/__mocks__/db');
const { removeUser } = require('../../../Model/RemoveUser/removeUser');

jest.mock('../../../Database/dbConfig');

describe('MODEL removeUser', () => {
  const { email } = db[0];
  const NON_EXISTING_EMAIL = 'does-not-exist@db.com';

  describe('Passing parameters correctly:', () => {
    beforeEach(() => resetDb());

    it('Removing one existing users', async () => {
      const shouldExist = db.some((user) => user.email === email);
      await removeUser({ email });
      const shouldNotExist = db.some((user) => user.email === email);
      expect(shouldExist).toStrictEqual(true);
      expect(shouldNotExist).toStrictEqual(false);
    });

    it('Removing all existing users', async () => {
      const emailList = db.map(({ email }) => email);
      emailList.forEach(async (email) => {
        await removeUser({ email });
      });
      expect(db).toStrictEqual([]);
    });

    it('Removing non-existing user', async () => {
      const lenBefore = db.length;
      await removeUser({ email: NON_EXISTING_EMAIL });
      const lenAfter = db.length;
      expect(lenBefore).toStrictEqual(lenAfter);
    });
  });

  describe('Passing faulty parameters:', () => {
    it('Empty email', async () => {
      const invalid = () => removeUser({ email: '' });
      await expect(invalid).rejects.toThrowError();
    });

    it('Email not string', async () => {
      const invalids = [
        () => removeUser({ email: undefined }),
        () => removeUser({ email: false }),
        () => removeUser({ email: 0 }),
        () => removeUser({ email: {} }),
        () => removeUser({ email: [] }),
      ];
      invalids.forEach(async (invalid) => {
        await expect(invalid).rejects.toThrowError();
      });
    });

    it('Too few object entries', async () => {
      const invalid = () => removeUser({});
      await expect(invalid).rejects.toThrowError();
    });

    it('Too many object entries', async () => {
      const invalid = () => removeUser({ email, a: 0 });
      await expect(invalid).rejects.toThrowError();
    });

    it('Wrong object entry', async () => {
      const invalid = () => removeUser({ a: 0 });
      await expect(invalid).rejects.toThrowError();
    });

    it('Too few arguments', async () => {
      const invalid = () => removeUser();
      await expect(invalid).rejects.toThrowError();
    });

    it('Too many arguments', async () => {
      const invalid = () => removeUser({ email }, null);
      await expect(invalid).rejects.toThrowError();
    });

    it('Wrong argument type', async () => {
      const invalids = [
        () => removeUser(undefined),
        () => removeUser(false),
        () => removeUser(0),
        () => removeUser(''),
        () => removeUser([]),
      ];
      invalids.forEach(async (invalid) => {
        await expect(invalid).rejects.toThrowError();
      });
    });
  });
});
