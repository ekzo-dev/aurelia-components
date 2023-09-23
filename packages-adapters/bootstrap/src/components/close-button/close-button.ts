import template from './close-button.html';

import './close-button.scss';

import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

import { coerceBoolean } from '@ekzo-dev/toolkit';

@customElement({
  name: 'bs-close-button',
  template,
})
export class BsCloseButton implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  disabled: boolean = false;
}
