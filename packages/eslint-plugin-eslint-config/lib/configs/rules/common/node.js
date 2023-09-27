'use strict';

module.exports = {
  'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
  'node/no-unpublished-import': [
    'warn',
    {
      allowModules: [],
      tryExtensions: ['.js', '.jsx', '.json', '.node', '.ts', '.tsx', '.d.ts'],
    },
  ],
  'node/no-extraneous-import': 'warn',
  'node/no-extraneous-require': 'warn',
};
