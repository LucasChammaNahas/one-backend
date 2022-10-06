const { describe, expect, it } = require('@jest/globals');
const { mockedPool } = require('../../Mock/dbConfig.mock');
const { resetDb } = require('../../Mock/db.mock');
const { setUser } = require('../../../Model/SetUser/setUser');

jest.mock('../../../Database/dbConfig', () => ({ pool: mockedPool }));

describe('MODEL setUser', () => {
  it('New users', async () => {
    const db = generateDb();
    const res0 = await setUser({ email: db[0].email });
    const res1 = await setUser({ email: db[1].email });
    const res2 = await setUser({ email: db[2].email });
    expect(res0).toStrictEqual(db[0]);
    expect(res1).toStrictEqual(db[1]);
    expect(res2).toStrictEqual(db[2]);
  });

  it('Non-existing user', async () => {
    const res = await setUser({ email: 'does-not-exist@db.com' });
    expect(res).toStrictEqual(null);
  });

  it('Not-allowed props', async () => {
    const invalid1 = () => setUser();
    const invalid2 = () => setUser(0);
    const invalid3 = () => setUser({});
    const invalid4 = () => setUser({ a: 'b' });
    const invalid5 = () => setUser({ email: 'a@b.com', a: 'b' });
    const invalid6 = () => setUser({ email: 'a@b.com' }, 0);
    await expect(invalid1).rejects.toThrowError();
    await expect(invalid2).rejects.toThrowError();
    await expect(invalid3).rejects.toThrowError();
    await expect(invalid4).rejects.toThrowError();
    await expect(invalid5).rejects.toThrowError();
    await expect(invalid6).rejects.toThrowError();
  });
});
