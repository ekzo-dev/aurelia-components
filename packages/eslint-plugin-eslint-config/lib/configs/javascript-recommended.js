'use strict';

module.exports = {
  root: true,
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: [
        __dirname + '/base.js',
        'eslint:recommended',
        'plugin:eslint-plugin/recommended',
        'plugin:node/recommended',
        __dirname + '/prettier-recommended.js',
      ],
    },
  ],
};
