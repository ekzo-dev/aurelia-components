import { valueConverter } from 'aurelia';
import { format, parseISO } from 'date-fns';

@valueConverter('formatDatetime')
export class FormatDatetimeValueConverter {
  patterns = {
    datetime: 'dd.MM.yyyy HH:mm',
    date: 'dd.MM.yyyy',
    time: 'HH:mm',
  };

  toView(value, pattern) {
    if (value === undefined || value === null) return value;

    pattern = this.patterns[pattern] || pattern;

    return format(parseISO(value), pattern);
  }
}
