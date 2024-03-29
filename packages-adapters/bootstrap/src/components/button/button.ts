import './button.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customAttribute } from 'aurelia';
import { Button } from 'bootstrap';

import { TOGGLE } from '../../constants';
import { Size, Variant } from '../../types';
import { BaseAttribute } from '../base-attribute';

export type ButtonVariant =
  | Variant
  | 'link'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-light'
  | 'outline-dark';

const prefix = (name: string) => `btn-${name}`;

@customAttribute('bs-button')
export class BsButton extends BaseAttribute {
  @bindable({ type: String, primary: true })
  variant: ButtonVariant = 'primary';

  @bindable({ type: String })
  size?: Size;

  @bindable(coerceBoolean)
  disabled?: boolean;

  @bindable(coerceBoolean)
  active: boolean = false;

  @bindable(coerceBoolean)
  toggleState: boolean = false;

  binding() {
    // set default variant because primary attribute has "" default value
    if (!this.variant) this.variant = 'primary';
  }

  attaching() {
    super.attaching();
    this.createButton();
  }

  detaching() {
    super.detaching();
    this.destroyButton();
  }

  propertyChanged(name: keyof this, newValue?: string | boolean, oldValue?: string | boolean) {
    switch (name) {
      case 'variant':

      case 'size':
        if (oldValue) this.setClass(prefix(oldValue as string), false);
        if (newValue) this.setClass(prefix(newValue as string));
        break;

      case 'toggleState':
        this.destroyButton();
        this.createButton();
    }
  }

  toggle() {
    Button.getInstance(this.element)?.toggle();
  }

  get classes(): string[] {
    return ['btn', prefix(this.variant), this.size ? prefix(this.size) : '', this.active ? 'active' : ''].filter(
      Boolean
    );
  }

  private createButton() {
    if (this.toggleState) {
      this.element.setAttribute(TOGGLE, 'button');
    }
  }

  private destroyButton() {
    Button.getInstance(this.element)?.dispose();
    this.element.removeAttribute(TOGGLE);
  }
}
