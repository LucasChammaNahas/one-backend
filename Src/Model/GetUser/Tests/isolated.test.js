const { describe, expect, it } = require('@jest/globals');
const { db } = require('../../../Database/__mocks__/db');
const { getUser } = require('../../GetUser/getUser');

jest.mock('../../../Database/dbConfig');

describe('MODEL getUser', () => {
  const NON_EXISTING_EMAIL = 'does-not-exist@db.com';
  const { email } = db[0];

  describe('Passing parameters correctly with:', () => {
    it('Existing users', async () => {
      db.forEach(async (user) => {
        const res = await getUser({ email: user.email });
        expect(res).toStrictEqual(user);
      });
    });

    it('Non-existing user', async () => {
      const res = await getUser({ email: NON_EXISTING_EMAIL });
      expect(res).toBeNull();
    });
  });

  describe('Passing faulty parameters:', () => {
    it('Empty email', async () => {
      const invalid = () => getUser({ email: '' });
      await expect(invalid).rejects.toThrowError();
    });

    it('Email not string', async () => {
      const invalids = [
        () => getUser({ email: undefined }),
        () => getUser({ email: false }),
        () => getUser({ email: 0 }),
        () => getUser({ email: {} }),
        () => getUser({ email: [] }),
      ];
      invalids.forEach(async (invalid) => {
        await expect(invalid).rejects.toThrowError();
      });
    });

    it('Too few object entries', async () => {
      const invalid = () => getUser({});
      await expect(invalid).rejects.toThrowError();
    });

    it('Too many object entries', async () => {
      const invalid = () => getUser({ email, a: 0 });
      await expect(invalid).rejects.toThrowError();
    });

    it('Wrong object entry', async () => {
      const invalid = () => getUser({ a: 0 });
      await expect(invalid).rejects.toThrowError();
    });

    it('Too few arguments', async () => {
      const invalid = () => getUser();
      await expect(invalid).rejects.toThrowError();
    });

    it('Too many arguments', async () => {
      const invalid = () => getUser({ email }, null);
      await expect(invalid).rejects.toThrowError();
    });

    it('Wrong argument type', async () => {
      const invalids = [
        () => getUser(undefined),
        () => getUser(false),
        () => getUser(0),
        () => getUser(''),
        () => getUser([]),
      ];
      invalids.forEach(async (invalid) => {
        await expect(invalid).rejects.toThrowError();
      });
    });
  });
});
