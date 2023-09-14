'use strict';

module.exports = {
  root: true,
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: {
        jest: true,
      },
      rules: {},
    },
  ],
};
