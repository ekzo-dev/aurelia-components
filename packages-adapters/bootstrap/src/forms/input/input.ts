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

  /* property is named like this to avoid collision with IActivationHooks['accept'] */
  @bindable()
  fileAccept?: string;

  @bindable()
  placeholder?: string;

  @bindable(coerceBoolean)
  floatingLabel: boolean = false;

  @bindable(coerceBoolean)
  readonly: boolean = false;

  @bindable()
  size?: number;

  @bindable()
  bsSize?: Size;

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
