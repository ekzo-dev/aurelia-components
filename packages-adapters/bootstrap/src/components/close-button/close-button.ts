import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import template from './close-button.html';
import './close-button.scss';
import { coerceBoolean } from '../../utils';

@customElement({
  name: 'bs-close-button',
  template,
})
export class BsCloseButton implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  disabled: boolean = false;
}
