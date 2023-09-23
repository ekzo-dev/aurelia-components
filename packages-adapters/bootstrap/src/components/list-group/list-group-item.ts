import './list-group.scss';

import { bindable, customAttribute } from 'aurelia';

import { BsVariant } from '../../types';
import { coerceBoolean } from '../../utils';
import { BaseAttribute } from '../base-attribute';

const prefix = (name: string) => `list-group-item-${name}`;

@customAttribute('bs-list-group-item')
export class BsListGroupItem extends BaseAttribute {
  @bindable({ primary: true, type: String })
  variant?: BsVariant;

  @bindable(coerceBoolean)
  action: boolean = false;

  @bindable(coerceBoolean)
  disabled: boolean = false;

  @bindable(coerceBoolean)
  active: boolean = false;

  propertyChanged(name: keyof this, newValue?: string | boolean, oldValue?: string | boolean) {
    switch (name) {
      case 'variant':
        if (oldValue) this.setClass(prefix(oldValue as string), false);
        if (newValue) this.setClass(prefix(newValue as string));
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
