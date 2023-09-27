const eslintPlugin = require('@ekzo-dev/eslint-plugin-eslint-config');

/** @type {import("prettier").Config} */
const prettierConfig = eslintPlugin.configs.prettierrc;

module.exports = prettierConfig;
