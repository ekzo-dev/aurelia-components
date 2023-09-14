'use strict';

const requireIndex = require('requireindex');

module.exports = {
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.json'],
      rules: Object.values(requireIndex(__dirname + '/rules'))
        .filter(Boolean)
        .reduce((acc, rules) => ({ ...acc, ...rules })),
    },
  ],
};
