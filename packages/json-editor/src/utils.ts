export const coerceBoolean = {
  set: (v: string | boolean) => (v === '' || v === true ? true : v === 'false' || v === false ? false : undefined),
};
