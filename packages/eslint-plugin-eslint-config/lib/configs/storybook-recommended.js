'use strict';

module.exports = {
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.stories.js', '*.stories.jsx', '*.stories.ts', '*.stories.tsx', '*.stories.mdx'],
      extends: ['plugin:storybook/recommended'],
      rules: {},
    },
  ],
};
