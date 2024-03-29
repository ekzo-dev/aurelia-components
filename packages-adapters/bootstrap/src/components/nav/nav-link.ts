import './nav.scss';

import { bindable, customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-nav-link')
export class BsNavLink extends BaseAttribute {
  @bindable()
  active: boolean = false;

  @bindable()
  disabled: boolean = false;

  get classes(): string[] {
    return ['nav-link', this.active ? 'active' : null, this.disabled ? 'disabled' : null].filter(Boolean);
  }
}
