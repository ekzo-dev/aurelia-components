import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import template from './navbar-toggler.html';
import './navbar.scss';

@customElement({
  name: 'bs-navbar-toggler',
  template,
})
export class BsNavbarToggler implements ICustomElementViewModel {
  @bindable()
  target?: string;

  readonly button!: HTMLButtonElement;

  constructor(private element: HTMLElement) {}

  attached() {
    if (this.target) {
      const target = this.element.parentElement.querySelector(this.target);
      if (target) {
        const toggle = target.tagName.replace('BS-', '').toLowerCase();
        this.button.setAttribute('data-bs-toggle', toggle);
      }
    }
  }
}
