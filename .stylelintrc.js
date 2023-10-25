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
};
