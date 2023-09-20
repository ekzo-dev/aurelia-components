'use strict';

const path = require('path');
const thisDir = path.resolve(__dirname);

module.exports = {
  root: true,
  ignorePatterns: ['!**/*'],
  plugins: ['@ekzo-dev/eslint-config'],
  extends: [
    // "plugin:@ekzo-dev/eslint-config/nx-recommended",
    'plugin:@ekzo-dev/eslint-config/javascript-recommended',
    'plugin:@ekzo-dev/eslint-config/typescript-recommended',
    'plugin:@ekzo-dev/eslint-config/jest-recommended',
    'plugin:@ekzo-dev/eslint-config/prettier-recommended',
    'plugin:@ekzo-dev/eslint-config/rules-recommended',
  ],
  parserOptions: {
    project: path.join(thisDir, 'tsconfig.json'),
    tsconfigRootDir: thisDir,
  },
  // Old config
  // plugins: ['unused-imports', 'simple-import-sort', 'prettier'],
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //     ecmaVersion: 2020,
  //     sourceType: 'module',
  // },
  // overrides: [
  //     {
  //         files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
  //         extends: ['plugin:sonarjs/recommended', 'plugin:optimize-regex/recommended'],
  //         rules: {
  //             'sonarjs/cognitive-complexity': ['warn', 15],
  //             'sonarjs/no-duplicate-string': 'error',
  //         },
  //     },
  //     {
  //         files: ['*.ts', '*.tsx'],
  //         extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  //         rules: {
  //             '@typescript-eslint/ban-ts-comment': 'warn',
  //             "@typescript-eslint/ban-types": "warn", // 'error'
  //             'prettier/prettier': 'warn', // 'error'
  //             'simple-import-sort/imports': 'warn', // 'error'
  //             'simple-import-sort/exports': 'warn', // 'error'
  //             'unused-imports/no-unused-imports-ts': 'warn', // 'error'
  //             '@typescript-eslint/no-empty-function': 'off',
  //             '@typescript-eslint/no-empty-interface': 'off',
  //             '@typescript-eslint/no-inferrable-types': 'off',
  //             '@typescript-eslint/explicit-member-accessibility': [
  //                 'warn', // 'error'
  //                 {
  //                     overrides: {
  //                         constructors: 'no-public',
  //                     },
  //                     ignoredMethodNames: [
  //                         // 'ngOnInit',
  //                         // 'ngOnDestroy',
  //                         // 'ngAfterViewInit',
  //                         // 'ngOnChanges',
  //                         // 'ngAfterContentInit',
  //                     ],
  //                 },
  //             ],
  //             '@typescript-eslint/naming-convention': [
  //                 'warn', // 'error'
  //                 {
  //                     selector: 'memberLike',
  //                     modifiers: ['private'],
  //                     format: ['camelCase'],
  //                     leadingUnderscore: 'require',
  //                 },
  //                 {
  //                     selector: 'memberLike',
  //                     modifiers: ['public', 'protected'],
  //                     format: ['camelCase'],
  //                     leadingUnderscore: 'forbid',
  //                 },
  //             ],
  //             '@typescript-eslint/member-ordering': [
  //                 'warn', // 'error'
  //                 {
  //                     default: [
  //                         'signature',
  //                         'public-static-field',
  //                         'protected-static-field',
  //                         'private-static-field',
  //                         'public-decorated-field',
  //                         'protected-decorated-field',
  //                         'private-decorated-field',
  //                         'public-instance-field',
  //                         'protected-instance-field',
  //                         'private-instance-field',
  //                         'public-abstract-field',
  //                         'protected-abstract-field',
  //                         'private-abstract-field',
  //                         'public-field',
  //                         'protected-field',
  //                         'private-field',
  //                         'static-field',
  //                         'instance-field',
  //                         'abstract-field',
  //                         'decorated-field',
  //                         'field',
  //                         'public-constructor',
  //                         'protected-constructor',
  //                         'private-constructor',
  //                         'constructor',
  //                         'public-static-method',
  //                         'protected-static-method',
  //                         'private-static-method',
  //                         'public-abstract-method',
  //                         'protected-abstract-method',
  //                         'private-abstract-method',
  //                         'public-decorated-method',
  //                         'public-instance-method',
  //                         'protected-decorated-method',
  //                         'protected-instance-method',
  //                         'private-decorated-method',
  //                         'private-instance-method',
  //                         'static-method',
  //                         'abstract-method',
  //                         'instance-method',
  //                         'public-method',
  //                         'protected-method',
  //                         'private-method',
  //                         'decorated-method',
  //                         'method',
  //                     ],
  //                 },
  //             ],
  //         },
  //     },
  //     {
  //         files: ['*.js', '*.jsx'],
  //         extends: [],
  //         rules: {
  //             '@typescript-eslint/no-var-requires': 'off',
  //             'no-undef': 'off',
  //         },
  //     },
  //     {
  //         files: ['*.html'],
  //         extends: [],
  //         rules: {},
  //     },
  // ],
};
