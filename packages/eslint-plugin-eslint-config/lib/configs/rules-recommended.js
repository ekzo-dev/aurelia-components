'use strict';

const path = require('path');
const requireIndex = require('requireindex');

module.exports = {
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.json'],
      rules: Object.values(requireIndex(path.resolve(__dirname, 'rules/common')))
        .filter(Boolean)
        .reduce((acc, rules) => ({ ...acc, ...rules })),
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: Object.values(requireIndex(path.resolve(__dirname, 'rules/typescript')))
        .filter(Boolean)
        .reduce((acc, rules) => ({ ...acc, ...rules })),
    },
  ],
};
