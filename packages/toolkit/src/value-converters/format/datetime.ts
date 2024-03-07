import { valueConverter } from 'aurelia';
import { format } from 'date-fns';

/**
 * TODO: move to Intl.DateTimeFormat
 */
@valueConverter('formatDatetime')
export class FormatDatetime {
  patterns = {
    'date-time': 'dd.MM.yyyy HH:mm',
    date: 'dd.MM.yyyy',
    time: 'HH:mm',
  };

  toView(value, pattern, empty = null) {
    if (!value) return empty ?? value;
    pattern = this.patterns[pattern] || pattern;

    return format(new Date(value), pattern);
  }
}
