'use strict';

module.exports = {
  '@typescript-eslint/naming-convention': [
    'error',
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
