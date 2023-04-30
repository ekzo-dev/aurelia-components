import { valueConverter } from 'aurelia';

@valueConverter('iterable')
export class Iterable {
  toView(value: any) {
    if (value instanceof Object && value.constructor === Object) {
      value = Object.entries(value);
    }
    return value;
  }
}
