/*
  Define control values as object with pairs 'control label': 'bindable value'
  P.S. Empty key is ok
 */

export const variantOptions = <const>['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

export const buttonSizesOptions = <const>['sm', 'lg'];
export const buttonTypesOptions = <const>['button', 'submit', 'reset'];

export const inputSizeOptions = <const>['sm', 'lg'];

export const selectControl = (options, type = 'select') => ({
  options: options,
  control: {
    type: type,
  },
});
