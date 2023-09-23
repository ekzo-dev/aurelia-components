import './dropdown.scss';

import { bindable, customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

// import { coerceBoolean } from '@ekzo-dev/toolkit';

export type BsDropdownItemType = 'item' | 'divider' | 'text' | 'header';

@customAttribute('bs-dropdown-item')
export class BsDropdownItem extends BaseAttribute {
  @bindable({ primary: true })
  type: BsDropdownItemType = 'item';

  @bindable()
  disabled: boolean = false;

  @bindable()
  active: boolean = false;

  binding() {
    // attributes by nature have a default '' value, so component defaults are ignored
    if ((this.type as BsDropdownItemType | '') === '') {
      this.type = 'item';
    }
  }

  get classes(): string[] {
    return [
      `dropdown-${this.type === 'text' ? 'item-text' : this.type}`,
      this.active ? 'active' : '',
      this.disabled ? 'disabled' : '',
    ].filter(Boolean);
  }
}
