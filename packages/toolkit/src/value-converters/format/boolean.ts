import { valueConverter } from 'aurelia';

@valueConverter('formatBoolean')
export class FormatBoolean {
  toView(value, trueText = 'Да', falseText = 'Нет') {
    if (value === undefined || value === null) return value;

    return value ? trueText : falseText;
  }
}
