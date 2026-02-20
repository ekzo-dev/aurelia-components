import { coerceBoolean } from '@ekzo-dev/toolkit';

export const coerceBooleanOrString = (str: string) => ({
  set: (value: string | boolean) => (value === str ? str : coerceBoolean.set(value)),
});
