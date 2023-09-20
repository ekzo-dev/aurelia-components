import './navbar.scss';

import { customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-navbar-brand')
export class BsNavbarBrand extends BaseAttribute {
  get classes(): string[] {
    return ['navbar-brand'];
  }
}
