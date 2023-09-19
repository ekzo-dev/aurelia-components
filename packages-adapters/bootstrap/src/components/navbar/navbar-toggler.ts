import './navbar.scss';

import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

import { TOGGLE } from '../../constants';

import template from './navbar-toggler.html';

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

        this.button.setAttribute(TOGGLE, toggle);
      }
    }
  }
}
