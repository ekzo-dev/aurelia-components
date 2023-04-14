import { customElement, bindable, BindingMode } from 'aurelia';

import { BaseField } from '../base-field';
import { coerceBoolean } from '../../utils';
import template from './input.html';

import './input.scss';
import { Sizes } from '../../interfaces';

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

  @bindable()
  decimal?: number;

  @bindable(coerceBoolean)
  multiple: boolean = false;

  @bindable(coerceBoolean)
  disabled: boolean = false;

  @bindable()
  pattern?: string;

  @bindable()
  accept?: string;

  @bindable()
  placeholder?: string;

  @bindable(coerceBoolean)
  floatingLabel: boolean = false;

  @bindable()
  readonly size?: Sizes;

  input!: HTMLInputElement;

  binding(): void {
    super.binding();
    this.ensurePlaceholder();
  }

  placeholderChanged(): void {
    this.ensurePlaceholder();
  }

  valueChanged(value: any): void {
    // TODO: binding to file does not currently work on Aurelia 2 out of the box, need to investigate
    if (this.input.type === 'file') {
      this.files = this.input.files!;
    }
  }

  private ensurePlaceholder(): void {
    // A placeholder is required on each <input> as our method of CSS-only floating labels uses the
    // :placeholder-shown pseudo-element https://getbootstrap.com/docs/5.2/forms/floating-labels/#example
    if (this.floatingLabel && !this.placeholder) {
      this.placeholder = '.';
    }
  }
}
