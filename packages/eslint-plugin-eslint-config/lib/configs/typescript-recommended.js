'use strict';

const path = require('path');

module.exports = {
  root: true,
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        path.resolve(__dirname, 'base.js'),
        'eslint:recommended',
        'plugin:eslint-plugin/recommended',
        'plugin:node/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        path.resolve(__dirname, 'prettier-recommended.js'),
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:sonarjs/recommended', 'plugin:optimize-regex/recommended'],
      rules: {},
    },
  ],
};
