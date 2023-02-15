import { valueConverter } from 'aurelia';

type AllowedTypes = string | number | null | undefined | (string | number)[];

@valueConverter('toInteger')
export class ToInteger {
  toView(value: AllowedTypes) {
    return this.format(value);
  }

  fromView(value: AllowedTypes) {
    return this.format(value);
  }

  private format(value: AllowedTypes) {
    let result;

    if (typeof value === 'number' || value === null || value === undefined) {
      result = value;
    } else if (value === '') {
      result = null;
    } else if (Array.isArray(value)) {
      // для массивов необходимо именно форматировать значения внутри существующего массива, а не создавать новый!!
      result = value;
      result.forEach((item) => {
        item = this.convertIfNumeric(item);
      });
    } else {
      result = this.convertIfNumeric(value);
    }

    return result;
  }

  private convertIfNumeric(value: string | number) {
    value = value.toString();

    if (/^\d+$/.test(value)) {
      value = parseInt(value, 10);
    }

    return value;
  }
}
