/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    node: true,
  },

  extends: [
    '@saasjetlib/eslint-config-ts-react',
  ],

  ignorePatterns: [
    '**/*.js',
    'dist/**',
    '*.ttf',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/**/*.spec.ts',
        '**/src/**/*.spec.ts',
      ],
      env: {
        jest: true
      },
      extends: ['plugin:jest/all'],
      plugins: ['jest'],
      rules: {
        'jest/require-hook': 'off',
        'jest/no-hooks': ['error', {
          allow: [
            'beforeEach',
            'afterEach',
            'beforeAll',
            'afterAll',
          ],
        }],
      },
    },
  ],
};
