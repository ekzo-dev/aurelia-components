'use strict';

module.exports = {
  root: true,
  ignorePatterns: ['!**/*'],
  extends: [__dirname + '/base.js', __dirname + '/prettier-recommended.js'],
  overrides: [
    {
      extends: ['canonical/typescript', 'canonical/prettier'],
      files: '*.ts',
    },
    {
      extends: [
        'canonical/react',
        'canonical/jsx-a11y',
        'canonical/typescript',
        'canonical/prettier',
      ],
      files: '*.tsx',
    },
    {
      extends: ['canonical/jest', 'canonical/prettier'],
      files: '*.spec.{ts,tsx,js,jsx}',
      rules: {
        'jest/prefer-expect-assertions': 'off',
      },
    },
    {
      extends: ['canonical/vitest', 'canonical/prettier'],
      files: '*.test.{ts,tsx,js,jsx}',
    },
    {
      extends: ['canonical/json', 'canonical/prettier'],
      files: '*.json',
    },
    {
      extends: ['canonical/yaml', 'canonical/prettier'],
      files: '*.yaml',
    },
    {
      extends: ['canonical/graphql', 'canonical/prettier'],
      files: '*.graphql',
    },
    {
      files: '*.{ts,tsx,js,jsx}',
      rules: {
        // FIXME: missing rule
        'canonical/prefer-inline-type-import': 'off',
      },
    },
  ],
};
