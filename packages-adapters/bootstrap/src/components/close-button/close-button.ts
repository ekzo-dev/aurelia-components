import './close-button.scss';

// import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-close-button')
export class BsCloseButton extends BaseAttribute {
  // TODO: change to @bindable(coerceBoolean) after Aurelia upgrade
  @bindable()
  white: boolean = false;

  get classes(): string[] {
    return ['btn-close', this.white ? 'btn-close-white' : ''].filter(Boolean);
  }
}
