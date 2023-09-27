'use strict';

/** @type {import("prettier").Config} */
const prettierConfig = require('./prettierrc');

module.exports = {
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.json'],
      plugins: ['prettier'],
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': ['error', prettierConfig],
      },
    },
  ],
};
