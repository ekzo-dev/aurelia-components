import './list-group.scss';

import { bindable, customAttribute } from 'aurelia';

import { Variant } from '../../types';
import { coerceBoolean } from '../../utils';
import { BaseAttribute } from '../base-attribute';

const prefix = (name) => `list-group-item-${name}`;

@customAttribute('bs-list-group-item')
export class BsListGroupItem extends BaseAttribute {
  @bindable({ primary: true, type: String })
  variant?: Variant;

  @bindable(coerceBoolean)
  action = false;

  @bindable(coerceBoolean)
  disabled = false;

  @bindable(coerceBoolean)
  active = false;

  propertyChanged(name: keyof this, newValue?: string | boolean, oldValue?: string | boolean) {
    switch (name) {
      case 'variant':
        if (oldValue) this.setClass(prefix(oldValue), false);
        if (newValue) this.setClass(prefix(newValue));
        break;

      case 'action':
        this.setClass(prefix('action'), newValue as boolean);
    }
  }

  get classes(): string[] {
    return [
      'list-group-item',
      this.disabled ? 'disabled' : null,
      this.active ? 'active' : null,
      this.action ? prefix('action') : null,
      this.variant ? prefix(this.variant) : null,
    ].filter(Boolean);
  }
}
