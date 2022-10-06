const { describe, expect, it } = require('@jest/globals');
// const { mockPool } = require('../../Mock/dbConfig.mock');
const { db } = require('../../../Database/__mocks__/db');
const { getUser } = require('../../../Model/GetUser/getUser');
// let {pool} = require('../../../Database/dbConfig')

// jest.mock('../../../Database/dbConfig', () => ({ pool: mockPool }));

jest.mock('../../../Database/dbConfig');
// pool = jest.fn(() => mockPool)


describe('MODEL getUser', () => {
  it.only('Existing users', async () => {
    console.log('--> db', db[0].email)
    const res0 = await getUser({ email: db[0].email });
    // const res1 = await getUser({ email: db[1].email });
    // const res2 = await getUser({ email: db[2].email });
    // expect(res0).toStrictEqual(db[0]);
    // expect(res1).toStrictEqual(db[1]);
    // expect(res2).toStrictEqual(db[2]);
  });

  it('Non-existing user', async () => {
    const res = await getUser({ email: 'does-not-exist@db.com' });
    expect(res).toStrictEqual(null);
  });

  it('Not-allowed props', async () => {
    const invalid1 = () => getUser();
    const invalid2 = () => getUser(0);
    const invalid3 = () => getUser({});
    const invalid4 = () => getUser({ a: 'b' });
    const invalid5 = () => getUser({ email: 'a@b.com', a: 'b' });
    const invalid6 = () => getUser({ email: 'a@b.com' }, 0);
    await expect(invalid1).rejects.toThrowError();
    await expect(invalid2).rejects.toThrowError();
    await expect(invalid3).rejects.toThrowError();
    await expect(invalid4).rejects.toThrowError();
    await expect(invalid5).rejects.toThrowError();
    await expect(invalid6).rejects.toThrowError();
  });
});
