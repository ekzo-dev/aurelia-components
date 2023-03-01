export const defaultVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

export const selectControl = (options, type = 'select') => ({
  options,
  control: { type },
});
