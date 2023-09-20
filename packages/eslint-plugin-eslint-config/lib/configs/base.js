'use strict';

const path = require('path');

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  settings: {
    node: {
      resolvePaths: ['node_modules/@types'],
      tryExtensions: ['.js', '.jsx', '.json', '.node', '.ts', '.tsx', '.d.ts'],
    },
  },
  extends: [path.resolve(__dirname, '_imports.js'), path.resolve(__dirname, '_html.js')],
};
