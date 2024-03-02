const sharedConfig = require('@configs/webpack/base.config.js');

const config = (env, options) => ({
    entry: [
        './src/index.tsx',
    ],
    ...sharedConfig(env, options)
});

module.exports = (env, options) => config(env, options);
