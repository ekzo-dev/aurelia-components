'use strict';

module.exports = {
  root: true,
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        __dirname + '/base.js',
        'eslint:recommended',
        'plugin:eslint-plugin/recommended',
        'plugin:node/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        __dirname + '/prettier-recommended.js',
      ],
      parser: '@typescript-eslint/parser',
      rules: {
        'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
        'node/no-unpublished-import': [
          'off',
          {
            allowModules: [],
            tryExtensions: ['.js', '.jsx', '.json', '.node', '.ts', '.tsx', '.d.ts'],
          },
        ],
        'node/no-extraneous-import': 'off',
      },
    },
  ],
};
