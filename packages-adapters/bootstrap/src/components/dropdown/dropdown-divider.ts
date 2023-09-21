import './dropdown.scss';

import { customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-dropdown-divider')
export class BsDropdownDivider extends BaseAttribute {
  get classes(): string[] {
    return ['dropdown-divider'];
  }
}
