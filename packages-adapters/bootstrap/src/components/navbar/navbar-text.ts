import { customElement, ICustomElementViewModel } from 'aurelia';
import template from './navbar-text.html';
import './navbar.scss';

@customElement({
  name: 'bs-navbar-text',
  template,
})
export class BsNavbarText implements ICustomElementViewModel {}
