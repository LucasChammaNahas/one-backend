const { describe, expect, it } = require('@jest/globals');
const { db } = require('../../../Database/__mocks__/db');
const { getUser } = require('../../../Model/GetUser/getUser');

jest.mock('../../../Database/dbConfig');

describe('MODEL getUser', () => {
  it('Existing users', async () => {
    db.forEach(async (user) => {
      const res = await getUser({ email: user.email });
      expect(res).toStrictEqual(user);
    })
  });

  it('Non-existing user', async () => {
    const res = await getUser({ email: 'does-not-exist@db.com' });
    expect(res).toBeNull();
  });

  it('Test prop validations', async () => {
    const { email } = db[0];

    const invalids = [
      () => getUser(),
      () => getUser(0),
      () => getUser({}),
      () => getUser({ a: 'b' }),
      () => getUser({ email, a: 'b' }),
      () => getUser({ email }, 0),
    ];

    invalids.forEach(async (invalid) => {
      await expect(invalid).rejects.toThrowError();
    });
  });
});
