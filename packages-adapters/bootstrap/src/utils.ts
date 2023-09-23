import { coerceBoolean } from '@ekzo-dev/toolkit';

export const addEventListener = (element: Element, type: string, listener: EventListenerOrEventListenerObject) =>
  element.addEventListener(type, listener);

export const removeEventListener = (element: Element, type: string, listener: EventListenerOrEventListenerObject) =>
  element.removeEventListener(type, listener);

export function uniqueId(): string {
  return 'id' + Math.random().toString(36).substring(2, 9);
}

export const coerceBooleanOrString = (str: string) => ({
  set: (value: string | boolean) => (value === str ? str : coerceBoolean.set(value)),
});
