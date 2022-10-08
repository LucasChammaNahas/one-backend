const { describe, expect, it } = require('@jest/globals');
const { db } = require('../../../Database/__mocks__/db');
const { setUser } = require('../../../Model/SetUser/setUser');
const { resetDb } = require('../../../Database/__mocks__/db');

jest.mock('../../../Database/dbConfig');

describe('MODEL setUser', () => {
  beforeEach(() => {
    resetDb();
  });

  const newUser = { email: 'new@google.com', password: 'asdfASDF' };
  const newUserInvalidEmail = { email: '1', password: 'asdfASDF' };
  const newUserInvalidPassword = { email: 'new@google.com', password: '1' };
  const newUserInvalidBoth = { email: '1', password: '1' };

  it('New users', async () => {
    const shouldNotExist = db.find((user) => user.email === newUser.email);
    await setUser(newUser);
    const shouldExist = db.find((user) => user.email === newUser.email);

    expect(shouldNotExist).toBeUndefined();
    expect(shouldExist).toStrictEqual(newUser);
  });

  it('User already exists (should add anyway)', async () => {
    const lenBefore = db.length;
    await setUser(newUser);
    await setUser(newUser);
    await setUser(newUser);
    const lenAfter = db.length;
    expect(lenAfter).toStrictEqual(lenBefore + 3);
  });

  it('Invalid email', async () => {
    const lenBefore = db.length;
    await setUser(newUserInvalidEmail);
    const lenAfter = db.length;
    expect(lenAfter).toStrictEqual(lenBefore + 1);
  });

  it('Invalid password', async () => {
    const lenBefore = db.length;
    await setUser(newUserInvalidPassword);
    const lenAfter = db.length;
    expect(lenAfter).toStrictEqual(lenBefore + 1);
  });

  it('Invalid email and password', async () => {
    const lenBefore = db.length;
    await setUser(newUserInvalidBoth);
    const lenAfter = db.length;
    expect(lenAfter).toStrictEqual(lenBefore + 1);
  });

  it('Test prop validations', async () => {
    const { email, password } = newUser;

    const invalids = [
      () => setUser(),
      () => setUser(0),
      () => setUser({}),
      () => setUser({ a: 'b' }),
      () => setUser({ email }),
      () => setUser({ password }),
      () => setUser({ email, password, a: 'b' }),
      () => setUser({ email, password }, 0),
    ];

    invalids.forEach(async (invalid) => {
      await expect(invalid).rejects.toThrowError();
    });
  });
});
