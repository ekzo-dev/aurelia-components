import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import './navbar.scss';
import template from './navbar.html';
import { Breakpoint } from '../../types';

@customElement({
  name: 'bs-navbar',
  template,
})
export class BsNavbar implements ICustomElementViewModel {
  @bindable()
  expand?: Breakpoint | '';

  @bindable(coerceBoolean)
  dark: boolean = false;

  get classes(): string {
    const { expand } = this;
    return [
      'navbar',
      this.dark ? 'navbar-dark' : false,
      expand != null ? `navbar-expand${expand ? `-${expand}` : ''}` : false,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
