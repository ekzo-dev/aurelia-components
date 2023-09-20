import template from './radio-group.html';

import './radio.scss';

import { BsButtonVariant, Size } from '@ekzo-dev/bootstrap';
import { coerceBoolean, Iterable, uniqueId } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

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
  buttonSize?: Size;

  @bindable()
  buttonVariant: BsButtonVariant = 'primary';

  binding() {
    super.binding();

    if (!this.name) {
      this.name = uniqueId();
    }
  }
}
