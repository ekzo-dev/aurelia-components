import template from './input.html';

import './input.scss';

import { coerceBoolean, uniqueId } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

import { Size } from '../../types';
import { BaseField } from '../base-field';

type HTMLInputBase = Partial<Omit<HTMLInputElement, 'form' | 'autocomplete'> & { form: string; autocomplete: string }>;

@customElement({
  name: 'bs-input',
  template,
})
export class BsInput extends BaseField implements HTMLInputBase {
  @bindable()
  type: string = 'text';

  @bindable()
  inputmode?: string;

  @bindable({ mode: BindingMode.twoWay })
  value!: string;

  @bindable({ mode: BindingMode.twoWay })
  files?: FileList;

  @bindable()
  minlength?: number;

  @bindable()
  maxlength?: number;

  @bindable()
  min?: string;

  @bindable()
  max?: string;

  @bindable()
  step?: string;

  @bindable(coerceBoolean)
  multiple: boolean = false;

  @bindable(coerceBoolean)
  disabled: boolean = false;

  @bindable()
  pattern?: string;

  /**
   * property is named like this to avoid collision with IActivationHooks['accept']
   * TODO: rename after https://github.com/aurelia/aurelia/issues/2383
   */
  @bindable()
  fileAccept?: string;

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

  @bindable(coerceBoolean)
  readonly: boolean = false;

  @bindable()
  size?: number;

  @bindable()
  bsSize?: Size;

  @bindable()
  datalist?: string[];

  @bindable()
  autocomplete?: string;

  datalistId: string = uniqueId();

  private _placeholder?: string;

  bound() {
    super.bound();
    this.datalistChanged(this.datalist);
  }

  datalistChanged(newValue?: string[], oldValue?: string[]): void {
    if (newValue != null) {
      this.control.setAttribute('datalist', this.datalistId);
    } else if (oldValue) {
      this.control.removeAttribute('datalist');
    }
  }

  valueChanged(): void {
    if (this.control.type === 'file') {
      this.files = this.control.files!;
    }
  }

  get classes(): string {
    return [
      this.type === 'range' ? 'form-range' : `form-control${this.readonly ? '-plaintext' : ''}`,
      this.bsSize ? `form-control-${this.bsSize}` : null,
      this.valid === true ? 'is-valid' : null,
      this.valid === false ? 'is-invalid' : null,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
