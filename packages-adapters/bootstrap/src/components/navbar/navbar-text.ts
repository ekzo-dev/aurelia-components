import './navbar.scss';

import { customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-navbar-text')
export class BsNavbarText extends BaseAttribute {
  get classes(): string[] {
    return ['navbar-text'];
  }
}
