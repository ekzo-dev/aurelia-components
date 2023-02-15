import { valueConverter } from 'aurelia';

@valueConverter('falseAsNull')
export class FalseAsNullValueConverter {
  toView(value: null | boolean): boolean {
    return value === null || value === undefined ? false : value;
  }

  fromView(value: boolean): null | boolean {
    return value === false ? null : value;
  }
}
