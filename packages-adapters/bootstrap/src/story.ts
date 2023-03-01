/*
  Define control values as object with pairs 'bindable value': 'control label'
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

export const defaultButtonSizes = {
  sm: 'sm',
  '': 'default',
  lg: 'lg',
};

export const defaultButtonTypes = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

export const selectControl = (options, type = 'select') => ({
  options: Object.keys(options),
  control: {
    type: type,
    labels: options,
  },
});
