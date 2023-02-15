import { valueConverter } from 'aurelia';

@valueConverter('formatFilesize')
export class FormatFilesizeValueConverter {
  toView(value) {
    if (value === undefined || value === null) return value;

    const units = ['б', 'кб', 'мб', 'гб', 'тб', 'пб', 'еб', 'зб', 'YB'];
    let bytes = value;

    const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1000)), units.length - 1);
    bytes = (bytes / Math.pow(1000, exponent)).toFixed(2);

    return `${bytes} ${units[exponent]}`;
  }
}
