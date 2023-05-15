import { customAttribute, ICustomAttributeViewModel } from 'aurelia';
import './navbar.scss';

@customAttribute('bs-navbar-text')
export class BsNavbarText implements ICustomAttributeViewModel {
  constructor(private element: HTMLElement) {}

  attaching() {
    this.element.classList.add('navbar-text');
  }

  detaching() {
    this.element.classList.remove('navbar-text');
  }
}
