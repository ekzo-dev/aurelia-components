import './navbar.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-navbar-nav')
export class BsNavbarNav extends BaseAttribute {
  @bindable(coerceBoolean)
  scroll: boolean = false;

  get classes(): string[] {
    return ['navbar-nav', this.scroll ? 'navbar-nav-scroll' : ''].filter(Boolean);
  }
}
