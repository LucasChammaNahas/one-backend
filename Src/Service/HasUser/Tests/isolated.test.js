const { describe, expect, it } = require('@jest/globals');
const { db } = require('../../../Database/__mocks__/db');
const { hasUser } = require('../../../Service/HasUser/hasUser');

jest.mock('../../../Model/GetUser/getUser');

describe('SERVICE ISOLATED hasUser', () => {
  const { email } = db[0];
  const NON_EXISTING_EMAIL = 'does-not-exist@db.com';

  describe('Passing parameters correctly with:', () => {
    it('Existing users', async () => {
      db.forEach(async (user) => {
        const res = await hasUser({ email: user.email });
        expect(res).toStrictEqual(true);
      });
    });

    it('Non-existing user', async () => {
      const res = await hasUser({ email: NON_EXISTING_EMAIL });
      expect(res).toStrictEqual(false);
    });
  });

  describe('Passing faulty parameters:', () => {
    it('Empty email', async () => {
      const invalid = () => hasUser({ email: '' });
      await expect(invalid).rejects.toThrowError();
    });

    it('Email not string', async () => {
      const invalids = [
        () => hasUser({ email: undefined }),
        () => hasUser({ email: false }),
        () => hasUser({ email: 0 }),
        () => hasUser({ email: {} }),
        () => hasUser({ email: [] }),
      ];
      invalids.forEach(async (invalid) => {
        await expect(invalid).rejects.toThrowError();
      });
    });

    it('Too few object entries', async () => {
      const invalid = () => hasUser({});
      await expect(invalid).rejects.toThrowError();
    });

    it('Too many object entries', async () => {
      const invalid = () => hasUser({ email, a: 0 });
      await expect(invalid).rejects.toThrowError();
    });

    it('Wrong object entry', async () => {
      const invalid = () => hasUser({ a: 0 });
      await expect(invalid).rejects.toThrowError();
    });

    it('Too few arguments', async () => {
      const invalid = () => hasUser();
      await expect(invalid).rejects.toThrowError();
    });

    it('Too many arguments', async () => {
      const invalid = () => hasUser({ email }, null);
      await expect(invalid).rejects.toThrowError();
    });

    it('Wrong argument type', async () => {
      const invalids = [
        () => hasUser(undefined),
        () => hasUser(false),
        () => hasUser(0),
        () => hasUser(''),
        () => hasUser([]),
      ];
      invalids.forEach(async (invalid) => {
        await expect(invalid).rejects.toThrowError();
      });
    });
  });
});
