module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-prettier/recommended'],
  overrides: [
    {
      files: ['*.css'],
      extends: ['stylelint-config-standard'],
    },
    {
      files: ['*.scss'],
      extends: ['stylelint-config-standard-scss'],
    },
  ],
  rules: {
    'block-no-empty': null,
    'color-named': null,
    'max-nesting-depth': 4,
    'no-empty-source': null,
    'selector-type-no-unknown': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'extend', 'mixin'],
      },
    ],
    'selector-pseudo-element-no-unknown': true,
  },
};
