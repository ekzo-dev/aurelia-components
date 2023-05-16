import { bindable, BindingMode, customElement } from 'aurelia';
import { BaseField } from '../base-field';
import { coerceBoolean } from '../../utils';
import template from './checkbox.html';
import './checkbox.scss';

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

  @bindable(coerceBoolean)
  switcher: boolean = false;

  @bindable(coerceBoolean)
  indeterminate: boolean = false;

  readonly input!: HTMLInputElement;

  indeterminateChanged() {
    if (this.input) {
      this.input.indeterminate = this.indeterminate;
    }
  }
}
