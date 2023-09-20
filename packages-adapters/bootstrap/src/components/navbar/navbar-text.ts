import { customAttribute } from 'aurelia';
import './navbar.scss';
import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-navbar-text')
export class BsNavbarText extends BaseAttribute {
  get classes(): string[] {
    return ['navbar-text'];
  }
}
