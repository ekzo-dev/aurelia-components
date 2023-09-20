import { customElement, ICustomElementViewModel } from 'aurelia';
import template from './nav-item.html';
import './nav.scss';

@customElement({
  name: 'bs-nav-item',
  template,
})
export class BsNavItem implements ICustomElementViewModel {}
