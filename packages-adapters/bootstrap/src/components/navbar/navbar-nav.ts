import template from './navbar-nav.html';

import './navbar.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

@customElement({
  name: 'bs-navbar-nav',
  template,
})
export class BsNavbarNav implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  scroll: boolean = false;
}
