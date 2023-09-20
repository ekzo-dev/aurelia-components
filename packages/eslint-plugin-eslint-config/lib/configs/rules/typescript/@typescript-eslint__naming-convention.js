'use strict';

module.exports = {
  '@typescript-eslint/naming-convention': [
    'warn', // 'error',
    {
      selector: 'memberLike',
      modifiers: ['private'],
      format: ['camelCase'],
      leadingUnderscore: 'require',
    },
    {
      selector: 'memberLike',
      modifiers: ['public', 'protected'],
      format: ['camelCase'],
      leadingUnderscore: 'forbid',
    },
  ],
};
