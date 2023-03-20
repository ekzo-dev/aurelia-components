import { bindable, customElement, ICustomElementViewModel } from 'aurelia';
import template from './navbar-nav.html';

import { coerceBoolean } from '../../utils';

import './navbar.scss';

@customElement({
  name: 'bs-navbar-nav',
  template,
})
export class BsNavbarNav implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  scroll?: boolean;
}
