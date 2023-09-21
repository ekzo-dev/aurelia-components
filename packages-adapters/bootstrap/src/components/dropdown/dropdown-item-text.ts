import './dropdown.scss';

import { customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-dropdown-item-text')
export class BsDropdownItemText extends BaseAttribute {
  get classes(): string[] {
    return ['dropdown-item-text'];
  }
}
