import '../../transitions.scss';
import './modal.scss';

import { bindable, customElement, ICustomElementViewModel, observable } from 'aurelia';
import { Modal } from 'bootstrap';

import { coerceBoolean } from '../../utils';
import { BsCloseButton } from '../close-button';

import template from './modal.html';

export type ModalSize = 'sm' | 'lg' | 'xl';
export type ModalFullscreen = 'always' | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down';

const SHOW_EVENT = 'show.bs.modal';
const HIDE_EVENT = 'hide.bs.modal';

@customElement({
  name: 'bs-modal',
  template,
  dependencies: [BsCloseButton],
})
export class BsModal implements ICustomElementViewModel, Modal.Options, EventListenerObject {
  @bindable()
  title?: string;

  @bindable(coerceBoolean)
  animation = true;

  @bindable(coerceBoolean)
  centered = false;

  @bindable(coerceBoolean)
  scrollable = false;

  @bindable(coerceBoolean)
  static = false;

  @bindable()
  size?: ModalSize;

  @bindable()
  fullscreen?: ModalFullscreen;

  @bindable(coerceBoolean)
  backdrop = true;

  @bindable(coerceBoolean)
  keyboard = true;

  @bindable(coerceBoolean)
  focus = true;

  @observable()
  private opened = false;

  private modal?: Modal;

  private observer?: ResizeObserver;

  private dialog!: HTMLDivElement;

  constructor(private element: Element) {}

  attaching() {
    this.createModal();
  }

  detaching() {
    this.unobserveResize();
    this.destroyModal();
  }

  propertyChanged(name: keyof this): void {
    switch (name) {
      case 'backdrop':

      case 'static':

      case 'keyboard':

      case 'focus':
        this.destroyModal();
        this.createModal();
    }
  }

  openedChanged(value: boolean): void {
    if (value) {
      this.observeResize();
    } else {
      this.unobserveResize();
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

  get classes() {
    const { fullscreen, size } = this;

    return [
      'modal-dialog',
      this.centered ? 'modal-dialog-centered' : null,
      this.scrollable ? 'modal-dialog-scrollable' : null,
      size ? 'modal-' + size : null,
      fullscreen ? 'modal-fullscreen' + (fullscreen === 'always' ? '' : '-' + fullscreen) : null,
    ]
      .filter(Boolean)
      .join(' ');
  }

  private waitAnimation(show: boolean): Promise<void> {
    return new Promise<void>((resolve) => {
      if (show === this.opened) {
        return resolve();
      }

      const event = `${show ? 'shown' : 'hidden'}.bs.modal`;

      const listener = () => {
        this.element.removeEventListener(event, listener);
        resolve();
      };

      this.element.addEventListener(event, listener);
      this.modal.toggle();
    });
  }

  private createModal(): void {
    const { element } = this;

    this.modal = new Modal(element, {
      backdrop: this.backdrop && this.static ? 'static' : this.backdrop,
      focus: this.focus,
      keyboard: this.keyboard,
    });

    element.addEventListener(SHOW_EVENT, this);
    element.addEventListener(HIDE_EVENT, this);
  }

  private destroyModal(): void {
    this.modal?.dispose();
    this.modal = undefined;

    this.element.removeEventListener(SHOW_EVENT, this);
    this.element.removeEventListener(HIDE_EVENT, this);
  }

  private observeResize(): void {
    if (this.scrollable) return;

    this.observer = new ResizeObserver(() => this.modal?.handleUpdate());
    this.observer.observe(this.dialog);
  }

  private unobserveResize(): void {
    this.observer?.unobserve(this.dialog);
    this.observer = undefined;
  }

  handleEvent(event: Event): void {
    this.opened = event.type === SHOW_EVENT;
  }
}
