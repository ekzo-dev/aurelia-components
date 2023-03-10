import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import { Toast } from 'bootstrap';
import { coerceBoolean } from '../../utils';
import { BsCloseButton } from '../close-button';
import template from './toast.html';
import { Variants } from '../../interfaces';
import '../../transitions.scss';
import '../../color-bg.scss';
import './toast.scss';

@customElement({
  name: 'bs-toast',
  template,
  dependencies: [BsCloseButton],
})
export class BsToast implements ICustomElementViewModel, Toast.Options {
  @bindable()
  header?: string;

  @bindable(coerceBoolean)
  animation: boolean = false;

  @bindable()
  variant?: Variants;

  @bindable(coerceBoolean)
  autohide: boolean = false;

  @bindable()
  delay: number = 2000;

  private toast?: Toast;

  constructor(private element: Element) {}

  attaching() {
    this.createToast();
  }

  detaching() {
    this.destroyToast();
  }

  show(): Promise<void> {
    return this.waitAnimation(true);
  }

  hide(): Promise<void> {
    return this.waitAnimation(false);
  }

  isShown(): boolean {
    return this.toast?.isShown();
  }

  private createToast(): void {
    this.toast = new Toast(this.element, {
      animation: this.animation,
      autohide: this.autohide,
      delay: this.delay,
    });
  }

  private destroyToast(): void {
    this.toast?.dispose();
    this.toast = undefined;
  }

  propertyChanged(name: keyof this): void {
    switch (name) {
      case 'animation':
      case 'autohide':
      case 'delay':
        this.destroyToast();
        this.createToast();
    }
  }

  private waitAnimation(show: boolean): Promise<void> {
    return new Promise<void>((resolve) => {
      if (show === this.isShown()) {
        return resolve();
      }

      const event = `${show ? 'shown' : 'hidden'}.bs.toast`;
      let listener = () => {
        this.element.removeEventListener(event, listener);
        resolve();
      };
      this.element.addEventListener(event, listener);

      if (!this.isShown()) this.toast?.show();
      else this.toast?.hide();
    });
  }
}
