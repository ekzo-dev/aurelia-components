import { bindable, BindingMode, customElement } from 'aurelia';

import { BaseField } from '../base-field';
import { coerceBoolean } from '../../utils';

import template from './radio.html';
import './radio.scss';

@customElement({
  name: 'bs-radio',
  template,
})
export class BsRadio extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  checked: boolean | any[] = false;

  @bindable()
  readonly model?: any;

  @bindable()
  readonly value?: string;

  @bindable()
  readonly matcher?: (a: any, b: any) => boolean;

  @bindable(coerceBoolean)
  readonly inline: boolean = false;
}
