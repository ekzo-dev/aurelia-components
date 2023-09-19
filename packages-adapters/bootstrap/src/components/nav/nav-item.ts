import './nav.scss';

import { customElement, ICustomElementViewModel } from 'aurelia';

import template from './nav-item.html';

@customElement({
  name: 'bs-nav-item',
  template,
})
export class BsNavItem implements ICustomElementViewModel {}
