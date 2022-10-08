const { describe, expect, it } = require('@jest/globals');
const { getUser } = require('../../../Service/GetUser/getUser');

const MOCKED_USER = {
  email: 'email@gmail.com',
  password: 'password',
};

jest.mock('../../../Model/GetUser/getUser', () => ({
  getUser: ({ email }) => (email === MOCKED_USER.email ? MOCKED_USER : null),
}));

describe('SERVICE getUser', () => {
  const NON_EXISTING_EMAIL = 'does-not-exist@db.com';
  const { email } = MOCKED_USER;

  describe('Passing parameters correctly with:', () => {
    it('Existing user', async () => {
      const res = await getUser({ email });
      expect(res).toStrictEqual(MOCKED_USER);
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
