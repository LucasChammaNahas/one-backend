const { describe, expect, it } = require('@jest/globals');
const { db, resetDb } = require('../../../Database/__mocks__/db');
const { removeUser } = require('../../RemoveUser/removeUser');

jest.mock('../../../Database/dbConfig');

describe('MODEL ISOLATED removeUser', () => {
  const { email } = db[0];
  const NON_EXISTING_EMAIL = 'does-not-exist@db.com';

  describe('Passing parameters correctly with:', () => {
    beforeEach(() => resetDb());

    it('Existing users - Removing one', async () => {
      const shouldExist = db.some((user) => user.email === email);
      await removeUser({ email });
      const shouldNotExist = db.some((user) => user.email === email);
      expect(shouldExist).toStrictEqual(true);
      expect(shouldNotExist).toStrictEqual(false);
    });

    it('Existing users - Removing all', async () => {
      const emailList = db.map(({ email }) => email);
      emailList.forEach(async (email) => {
        await removeUser({ email });
      });
      expect(db).toStrictEqual([]);
    });

    it('Non-existing user', async () => {
      console.log('--> b', db)
      const lenBefore = db.length;
      await removeUser({ email: NON_EXISTING_EMAIL });
      const lenAfter = db.length;
      console.log('--> a', db)
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
