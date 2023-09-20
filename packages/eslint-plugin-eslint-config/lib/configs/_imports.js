'use strict';

module.exports = {
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      plugins: ['simple-import-sort', 'unused-imports', 'import'],
      extends: ['plugin:import/recommended'],
      rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': 'warn',
        'import/no-unresolved': 'error',
        'import/no-cycle': [
          'error',
          {
            maxDepth: 3,
            ignoreExternal: true,
          },
        ],
        'import/no-self-import': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['import'],
      extends: ['plugin:import/typescript'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: true,
          node: true,
        },
      },
    },
  ],
};
