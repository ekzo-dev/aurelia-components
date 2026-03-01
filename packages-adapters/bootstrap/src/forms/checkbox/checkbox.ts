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
  checked!: boolean | unknown[];

  @bindable()
  model?: unknown;

  @bindable()
  value?: string;

  @bindable()
  matcher?: (a: unknown, b: unknown) => boolean;

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

  bound() {
    super.bound();
    this.indeterminateChanged();
  }

  indeterminateChanged() {
    this.control.indeterminate = this.indeterminate;
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
