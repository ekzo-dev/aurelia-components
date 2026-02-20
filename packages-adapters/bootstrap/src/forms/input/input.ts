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

  @bindable()
  placeholder?: string;

  @bindable(coerceBoolean)
  floatingLabel: boolean = this.config.floatingLabels;

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

  bound() {
    super.bound();
    this.#ensurePlaceholder();
    this.datalistChanged(this.datalist);
  }

  placeholderChanged(): void {
    this.#ensurePlaceholder();
  }

  floatingLabelChanged(): void {
    this.#ensurePlaceholder();
  }

  datalistChanged(newValue: string[], oldValue?: string[]): void {
    if (newValue != null) {
      this.control.setAttribute('datalist', this.datalistId);
    } else if (oldValue) {
      this.control.removeAttribute('datalist');
    }
  }

  valueChanged(): void {
    if (this.control.type === 'file') {
      this.files = this.control.files;
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

  #ensurePlaceholder(): void {
    // A placeholder is required on each <input> as our method of CSS-only floating labels uses the
    // :placeholder-shown pseudo-element https://getbootstrap.com/docs/5.2/forms/floating-labels/#example
    if (this.floatingLabel && !this.placeholder) {
      this.placeholder = ' ';
    }
  }
}
