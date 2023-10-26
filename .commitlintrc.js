'use strict';

module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes', '@commitlint/config-nx-scopes'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'scope-enum': [2, 'always', ['app', 'env', 'workflow']],
  },
};
