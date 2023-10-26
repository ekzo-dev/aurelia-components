'use strict';

module.exports = {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  '*.js': ['prettier --write', 'nx format:write --uncommitted=true', 'eslint --fix'],
  '*.ts': ['prettier --write --parser typescript', 'nx format:write --uncommitted=true', 'eslint --fix'],
  '*.*ss': ['prettier --write', 'stylelint --fix'],
  '*.html': ['prettier --write', 'nx format:write --uncommitted=true'],
  '*.json': ['nx format:write --uncommitted=true'],
};
