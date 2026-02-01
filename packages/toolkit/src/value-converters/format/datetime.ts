import { valueConverter } from 'aurelia';
import { format } from 'date-fns';

/**
 * TODO: move to Intl.DateTimeFormat
 */
@valueConverter('formatDatetime')
export class FormatDatetime {
  patterns: Record<string, string> = {
    'date-time': 'dd.MM.yyyy HH:mm',
    date: 'dd.MM.yyyy',
    time: 'HH:mm',
  };

  toView(value: string, pattern: string, empty: string = null): string {
    if (!value) return empty ?? value;
    pattern = this.patterns[pattern] ?? pattern;

    return format(new Date(value), pattern);
  }
}
