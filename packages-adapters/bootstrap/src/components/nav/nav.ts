import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import template from './nav.html';
import './nav.scss';

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

  get classes() {
    return Object.entries({
      nav: true,
      'nav-pills': this.type === 'pills',
      'nav-tabs': this.type === 'tabs',
      'nav-justified': this.fill === 'justified',
      'nav-fill': this.fill === 'fill',
    })
      .filter((k) => k[1])
      .map((k) => k[0])
      .join(' ');
  }
}
