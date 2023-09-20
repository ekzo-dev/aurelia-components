import template from './nav-item.html';

import './nav.scss';

import { customElement, ICustomElementViewModel } from 'aurelia';

@customElement({
  name: 'bs-nav-item',
  template,
})
export class BsNavItem implements ICustomElementViewModel {}
