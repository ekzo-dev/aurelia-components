import './dropdown.scss';

import { bindable, customAttribute } from 'aurelia';

import { TOGGLE } from '../../constants';
import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-dropdown-toggle')
export class BsDropdownToggle extends BaseAttribute {
  // TODO: Aurelia bug, set to "" when not explicitly defined (treated as primary attribute)
  // @bindable(coerceBoolean)
  @bindable()
  split: boolean = false;

  @bindable()
  arrow: boolean = true;

  attaching() {
    super.attaching();
    this.element.setAttribute(TOGGLE, 'dropdown');
  }

  detaching() {
    super.detaching();
    this.element.removeAttribute(TOGGLE);
  }

  propertyChanged(name: keyof this, newValue: boolean): void {
    this.setClass(`dropdown-toggle${name === 'split' ? '-split' : ''}`, newValue);
  }

  get classes(): string[] {
    return [this.arrow ? 'dropdown-toggle' : null, this.split ? 'dropdown-toggle-split' : null].filter(Boolean);
  }
}
