import template from './navbar.html';

import './navbar.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement, ICustomElementViewModel, slotted } from 'aurelia';

import { Breakpoint } from '../../types';

export type NavbarExpand = Breakpoint | 'always';

@customElement({
  name: 'bs-navbar',
  template,
})
export class BsNavbar implements ICustomElementViewModel {
  @bindable({ type: String })
  expand?: NavbarExpand;

  @bindable(coerceBoolean)
  dark: boolean = false;

  @slotted('bs-collapse')
  collapses: HTMLElement[] = [];

  get classes(): string {
    const { expand } = this;

    return [
      'navbar',
      this.dark ? 'navbar-dark' : false,
      expand ? `navbar-expand${expand !== 'always' ? `-${expand}` : ''}` : false,
    ]
      .filter(Boolean)
      .join(' ');
  }

  collapsesChanged(elements: HTMLElement[]) {
    elements.forEach((e) => e.classList.add('navbar-collapse'));
  }

  detaching() {
    this.collapses.forEach((e) => e.classList.remove('navbar-collapse'));
  }
}
