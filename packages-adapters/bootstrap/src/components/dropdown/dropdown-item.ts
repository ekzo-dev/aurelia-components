import './dropdown.scss';

import { bindable, customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

// import { coerceBoolean } from '../../utils';

@customAttribute('bs-dropdown-item')
export class BsDropdownItem extends BaseAttribute {
  @bindable()
  disabled: boolean = false;

  @bindable()
  active: boolean = false;

  get classes(): string[] {
    return ['dropdown-item', this.active ? 'active' : '', this.disabled ? 'disabled' : ''].filter(Boolean);
  }
}
