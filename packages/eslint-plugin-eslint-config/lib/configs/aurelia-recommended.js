'use strict';

const path = require('path');

module.exports = {
  root: true,
  ignorePatterns: ['!**/*'],
  extends: [path.resolve(__dirname, 'typescript-recommended.js')],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            overrides: {
              constructors: 'no-public',
            },
            ignoredMethodNames: [
              'define',
              'hydrating',
              'hydrated',
              'created',
              'binding',
              'bound',
              'attaching',
              'attached',
              'detaching',
              'unbinding',
              'unbound',
              'toView',
              'fromView',
              'propertyChanged',
            ],
          },
        ],
      },
    },
    {
      files: ['*.html'],
      extends: [],
      rules: {},
    },
  ],
};
