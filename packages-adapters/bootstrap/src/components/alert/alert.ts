import template from './alert.html';

import '../../transitions.scss';
import './alert.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement, ICustomElementViewModel, resolve } from 'aurelia';
import { Alert } from 'bootstrap';

import { Variant } from '../../types';
import { BsCloseButton } from '../close-button';

@customElement({
  name: 'bs-alert',
  template,
  dependencies: [BsCloseButton],
})
export class BsAlert implements ICustomElementViewModel {
  @bindable()
  variant: Variant = 'primary';

  @bindable(coerceBoolean)
  dismissible: boolean = false;

  #alert?: Alert;

  constructor(protected readonly element: HTMLElement = resolve(HTMLElement)) {}

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
