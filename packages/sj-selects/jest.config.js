const sharedConfig = require('@configs/jest/config');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    "jest": {
        "verbose": true
    },
    ...sharedConfig
};
