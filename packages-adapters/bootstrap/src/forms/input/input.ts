import template from './input.html';

import './input.scss';

import { coerceBoolean, uniqueId } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

import { Size } from '../../types';
import { BaseField } from '../base-field';

@customElement({
  name: 'bs-input',
  template,
})
export class BsInput extends BaseField {
  @bindable()
  type: string = 'text';

  @bindable({ mode: BindingMode.twoWay })
  value!: string;

  @bindable({ mode: BindingMode.twoWay })
  files?: FileList;

  @bindable()
  minlength?: number;

  @bindable()
  maxlength?: number;

  @bindable()
  min?: number;

  @bindable()
  max?: number;

  @bindable()
  step?: number;

  @bindable(coerceBoolean)
  multiple: boolean = false;

  @bindable(coerceBoolean)
  disabled: boolean = false;

  @bindable()
  pattern?: string;

  /* property is named like this to avoid collision with IActivationHooks['accept'] */
  @bindable()
  fileAccept?: string;

  @bindable()
  placeholder?: string;

  @bindable(coerceBoolean)
  floatingLabel: boolean = false;

  @bindable()
  size?: Size;

  @bindable()
  datalist: string[] = [];

  @bindable()
  autocomplete?: string;

  input!: HTMLInputElement;

  datalistId!: string;

  binding(): void {
    super.binding();
    this.#ensurePlaceholder();

    this.datalistId = uniqueId();
  }

  placeholderChanged(): void {
    this.#ensurePlaceholder();
  }

  floatingLabelChanged(): void {
    this.#ensurePlaceholder();
  }

  valueChanged(): void {
    // TODO: binding to file does not currently work on Aurelia 2 out of the box, need to investigate
    if (this.input.type === 'file') {
      this.files = this.input.files!;
    }
  }

  #ensurePlaceholder(): void {
    // A placeholder is required on each <input> as our method of CSS-only floating labels uses the
    // :placeholder-shown pseudo-element https://getbootstrap.com/docs/5.2/forms/floating-labels/#example
    if (this.floatingLabel && !this.placeholder) {
      this.placeholder = ' ';
    }
  }
}
