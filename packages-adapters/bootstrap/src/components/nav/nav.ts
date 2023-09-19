import './nav.scss';

import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

import template from './nav.html';

export type NavType = 'tabs' | 'pills';
export type NavFill = 'fill' | 'justified';

@customElement({
  name: 'bs-nav',
  template,
})
export class BsNav implements ICustomElementViewModel {
  @bindable()
  type?: NavType;

  @bindable()
  fill?: NavFill;

  get classes(): string {
    return ['nav', this.type ? `nav-${this.type}` : false, this.fill ? `nav-${this.fill}` : false]
      .filter(Boolean)
      .join(' ');
  }
}
