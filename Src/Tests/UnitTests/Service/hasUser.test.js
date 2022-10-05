const { describe, expect, it } = require('@jest/globals');
const { hasUser } = require('../../../Service/HasUser/hasUser');
const { getUser } = require('../../../Service/GetUser/getUser');

const NON_EXISTING_EMAIL = 'a@b.com';
const MOCKED_USER = {
  email: 'email@gmail.com',
  password: 'password',
};

jest.mock('../../../Service/GetUser/getUser', () => ({
  getUser: ({ email }) => (email === MOCKED_USER.email ? MOCKED_USER : null),
}));

describe('SERVICE hasUser', () => {
  it.only('Passing parameters correctly', async () => {
    const res = await hasUser({ email: MOCKED_USER.email });
    console.log('--> ', res);
    expect(res).toBe(true);
  });

  it('Empty email', async () => {
    const invalid = () => hasUser({ email: '' });
    await expect(invalid).rejects.toThrowError();
  });

  it('Email not string', async () => {
    const invalid1 = () => hasUser({ email: undefined });
    const invalid2 = () => hasUser({ email: false });
    const invalid3 = () => hasUser({ email: 0 });
    const invalid4 = () => hasUser({ email: {} });
    const invalid5 = () => hasUser({ email: [] });
    await expect(invalid1).rejects.toThrowError();
    await expect(invalid2).rejects.toThrowError();
    await expect(invalid3).rejects.toThrowError();
    await expect(invalid4).rejects.toThrowError();
    await expect(invalid5).rejects.toThrowError();
  });

  it('Too few arguments', async () => {
    const invalid = () => hasUser();
    await expect(invalid).rejects.toThrowError();
  });

  it('Too many arguments', async () => {
    const invalid = () => hasUser({ email: MOCKED_USER.email }, null);
    await expect(invalid).rejects.toThrowError();
  });

  it('Too few object entries', async () => {
    const invalid = () => hasUser({});
    await expect(invalid).rejects.toThrowError();
  });

  it('Too many object entries', async () => {
    const invalid = () => hasUser({ email: MOCKED_USER.email, a: 0 });
    await expect(invalid).rejects.toThrowError();
  });
});
