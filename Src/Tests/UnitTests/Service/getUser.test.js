const { describe, expect, it } = require('@jest/globals');
const { getUser } = require('../../../Service/GetUser/getUser');

const NON_EXISTING_EMAIL = 'a@b.com';
const MOCKED_USER = {
  email: 'email@gmail.com',
  password: 'password',
};

jest.mock('../../../Model/GetUser/getUser', () => ({
  getUser: ({ email }) => (email === MOCKED_USER.email ? MOCKED_USER : null),
}));

describe('SERVICE getUser', () => {
  it('Passing parameters correctly with existing user', async () => {
    const res = await getUser({ email: MOCKED_USER.email });
    expect(res).toStrictEqual(MOCKED_USER);
  });
  it('Passing parameters correctly with non-existing user', async () => {
    const res = await getUser({ email: NON_EXISTING_EMAIL });
    expect(res).toBe(null);
  });

  it('Empty email', async () => {
    const invalid = () => getUser({ email: '' });
    await expect(invalid).rejects.toThrowError();
  });

  it('Email not string', async () => {
    const invalid1 = () => getUser({ email: undefined });
    const invalid2 = () => getUser({ email: false });
    const invalid3 = () => getUser({ email: 0 });
    const invalid4 = () => getUser({ email: {} });
    const invalid5 = () => getUser({ email: [] });
    await expect(invalid1).rejects.toThrowError();
    await expect(invalid2).rejects.toThrowError();
    await expect(invalid3).rejects.toThrowError();
    await expect(invalid4).rejects.toThrowError();
    await expect(invalid5).rejects.toThrowError();
  });

  it('Too few arguments', async () => {
    const invalid = () => getUser();
    await expect(invalid).rejects.toThrowError();
  });

  it('Too many arguments', async () => {
    const invalid = () => getUser({ email: MOCKED_USER.email }, null);
    await expect(invalid).rejects.toThrowError();
  });

  it('Too few object entries', async () => {
    const invalid = () => getUser({});
    await expect(invalid).rejects.toThrowError();
  });

  it('Too many object entries', async () => {
    const invalid = () => getUser({ email: MOCKED_USER.email, a: 0 });
    await expect(invalid).rejects.toThrowError();
  });
});
