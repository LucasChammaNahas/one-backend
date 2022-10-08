const { describe, expect, it } = require('@jest/globals');
const { db } = require('../../../Database/__mocks__/db');
const { setUser } = require('../../../Model/SetUser/setUser');
const { resetDb } = require('../../../Database/__mocks__/db');

jest.mock('../../../Database/dbConfig');

describe('MODEL setUser', () => {
  beforeEach(() => {
    resetDb();
  });
  const NEW_USER = { email: 'new@google.com', password: 'asdfASDF' };
  const NEW_USER_BAD_EMAIL = { email: '1', password: 'asdfASDF' };
  const NEW_USER_BAD_PASSWORD = { email: 'new@google.com', password: '1' };
  const NEW_USER_BAD_BOTH = { email: '1', password: '1' };

  it('New users', async () => {
    const shouldNotExist = db.find((user) => user.email === NEW_USER.email);
    await setUser(NEW_USER);
    const shouldExist = db.find((user) => user.email === NEW_USER.email);

    expect(shouldNotExist).toBeUndefined();
    expect(shouldExist).toStrictEqual(NEW_USER);
  });

  it('User already exists (should add anyway)', async () => {
    const lenBefore = db.length;
    await setUser(NEW_USER);
    await setUser(NEW_USER);
    await setUser(NEW_USER);
    const lenAfter = db.length;
    expect(lenAfter).toStrictEqual(lenBefore + 3);
  });

  it('Invalid email (should add anyway)', async () => {
    const lenBefore = db.length;
    await setUser(NEW_USER_BAD_EMAIL);
    const lenAfter = db.length;
    expect(lenAfter).toStrictEqual(lenBefore + 1);
  });

  it('Invalid password (should add anyway)', async () => {
    const lenBefore = db.length;
    await setUser(NEW_USER_BAD_PASSWORD);
    const lenAfter = db.length;
    expect(lenAfter).toStrictEqual(lenBefore + 1);
  });

  it('Invalid email and password (should add anyway)', async () => {
    const lenBefore = db.length;
    await setUser(NEW_USER_BAD_BOTH);
    const lenAfter = db.length;
    expect(lenAfter).toStrictEqual(lenBefore + 1);
  });

  it('Test prop validations', async () => {
    const { email, password } = NEW_USER;

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
