import './placeholder.scss';

import { bindable, customAttribute } from 'aurelia';

import { Size } from '../../types';
import { BaseAttribute } from '../base-attribute';

export type BsPlaceholderSize = Size | 'xs';
export type BsPlaceholderAnimation = 'glow' | 'wave';

const prefix = (name: string) => `placeholder-${name}`;

@customAttribute('bs-placeholder')
export class BsPlaceholder extends BaseAttribute {
  @bindable({ primary: true, type: String })
  animation?: BsPlaceholderAnimation;

  @bindable({ type: String })
  size?: BsPlaceholderSize;

  attached() {
    // set animation after attach on parent element
    this.animationChanged(this.animation);
  }

  sizeChanged(newValue?: BsPlaceholderSize, oldValue?: BsPlaceholderSize) {
    if (oldValue) this.setClass(prefix(oldValue), false);
    if (newValue) this.setClass(prefix(newValue));
  }

  animationChanged(newValue?: BsPlaceholderAnimation, oldValue?: BsPlaceholderAnimation) {
    const parent = this.element.parentElement;

    if (parent) {
      if (oldValue) parent.classList.remove(prefix(oldValue));
      if (newValue) parent.classList.add(prefix(newValue));
    }
  }

  get classes(): string[] {
    return ['placeholder', this.size ? prefix(this.size) : null].filter(Boolean);
  }
}
