'use strict';

module.exports = {
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.json'],
      plugins: ['prettier'],
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            arrowParens: 'always',
            bracketSpacing: true,
            jsxBracketSameLine: false,
            printWidth: 100,
            quoteProps: 'as-needed',
            semi: true,
            singleQuote: true,
            tabWidth: 2,
            trailingComma: 'all',
          },
        ],
      },
    },
  ],
};
