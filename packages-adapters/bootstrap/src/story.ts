/*
  Define control values as object with pairs 'control label': 'bindable value'
  P.S. Empty key is ok
 */

export const variantsOptions = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

export const buttonSizesOptions = ['sm', 'lg'];
export const buttonTypesOptions = ['button', 'submit', 'reset'];

export const selectControl = (options, type = 'select') => ({
  options: options,
  control: {
    type: type,
  },
});
