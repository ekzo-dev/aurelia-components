import { customAttribute, ICustomAttributeViewModel } from 'aurelia';
import './navbar.scss';

@customAttribute('bs-navbar-brand')
export class BsNavbarBrand implements ICustomAttributeViewModel {
  constructor(private element: HTMLElement) {}

  attaching() {
    this.element.classList.add('navbar-brand');
  }

  detaching() {
    this.element.classList.remove('navbar-brand');
  }
}
