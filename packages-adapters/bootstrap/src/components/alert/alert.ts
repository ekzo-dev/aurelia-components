import '../../transitions.scss';
import './alert.scss';

import { bindable, customElement, ICustomElementViewModel } from 'aurelia';
import { Alert } from 'bootstrap';

import { Variants } from '../../interfaces';
import { coerceBoolean } from '../../utils';
import { BsCloseButton } from '../close-button';

import template from './alert.html';

@customElement({
  name: 'bs-alert',
  template,
  dependencies: [BsCloseButton],
})
export class BsAlert implements ICustomElementViewModel {
  @bindable()
  variant: Variants = 'primary';

  @bindable(coerceBoolean)
  dismissible = false;

  private alert?: Alert;

  constructor(private element: Element) {}

  attaching() {
    this.createAlert();
  }

  detaching() {
    this.destroyAlert();
  }

  dismissibleChanged() {
    this.destroyAlert();
    this.createAlert();
  }

  close(): void {
    return this.alert.close();
  }

  private createAlert() {
    if (this.dismissible) {
      this.alert = new Alert(this.element);
    }
  }

  private destroyAlert() {
    if (this.alert) {
      this.alert.dispose();
      this.alert = undefined;
    }
  }
}
