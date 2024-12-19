import { valueConverter } from 'aurelia';

@valueConverter('formatBoolean')
export class FormatBoolean {
  toView(value: boolean | null | undefined, trueText = 'Да', falseText = 'Нет'): string | null | undefined {
    if (value == null) return value as undefined;

    return value ? trueText : falseText;
  }
}
