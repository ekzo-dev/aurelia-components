import { coerceBoolean } from '@ekzo-dev/toolkit';

/**
 * Generate unique identifier
 */
export function uniqueId(): string {
  return 'id' + Math.random().toString(36).substring(2, 9);
}

/**
 * Coerce value to a boolean if it does not match a provided string
 * @param str
 */
export const coerceBooleanOrString = (str: string) => ({
  set: (value: unknown): string | boolean | undefined => (value === str ? str : coerceBoolean.set(value)),
});
