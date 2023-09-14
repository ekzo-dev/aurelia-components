'use strict';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  settings: {
    node: {
      resolvePaths: ['node_modules/@types'],
      tryExtensions: ['.js', '.jsx', '.json', '.node', '.ts', '.tsx', '.d.ts'],
    },
  },
  extends: [__dirname + '/_imports.js', __dirname + '/_html.js'],
};
