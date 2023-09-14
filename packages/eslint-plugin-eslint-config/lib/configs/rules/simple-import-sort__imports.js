'use strict';

module.exports = {
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^.*\\u0000$'],
        ['^\\u0000'],
        ['^@angular'],
        ['^rxjs'],
        ['^@?\\w'],
        ['^.*testing'],
        ['^'],
        ['^\\.\\.'],
        ['^\\.'],
      ],
    },
  ],
};
