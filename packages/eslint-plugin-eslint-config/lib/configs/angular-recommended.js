'use strict';

const path = require('path');

module.exports = {
  root: true,
  ignorePatterns: ['!**/*'],
  extends: [path.resolve(__dirname, 'typescript-recommended.js')],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nx/angular', 'plugin:@angular-eslint/template/process-inline-templates'],
      rules: {
        '@angular-eslint/no-empty-lifecycle-method': 'warn',
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@nx/angular-template'],
      rules: {},
    },
  ],
};
