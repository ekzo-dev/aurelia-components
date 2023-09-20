import './dropdown.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

export type BsDropdownDirection = 'down' | 'up' | 'end' | 'start';

@customAttribute('bs-dropdown')
export class BsDropdown extends BaseAttribute {
  @bindable({ primary: true, type: String })
  direction: BsDropdownDirection = 'down';

  @bindable(coerceBoolean)
  center: boolean = false;

  binding() {
    // set default variant because primary attribute has "" default value
    if (!this.direction) this.direction = 'down';
  }

  centerChanged(newValue: boolean) {
    this.setClass(`drop${this.direction}-center`, newValue);
  }

  directionChanged(newValue: BsDropdownDirection, oldValue: BsDropdownDirection) {
    this.setClass(`drop${oldValue}`, false);
    this.setClass(`drop${newValue}`);
  }

  get classes(): string[] {
    return [`drop${this.direction}`, this.center ? `drop${this.direction}-center` : ''].filter(Boolean);
  }
}
