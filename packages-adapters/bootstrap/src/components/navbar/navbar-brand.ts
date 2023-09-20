import { customAttribute } from 'aurelia';
import './navbar.scss';
import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-navbar-brand')
export class BsNavbarBrand extends BaseAttribute {
  get classes(): string[] {
    return ['navbar-brand'];
  }
}
