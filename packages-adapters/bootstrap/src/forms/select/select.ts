import template from './select.html';

import './select.scss';

import { coerceBoolean, coerceNumber, Iterable } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

import { Sizes } from '../../interfaces';
import { BaseField } from '../base-field';

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

  @bindable()
  autocomplete?: string;
}
