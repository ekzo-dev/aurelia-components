import template from './select.html';

import './select.scss';

import { coerceBoolean, coerceNumber, Iterable } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

import { Size } from '../../types';
import { BaseField } from '../base-field';

export interface ISelectOption<T = unknown> {
  value: T;
  text: string;
  disabled?: boolean;
  group?: string;
}

@customElement({
  name: 'bs-select',
  template,
  dependencies: [Iterable],
})
export class BsSelect extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  value!: unknown | unknown[];

  @bindable()
  options: Array<ISelectOption> | Array<readonly [unknown, string]> | Record<string, string> = [];

  @bindable(coerceBoolean)
  multiple: boolean = false;

  @bindable(coerceBoolean)
  floatingLabel: boolean = false;

  @bindable(coerceNumber)
  size?: number;

  @bindable()
  bsSize?: Size;

  @bindable()
  autocomplete?: string;

  @bindable()
  matcher?: (a: unknown, b: unknown) => boolean;

  getValue(key: unknown): string {
    return key == null || key === '' ? '' : undefined;
  }

  get groupedOptions() {
    const result = new Map<string, ISelectOption[]>();
    const { options } = this;

    // check object/entries
    if ((options instanceof Object && options.constructor === Object) || Array.isArray(options[0])) {
      return result;
    }

    (options as ISelectOption[]).forEach((option) => {
      const { group } = option;

      if (group) {
        const opts = result.get(group);

        if (opts) {
          opts.push(option);
        } else {
          result.set(group, [option]);
        }
      }
    });

    return result;
  }

  get ungroupedOptions(): ISelectOption[] {
    let { options } = this;

    // check object
    if (options instanceof Object && options.constructor === Object) {
      options = Object.entries(options);
    }

    // check entries
    if (Array.isArray(options[0])) {
      return (options as Array<readonly [unknown, string]>).map(([k, v]) => ({
        value: k,
        text: v,
      }));
    }

    return (options as ISelectOption[]).filter(({ group }) => group == null);
  }
}
