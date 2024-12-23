import template from './offcanvas.html';

import './offcanvas.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement, ICustomElementViewModel, observable, resolve } from 'aurelia';
import { Offcanvas } from 'bootstrap';

import { Breakpoint } from '../../types';
import { BsCloseButton } from '../close-button';

export type OffcanvasPlacement = 'start' | 'end' | 'top' | 'bottom';

const SHOW_EVENT = 'show.bs.offcanvas';
const HIDE_EVENT = 'hide.bs.offcanvas';

@customElement({
  name: 'bs-offcanvas',
  template,
  dependencies: [BsCloseButton],
})
export class BsOffcanvas implements ICustomElementViewModel, Offcanvas.Options {
  @bindable()
  title?: string;

  @bindable(coerceBoolean)
  scroll: boolean = false;

  @bindable(coerceBoolean)
  backdrop: boolean = true;

  @bindable(coerceBoolean)
  static: boolean = false;

  @bindable(coerceBoolean)
  keyboard: boolean = true;

  @bindable()
  responsive?: Breakpoint;

  @bindable()
  placement?: OffcanvasPlacement = 'start';

  @observable()
  private opened: boolean = false;

  private offcanvas?: Offcanvas;

  constructor(private readonly element: HTMLElement = resolve(HTMLElement)) {}

  attaching() {
    this.createOffcanvas();
  }

  detaching() {
    this.destroyOffcanvas();
  }

  propertyChanged(name: keyof this): void {
    switch (name) {
      case 'backdrop':

      case 'static':

      case 'keyboard':

      case 'scroll':
        this.destroyOffcanvas();
        this.createOffcanvas();
    }
  }

  show(): Promise<void> {
    return this.waitAnimation(true);
  }

  hide(): Promise<void> {
    return this.waitAnimation(false);
  }

  toggle(): Promise<void> {
    return this.waitAnimation(!this.opened);
  }

  handleEvent(event: Event): void {
    this.opened = event.type === SHOW_EVENT;
  }

  private waitAnimation(show: boolean): Promise<void> {
    return new Promise<void>((resolve) => {
      if (show === this.opened) {
        return resolve();
      }

      const event = `${show ? 'shown' : 'hidden'}.bs.offcanvas`;

      const listener = () => {
        this.element.removeEventListener(event, listener);
        resolve();
      };

      this.element.addEventListener(event, listener);
      this.offcanvas[show ? 'show' : 'hide']();
    });
  }

  private createOffcanvas(): void {
    const { element } = this;

    this.offcanvas = new Offcanvas(element, {
      backdrop: this.backdrop && this.static ? 'static' : this.backdrop,
      scroll: this.scroll,
      keyboard: this.keyboard,
    });

    element.addEventListener(SHOW_EVENT, this);
    element.addEventListener(HIDE_EVENT, this);
  }

  private destroyOffcanvas(): void {
    this.offcanvas?.dispose();
    this.offcanvas = undefined;

    this.element.removeEventListener(SHOW_EVENT, this);
    this.element.removeEventListener(HIDE_EVENT, this);
  }
}
