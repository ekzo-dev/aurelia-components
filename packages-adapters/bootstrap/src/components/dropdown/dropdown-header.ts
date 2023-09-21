import './dropdown.scss';

import { customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-dropdown-header')
export class BsDropdownHeader extends BaseAttribute {
  get classes(): string[] {
    return ['dropdown-header'];
  }
}
