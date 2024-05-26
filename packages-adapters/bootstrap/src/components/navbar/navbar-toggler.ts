import template from './navbar-toggler.html';

import './navbar.scss';

import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

@customElement({
  name: 'bs-navbar-toggler',
  template,
})
export class BsNavbarToggler implements ICustomElementViewModel {
  @bindable()
  target?: string;
}
