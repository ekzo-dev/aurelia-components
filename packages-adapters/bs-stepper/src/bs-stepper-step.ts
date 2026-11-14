import template from './bs-stepper-step.html';

import { ICustomElementController } from '@aurelia/runtime-html';
import { bindable, CustomElement, customElement, ICustomElementViewModel, resolve } from 'aurelia';

import { type BsStepper } from './index';

@customElement({
  name: 'bs-stepper-step',
  template,
})
export class BsStepperStep implements ICustomElementViewModel {
  @bindable()
  label!: string;

  @bindable()
  number?: string;

  readonly id: string = `id${Math.random().toString(36).substring(2, 9)}`;

  /** The step's element, which the stepper orders its steps by */
  readonly host = resolve(HTMLElement);

  #stepper?: BsStepper;

  attaching() {
    this.host.setAttribute('id', this.id);
  }

  attached() {
    this.#registerInStepper();
  }

  detaching() {
    this.#unregisterFromStepper();
  }

  #registerInStepper(): void {
    const stepper = this.#findStepper(this.host);

    if (stepper) {
      this.#stepper = stepper.viewModel;

      // In the order of the document, not of attaching: a step attaches once all of its content has, so one holding
      // a component that attaches asynchronously comes after the steps that follow it
      const steps = this.#stepper.steps;
      const next = steps.findIndex(
        (step) => (this.host.compareDocumentPosition(step.host) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0
      );

      steps.splice(next === -1 ? steps.length : next, 0, this);
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
