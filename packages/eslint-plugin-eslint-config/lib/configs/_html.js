'use strict';

module.exports = {
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.html'],
      plugins: ['html'],
      parser: 'html',
      extends: [],
      rules: {},
    },
  ],
};
