const { describe, expect, it } = require('@jest/globals');
const { mockedPool } = require('../Mock/dbConfig.mock');
const { pool } = require('../../Database/dbConfig');

// jest.mock('../../stores/UserStore', () => ({isLoggedIn: true}));
// jest.mock('../../utils/Firebase', () => ({getFirebaseUserSettingsReference: () => mockedFirebase}));
// jest.useFakeTimers().setSystemTime(new Date(mockedDateNow));

jest.mock('../../Database/dbConfig', () => ({ pool: mockedPool }));

describe('isEmpty', () => {
  it('it', () => {
    console.log('--> ', pool);
    expect(true).toBe(true);
  });
});
