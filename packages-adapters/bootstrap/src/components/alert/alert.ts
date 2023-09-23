import template from './alert.html';

import '../../transitions.scss';
import './alert.scss';

import { bindable, customElement, ICustomElementViewModel } from 'aurelia';
import { Alert } from 'bootstrap';

import { BsVariant } from '../../types';
import { coerceBoolean } from '../../utils';
import { BsCloseButton } from '../close-button';

@customElement({
  name: 'bs-alert',
  template,
  dependencies: [BsCloseButton],
})
export class BsAlert implements ICustomElementViewModel {
  @bindable()
  variant: BsVariant = 'primary';

  @bindable(coerceBoolean)
  dismissible: boolean = false;

  #alert?: Alert;

  constructor(protected element: Element) {}

  attaching() {
    this.#createAlert();
  }

  detaching() {
    this.#destroyAlert();
  }

  dismissibleChanged() {
    this.#destroyAlert();
    this.#createAlert();
  }

  close(): void {
    return this.#alert.close();
  }

  #createAlert() {
    if (this.dismissible) {
      this.#alert = new Alert(this.element);
    }
  }

  #destroyAlert() {
    if (this.#alert) {
      this.#alert.dispose();
      this.#alert = undefined;
    }
  }
}
