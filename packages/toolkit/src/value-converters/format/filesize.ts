import { valueConverter } from 'aurelia';

@valueConverter('formatFilesize')
export class FormatFilesize {
  toView(value: number) {
    if (value === undefined || value === null) return value;

    const units = ['б', 'кб', 'мб', 'гб', 'тб', 'пб', 'еб', 'зб', 'YB'];
    const exponent = Math.min(Math.floor(Math.log(value) / Math.log(1000)), units.length - 1);
    const bytes = (value / Math.pow(1000, exponent)).toFixed(2);

    return `${bytes} ${units[exponent]}`;
  }
}
