/*
  Define control values as object with pairs 'control label': 'bindable value'
  P.S. Empty key is ok
 */

export const VARIANTS = <const>['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

export const BREAKPOINTS = <const>['sm', 'md', 'lg', 'xl', 'xxl'];

export const PLACEMENTS = <const>['start', 'end', 'top', 'bottom'];

export const SIZES = <const>['sm', 'lg'];

export const TOGGLE = 'data-bs-toggle';

export const TOOLTIP_PLACEMENTS = <const>['auto', 'top', 'right', 'bottom', 'left'];

export const TOOLTIP_TRIGGERS = <const>[
  'click',
  'hover',
  'focus',
  'manual',
  'click hover',
  'click focus',
  'hover focus',
  'click hover focus',
];
