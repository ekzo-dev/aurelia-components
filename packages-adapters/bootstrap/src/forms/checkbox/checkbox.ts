import './checkbox.scss';
import '../../components/button/button.scss';

import { bindable, BindingMode, customElement } from 'aurelia';

import { type BsButtonVariant } from '../../components';
import { Size } from '../../types';
import { coerceBoolean } from '../../utils';
import { BaseField } from '../base-field';

import template from './checkbox.html';

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
  inline = false;

  @bindable({ type: String })
  mode?: 'switch' | 'button';

  @bindable({ type: String })
  buttonSize?: Size;

  @bindable()
  buttonVariant: BsButtonVariant = 'primary';

  @bindable(coerceBoolean)
  indeterminate = false;

  @bindable(coerceBoolean)
  reverse = false;

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
