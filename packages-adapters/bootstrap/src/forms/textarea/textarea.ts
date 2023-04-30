import { customElement, bindable, BindingMode } from 'aurelia';

import { BaseField } from '../base-field';
import template from './textarea.html';

import './textarea.scss';
import { coerceBoolean } from '../../utils';

@customElement({
  name: 'bs-textarea',
  template,
})
export class BsTextarea extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  value!: string;

  @bindable()
  readonly rows: number = 3;

  @bindable()
  readonly placeholder: string = '';

  @bindable(coerceBoolean)
  readonly floatingLabel: boolean = false;

  @bindable()
  readonly maxlength?: number;

  @bindable()
  readonly minlength?: number;
}
