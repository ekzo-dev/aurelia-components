import './dropdown.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

export type BsDropdownItemType = 'item' | 'divider' | 'text' | 'header';

@customAttribute({
  name: 'bs-dropdown-item',
  defaultProperty: 'type',
})
export class BsDropdownItem extends BaseAttribute {
  @bindable()
  type: BsDropdownItemType = 'item';

  @bindable(coerceBoolean)
  disabled: boolean = false;

  @bindable(coerceBoolean)
  active: boolean = false;

  binding() {
    // attributes by nature have a default '' value, so component defaults are ignored
    if (!this.type) {
      this.type = 'item';
    }
  }

  get classes(): string[] {
    return [`dropdown-${this.type === 'text' ? 'item-text' : this.type}`, this.active ? 'active' : ''].filter(Boolean);
  }
}
