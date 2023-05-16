export const selectControl = (options, type = 'select') => ({
  options,
  control: {
    type: type,
  },
});

export const disableControl = {
  table: {
    disable: true,
  },
};
