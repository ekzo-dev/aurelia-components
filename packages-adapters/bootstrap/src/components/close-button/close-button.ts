import template from './close-button.html';

import './close-button.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

@customElement({
  name: 'bs-close-button',
  template,
})
export class BsCloseButton implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  disabled: boolean = false;
}
