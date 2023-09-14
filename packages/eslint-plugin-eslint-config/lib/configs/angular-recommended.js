'use strict';

module.exports = {
  root: true,
  ignorePatterns: ['!**/*'],
  extends: [__dirname + '/typescript-recommended.js'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['plugin:@nx/angular', 'plugin:@angular-eslint/template/process-inline-templates'],
      rules: {},
    },
    {
      files: ['*.html'],
      extends: ['plugin:@nx/angular-template'],
      rules: {},
    },
  ],
};
