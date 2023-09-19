import './nav.scss';

import { customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-tab-content')
export class BsTabContent extends BaseAttribute {
  get classes(): string[] {
    return ['tab-content'];
  }
}
