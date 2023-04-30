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
  rows: number = 3;

  @bindable()
  placeholder: string = '';

  @bindable(coerceBoolean)
  floatingLabel: boolean = false;

  @bindable()
  maxlength?: number;

  @bindable()
  minlength?: number;
}
