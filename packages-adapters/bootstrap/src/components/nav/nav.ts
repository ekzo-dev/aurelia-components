import './nav.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

export type NavType = 'tabs' | 'pills';
export type NavFill = 'fill' | 'justified';

@customAttribute('bs-nav')
export class BsNav extends BaseAttribute {
  @bindable()
  type?: NavType;

  @bindable()
  fill?: NavFill;

  get classes(): string[] {
    return ['nav', this.type ? `nav-${this.type}` : '', this.fill ? `nav-${this.fill}` : ''].filter(Boolean);
  }
}

@customAttribute('bs-nav-item')
export class BsNavItem extends BaseAttribute {
  get classes(): string[] {
    return ['nav-item'];
  }
}

@customAttribute('bs-nav-link')
export class BsNavLink extends BaseAttribute {
  @bindable(coerceBoolean)
  active: boolean = false;

  @bindable(coerceBoolean)
  disabled: boolean = false;

  get classes(): string[] {
    return ['nav-link', this.active ? 'active' : '', this.disabled ? 'disabled' : ''].filter(Boolean);
  }
}
