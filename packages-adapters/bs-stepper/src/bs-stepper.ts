import template from './bs-stepper.html';

import 'bs-stepper/dist/css/bs-stepper.min.css';
import './bs-stepper.css';

import type { BsStepperStep } from './bs-stepper-step';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement, ICustomElementViewModel, resolve, watch } from 'aurelia';
import Stepper from 'bs-stepper';

export interface IBsStepperEventDetail {
  to: number;
  from: number;
  indexStep: number;
}

@customElement({
  name: 'bs-stepper',
  template,
})
export class BsStepper implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  linear: boolean = true;

  @bindable(coerceBoolean)
  animation: boolean = false;

  @bindable(coerceBoolean)
  vertical: boolean = false;

  readonly steps: BsStepperStep[] = [];

  #stepper?: Stepper;

  readonly #element = resolve(HTMLElement);

  detaching() {
    this.#destroyStepper();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @watch('steps.length')
  stepsChanged() {
    if (this.#stepper) {
      this.#destroyStepper();
    }

    if (this.steps.length) {
      this.#createStepper();
    }
  }

  propertyChanged() {
    this.#destroyStepper();
    this.#createStepper();
  }

  next() {
    return this.#stepper?.next();
  }

  previous() {
    return this.#stepper?.previous();
  }

  to(stepNumber: number) {
    return this.#stepper?.to(stepNumber);
  }

  reset() {
    return this.#stepper?.reset();
  }

  #createStepper() {
    this.#stepper = new Stepper(this.#element, {
      linear: this.linear,
      animation: this.animation,
    });
  }

  #destroyStepper() {
    this.#stepper?.destroy();
    this.#stepper = undefined;

    // manually remove library classes, it does not do it
    const element = this.#element;

    element.classList.remove('linear');
    element.querySelectorAll('div.step').forEach((step) => {
      step.classList.remove('active');
    });
    element.querySelectorAll('button.step-trigger').forEach((button) => {
      button.removeAttribute('disabled');
    });
    element.querySelectorAll('bs-stepper-step').forEach((step) => {
      step.classList.remove('active', 'dstepper-block', 'dstepper-none', 'fade');
    });
  }
}
