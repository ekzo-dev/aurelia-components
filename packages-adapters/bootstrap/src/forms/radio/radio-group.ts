import { bindable, BindingMode, customElement } from 'aurelia';
import { coerceBoolean, uniqueId, Iterable } from '@ekzo-dev/toolkit';
import { BaseField } from '../base-field';
import { BsRadio } from './radio';
import template from './radio-group.html';
import './radio.scss';

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

  binding() {
    super.binding();

    if (!this.name) {
      this.name = uniqueId();
    }
  }
}
