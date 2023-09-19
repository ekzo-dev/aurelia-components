import './close-button.scss';

import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

import { coerceBoolean } from '../../utils';

import template from './close-button.html';

@customElement({
  name: 'bs-close-button',
  template,
})
export class BsCloseButton implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  disabled = false;
}
