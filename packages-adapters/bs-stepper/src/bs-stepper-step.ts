import template from './bs-stepper-step.html';

import { ICustomElementController } from '@aurelia/runtime-html';
import { bindable, CustomElement, customElement, resolve } from 'aurelia';

import { type BsStepper } from './index';

@customElement({
  name: 'bs-stepper-step',
  template,
})
export class BsStepperStep {
  @bindable()
  label!: string;

  @bindable()
  number?: string;

  readonly id: string = `id${Math.random().toString(36).substring(2, 9)}`;

  #stepper?: BsStepper;

  readonly #host: HTMLElement = resolve(HTMLElement);

  attaching() {
    this.#host.setAttribute('id', this.id);
  }

  attached() {
    this.#registerInStepper();
  }

  detached() {
    this.#unregisterFromStepper();
  }

  #registerInStepper(): void {
    const stepper = this.#findStepper(this.#host);

    if (stepper) {
      this.#stepper = stepper.viewModel;
      this.#stepper.steps.push(this);
    } else {
      console.error('Invalid usage of <bs-stepper-step> component outside of <bs-stepper>');
    }
  }

  #unregisterFromStepper(): void {
    this.#stepper?.steps.splice(this.#stepper.steps.indexOf(this), 1);
    this.#stepper = undefined;
  }

  #findStepper(element: HTMLElement): ICustomElementController<BsStepper> | null {
    if (element.tagName === 'BS-STEPPER') {
      return CustomElement.for<BsStepper>(element);
    }

    return element.parentElement ? this.#findStepper(element.parentElement) : null;
  }
}
