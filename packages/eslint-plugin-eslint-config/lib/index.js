/**
 * @fileoverview ESlint default configurations
 * @author @pet
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  // import all rules in lib/rules
  rules: requireIndex(__dirname + '/rules'),

  // import all rules in lib/rules
  configs: requireIndex(__dirname + '/configs', [
    'angular-recommended',
    'canonical',
    'javascript-recommended',
    'jest-recommended',
    'nx-recommended',
    'prettier-recommended',
    'rules-recommended',
    'storybook-recommended',
    'typescript-recommended',
  ]),
};
