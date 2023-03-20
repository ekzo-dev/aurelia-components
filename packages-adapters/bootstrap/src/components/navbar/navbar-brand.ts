import { customElement, ICustomElementViewModel } from 'aurelia';
import template from './navbar-brand.html';
import './navbar.scss';

@customElement({
  name: 'bs-navbar-brand',
  template,
})
export class BsNavbarBrand implements ICustomElementViewModel {}
