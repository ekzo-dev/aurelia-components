import { customElement, bindable, BindingMode } from 'aurelia';
import { IterableValueConverter } from '@ekzo/toolkit';

import { BaseField } from '../base-field';
import { coerceBoolean, isMapOrObj } from '../../utils';
import { Sizes } from '../../interfaces';

import template from './select.html';
import './select.scss';

@customElement({
  name: 'bs-select',
  template,
  dependencies: [IterableValueConverter],
})
export class BsSelect extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  value!: any | any[];

  @bindable()
  readonly options: Map<any, string> | Record<any, string> | Array<[any, string]> = [];

  // TODO: вынести в кастом атрибут?
  @bindable()
  readonly emptyLabel?: string;

  @bindable()
  readonly emptyValue?: null | string | number;

  @bindable(coerceBoolean)
  readonly multiple: boolean = false;

  @bindable(coerceBoolean)
  readonly floatingLabel: boolean = false;

  @bindable()
  readonly size?: Sizes;

  isMapOrObj = isMapOrObj;
}
