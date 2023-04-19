import { valueConverter } from 'aurelia';
import { format, parseISO } from 'date-fns';

/**
 * TODO: move to Intl.DateTimeFormat
 */
@valueConverter('formatDatetime')
export class FormatDatetime {
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
