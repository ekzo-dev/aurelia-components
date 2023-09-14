'use strict';

module.exports = {
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    },
    {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: '*',
    },
    {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var'],
    },
    {
      blankLine: 'always',
      prev: 'directive',
      next: '*',
    },
    {
      blankLine: 'any',
      prev: 'directive',
      next: 'directive',
    },
    {
      blankLine: 'always',
      prev: ['case', 'default'],
      next: '*',
    },
    {
      blankLine: 'always',
      prev: ['block-like'],
      next: '*',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: ['block-like'],
    },
  ],
};
