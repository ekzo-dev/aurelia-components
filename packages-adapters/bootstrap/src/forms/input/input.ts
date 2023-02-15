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
  placeholder?;

  @bindable(coerceBoolean)
  floatingLabel: boolean = false;

  @bindable()
  readonly size?: Sizes;

  input!: HTMLInputElement;

  valueChanged(value: any): void {
    // TODO: binding to file does not currently work on Aurelia 2 out of the box, need to investigate
    if (this.input.type === 'file') {
      this.files = this.input.files!;
    }
  }
}
