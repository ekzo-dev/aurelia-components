import template from './bs-stepper.html';

import 'bs-stepper/dist/css/bs-stepper.min.css';
import './bs-stepper.scss';

import { bindable, customElement, ICustomElementViewModel, observable } from 'aurelia';
import Stepper from 'bs-stepper';

import { type BsStepperStep } from '../index';

import { coerceBoolean } from './utils';

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

  @observable()
  readonly steps: BsStepperStep[] = [];

  private stepper?: Stepper;

  constructor(public element: Element) {}

  attached() {
    this.createStepper();
  }

  detached() {
    this.destroyStepper();
  }

  stepsChanged() {
    // TODO: may be will be handled by propertyChanged(), not tested
    this.destroyStepper();
    this.createStepper();
  }

  propertyChanged(): void {
    this.destroyStepper();
    this.createStepper();
  }

  next() {
    this.stepper?.next();
  }

  previous(): void {
    this.stepper?.previous();
  }

  to(stepNumber: number): void {
    this.stepper?.to(stepNumber);
  }

  reset(): void {
    this.stepper?.reset();
  }

  private createStepper() {
    this.stepper = new Stepper(this.element, {
      linear: this.linear,
      animation: this.animation,
    });
  }

  private destroyStepper() {
    this.stepper?.destroy();
    this.stepper = undefined;

    // manually remove library classes, it does not do it
    const element = this.element as HTMLElement;

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
