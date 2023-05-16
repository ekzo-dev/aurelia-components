import { bindable, customElement, ICustomElementViewModel } from 'aurelia';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import template from './navbar-nav.html';
import './navbar.scss';

@customElement({
  name: 'bs-navbar-nav',
  template,
})
export class BsNavbarNav implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  scroll: boolean = false;
}
