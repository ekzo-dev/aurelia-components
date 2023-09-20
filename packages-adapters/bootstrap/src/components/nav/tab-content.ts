import { customAttribute } from 'aurelia';
import './nav.scss';
import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-tab-content')
export class BsTabContent extends BaseAttribute {
  get classes(): string[] {
    return ['tab-content'];
  }
}
