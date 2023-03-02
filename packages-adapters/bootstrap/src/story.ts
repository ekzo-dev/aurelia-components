/*
  Define control values as object with pairs 'control label': 'bindable value'
  P.S. Empty key is ok
 */

export const defaultVariants = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  light: 'light',
  dark: 'dark',
};

export const defaultButtonSizes = ['sm', 'lg'];

export const defaultButtonTypes = ['button', 'submit', 'reset'];

export const selectControl = (options, type = 'select') => ({
  options: options,
  control: {
    type: type,
  },
});
