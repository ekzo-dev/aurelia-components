import template from './bs-stepper-step.html';

import { ICustomElementController } from '@aurelia/runtime-html';
import { bindable, CustomElement, customElement, resolve } from 'aurelia';

import { type BsStepper } from '../index';

@customElement({
  name: 'bs-stepper-step',
  template,
})
export class BsStepperStep {
  @bindable()
  label!: string;

  @bindable()
  number?: string;

  id?: string;

  private stepper?: BsStepper;

  constructor(private readonly element: HTMLElement = resolve(HTMLElement)) {}

  attaching() {
    this.id = `id${Math.random().toString(36).substring(2, 9)}`;
    this.element.setAttribute('id', this.id);
  }

  attached() {
    this.registerInStepper();
  }

  detached() {
    this.unregisterFromStepper();
  }

  private registerInStepper(): void {
    const stepper = this.findStepper(this.element);

    if (stepper) {
      this.stepper = stepper.viewModel;
      this.stepper.steps.push(this);
    } else {
      console.error('Invalid usage of <bs-stepper-step> component outside of <bs-stepper>');
    }
  }

  private unregisterFromStepper(): void {
    this.stepper?.steps.splice(this.stepper.steps.indexOf(this), 1);
    this.stepper = undefined;
  }

  private findStepper(element: HTMLElement): ICustomElementController<BsStepper> | null {
    if (element.tagName === 'BS-STEPPER') {
      return CustomElement.for<BsStepper>(element);
    }

    return element.parentElement ? this.findStepper(element.parentElement) : null;
  }
}
