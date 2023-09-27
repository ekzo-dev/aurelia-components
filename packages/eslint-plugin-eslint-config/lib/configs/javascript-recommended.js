'use strict';

const path = require('path');

module.exports = {
  root: true,
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: [
        path.resolve(__dirname, 'base.js'),
        'eslint:recommended',
        'plugin:eslint-plugin/recommended',
        'plugin:node/recommended',
        path.resolve(__dirname, 'prettier-recommended.js'),
      ],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:sonarjs/recommended', 'plugin:optimize-regex/recommended'],
      rules: {},
    },
  ],
};
