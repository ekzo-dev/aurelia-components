import './textarea.scss';

import { bindable, BindingMode, customElement } from 'aurelia';

import { Sizes } from '../../interfaces';
import { coerceBoolean } from '../../utils';
import { BaseField } from '../base-field';

import template from './textarea.html';

@customElement({
  name: 'bs-textarea',
  template,
})
export class BsTextarea extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  value!: string;

  @bindable()
  rows = 3;

  @bindable()
  placeholder?: string;

  @bindable(coerceBoolean)
  floatingLabel = false;

  @bindable()
  maxlength?: number;

  @bindable()
  minlength?: number;

  @bindable()
  size?: Sizes;

  @bindable()
  autocomplete?: string;

  binding(): void {
    super.binding();
    this.ensurePlaceholder();
  }

  placeholderChanged(): void {
    this.ensurePlaceholder();
  }

  private ensurePlaceholder(): void {
    // A placeholder is required on each <input> as our method of CSS-only floating labels uses the
    // :placeholder-shown pseudo-element https://getbootstrap.com/docs/5.2/forms/floating-labels/#example
    if (this.floatingLabel && !this.placeholder) {
      this.placeholder = '.';
    }
  }
}
