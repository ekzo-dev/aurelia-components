import template from './textarea.html';

import './textarea.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

import { Size } from '../../types';
import { BaseField } from '../base-field';

@customElement({
  name: 'bs-textarea',
  template,
})
export class BsTextarea extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  value!: string;

  @bindable()
  rows: number = 3;

  @bindable(coerceBoolean)
  floatingLabel: boolean = this.config.floatingLabels;

  @bindable()
  get placeholder(): string | undefined {
    // https://getbootstrap.com/docs/5.3/forms/floating-labels/#example
    return !this._placeholder && this.floatingLabel ? ' ' : this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
  }

  @bindable()
  maxlength?: number;

  @bindable()
  minlength?: number;

  @bindable()
  size?: Size;

  @bindable()
  autocomplete?: string;

  private _placeholder?: string;
}
