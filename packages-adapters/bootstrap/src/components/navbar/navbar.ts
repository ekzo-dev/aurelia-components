import { customElement, bindable, ICustomElementViewModel, slotted } from 'aurelia';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import './navbar.scss';
import template from './navbar.html';
import { Breakpoint } from '../../types';

@customElement({
  name: 'bs-navbar',
  template,
})
export class BsNavbar implements ICustomElementViewModel {
  @bindable({ type: String })
  expand?: Breakpoint | 'never';

  @bindable(coerceBoolean)
  dark: boolean = false;

  @slotted('bs-collapse')
  collapses: HTMLElement[] = [];

  get classes(): string {
    const { expand } = this;
    return [
      'navbar',
      this.dark ? 'navbar-dark' : false,
      expand ? `navbar-expand${expand !== 'never' ? `-${expand}` : ''}` : false,
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
