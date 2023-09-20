/**
 * @fileoverview ESlint default configurations
 * @author @pet
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require('path');
const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  // import all rules in lib/rules
  rules: requireIndex(path.resolve(__dirname, 'rules')),

  // import all rules in lib/rules
  configs: requireIndex(path.resolve(__dirname, 'configs'), [
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
