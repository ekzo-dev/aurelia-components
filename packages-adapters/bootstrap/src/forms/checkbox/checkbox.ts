import template from './checkbox.html';

import './checkbox.scss';
import '../../components/button/button.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

import { type ButtonVariant } from '../../components';
import { Size } from '../../types';
import { BaseField } from '../base-field';

@customElement({
  name: 'bs-checkbox',
  template,
})
export class BsCheckbox extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  checked!: boolean | any[];

  @bindable()
  model?: any;

  @bindable()
  value?: string;

  @bindable()
  matcher?: (a: any, b: any) => boolean;

  @bindable(coerceBoolean)
  inline: boolean = false;

  @bindable({ type: String })
  mode?: 'switch' | 'button';

  @bindable({ type: String })
  buttonSize?: Size;

  @bindable()
  buttonVariant: ButtonVariant = 'primary';

  @bindable(coerceBoolean)
  indeterminate: boolean = false;

  @bindable(coerceBoolean)
  reverse: boolean = false;

  readonly input!: HTMLInputElement;

  indeterminateChanged() {
    if (this.input) {
      this.input.indeterminate = this.indeterminate;
    }
  }

  get classes(): string {
    return [
      this.mode === 'button' ? null : 'form-check',
      this.mode === 'switch' ? 'form-switch' : null,
      this.inline ? 'form-check-inline' : null,
      this.reverse ? 'form-check-reverse' : null,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
