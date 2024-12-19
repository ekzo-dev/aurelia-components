import template from './radio-group.html';

import './radio.scss';

import { coerceBoolean, Iterable, uniqueId } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

import { ButtonVariant } from '../../components';
import { Size } from '../../types';
import { BaseField } from '../base-field';

import { BsRadio } from './radio';

export interface IRadioOption<T = unknown> {
  value: T;
  text: string;
  disabled?: boolean;
}

@customElement({
  name: 'bs-radio-group',
  template,
  dependencies: [Iterable, BsRadio],
})
export class BsRadioGroup extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  checked!: unknown;

  @bindable()
  options: Array<IRadioOption> | Array<readonly [unknown, string]> | Record<string, string> = [];

  @bindable()
  matcher?: (a: unknown, b: unknown) => boolean;

  @bindable(coerceBoolean)
  inline: boolean = false;

  @bindable({ type: String })
  mode?: 'button';

  @bindable({ type: String })
  buttonSize?: Size;

  @bindable()
  buttonVariant: ButtonVariant = 'primary';

  binding() {
    super.binding();

    if (!this.name) {
      this.name = uniqueId();
    }
  }

  get radioOptions(): IRadioOption[] {
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

    return options as IRadioOption[];
  }
}
