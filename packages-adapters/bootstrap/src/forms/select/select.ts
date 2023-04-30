import { customElement, bindable, BindingMode } from 'aurelia';
import { Iterable, coerceBoolean, coerceNumber } from '@ekzo/toolkit';
import { BaseField } from '../base-field';
import { Sizes } from '../../interfaces';
import template from './select.html';
import './select.scss';

@customElement({
  name: 'bs-select',
  template,
  dependencies: [Iterable],
})
export class BsSelect extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  value!: any | any[];

  @bindable()
  options: Map<any, string> | Record<any, string> | Array<[any, string]> = [];

  @bindable(coerceBoolean)
  multiple: boolean = false;

  @bindable(coerceBoolean)
  floatingLabel: boolean = false;

  @bindable(coerceNumber)
  size?: number;

  @bindable()
  bsSize?: Sizes;
}
