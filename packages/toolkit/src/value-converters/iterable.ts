import { valueConverter } from 'aurelia';

@valueConverter('iterable')
export class Iterable {
  toView(value: any) {
    if (value instanceof Object && value.constructor === Object) {
      value = new Map(Object.entries(value));
    }
    return value;
  }
}
