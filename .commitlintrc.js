'use strict';

const {
  utils: { getPackages },
  // eslint-disable-next-line node/no-unpublished-require
} = require('@commitlint/config-lerna-scopes');
const {
  utils: { getProjects },
  // eslint-disable-next-line node/no-unpublished-require
} = require('@commitlint/config-nx-scopes');

module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes', '@commitlint/config-nx-scopes'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'scope-enum': async (ctx) => [
      2,
      'always',
      [...(await getPackages(ctx)), ...(await getProjects(ctx)), 'app', 'config', 'env', 'deps'],
    ],
  },
};
