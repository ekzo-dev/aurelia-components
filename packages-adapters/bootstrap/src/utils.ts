import { coerceBoolean } from '@ekzo-dev/toolkit';

export const coerceBooleanOrString = (str: string) => ({
  set: (value: unknown): string | boolean | undefined => (value === str ? str : coerceBoolean.set(value)),
});
