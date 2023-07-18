import { bindable, BindingMode, customElement } from 'aurelia';
import { BaseField } from '../base-field';
import { coerceBoolean } from '../../utils';
import { Size } from '../../types';
import { type BsButtonVariant } from '../../components';
import template from './checkbox.html';
import './checkbox.scss';
import '../../components/button/button.scss';

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
  buttonVariant: BsButtonVariant = 'primary';

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
