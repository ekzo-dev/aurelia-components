'use strict';

const path = require('path');
const thisDir = path.resolve(__dirname);

module.exports = {
  root: true,
  ignorePatterns: ['!**/*'],
  plugins: ['@ekzo-dev/eslint-config'],
  extends: [
    // "plugin:@ekzo-dev/eslint-config/nx-recommended",
    'plugin:@ekzo-dev/eslint-config/javascript-recommended',
    'plugin:@ekzo-dev/eslint-config/typescript-recommended',
    'plugin:@ekzo-dev/eslint-config/aurelia-recommended',
    'plugin:@ekzo-dev/eslint-config/storybook-recommended',
    'plugin:@ekzo-dev/eslint-config/jest-recommended',
    'plugin:@ekzo-dev/eslint-config/prettier-recommended',
    'plugin:@ekzo-dev/eslint-config/rules-recommended',
  ],
  parserOptions: {
    project: path.join(thisDir, 'tsconfig.json'),
    tsconfigRootDir: thisDir,
    ecmaVersion: 2021,
  },
  rules: {
    // FIXME: 'typescript-recommended' fails on this rule
    'node/no-unsupported-features/es-syntax': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
};
