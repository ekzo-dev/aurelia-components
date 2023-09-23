import template from './radio-group.html';

import './radio.scss';

import { coerceBoolean, Iterable, uniqueId } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

import { BsButtonVariant } from '../../components';
import { BsSize } from '../../types';
import { BaseField } from '../base-field';

import { BsRadio } from './radio';

@customElement({
  name: 'bs-radio-group',
  template,
  dependencies: [Iterable, BsRadio],
})
export class BsRadioGroup extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  checked!: any;

  @bindable()
  options: Map<any, string> | Record<any, string> | Array<[any, string]> = [];

  @bindable()
  matcher?: (a: any, b: any) => boolean;

  @bindable(coerceBoolean)
  inline: boolean = false;

  @bindable({ type: String })
  mode?: 'button';

  @bindable({ type: String })
  buttonSize?: BsSize;

  @bindable()
  buttonVariant: BsButtonVariant = 'primary';

  binding() {
    super.binding();

    if (!this.name) {
      this.name = uniqueId();
    }
  }
}
