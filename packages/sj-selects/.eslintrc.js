const { resolve } = require('@configs/eslint/utils');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,

  extends: resolve(['@configs/eslint/config']),

  rules: {
    '@typescript-eslint/no-namespace': 'off',
    'react/display-name': 'off',
    'no-nested-ternary': 'off',
    "import/prefer-default-export": ['off']
  },
}
