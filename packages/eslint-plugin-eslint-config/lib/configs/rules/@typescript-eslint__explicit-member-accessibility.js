'use strict';

module.exports = {
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      overrides: {
        constructors: 'no-public',
      },
      ignoredMethodNames: [
        'canActivate',
        'canActivateChild',
        'canLoad',
        'canMatch',
        'ngAfterContentInit',
        'ngAfterViewInit',
        'ngOnChanges',
        'ngOnDestroy',
        'ngOnInit',
      ],
    },
  ],
};
