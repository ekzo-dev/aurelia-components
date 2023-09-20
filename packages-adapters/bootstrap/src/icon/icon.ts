import { customElement, bindable } from 'aurelia';

import template from './icon.html';
import './icon.scss';

// TODO make icons path configurable local/remote
const spritePath = 'bootstrap-icons.svg';

@customElement({
  name: 'bs-icon',
  template,
})
export class BsIcon {
  @bindable()
  name!: string;

  use!: HTMLElement;

  attaching() {
    this.setIcon();
  }

  nameChanged() {
    this.setIcon();
  }

  private setIcon(): void {
    // to support simple binding to SVG attributes from template one needs to include Aurelia SVGAnalyzer
    // we use a simpler approach with custom setAttribute()
    this.use.setAttribute('xlink:href', `${spritePath}#${this.name}`);
    // SVG 2 removed the need for the xlink namespace, so instead of xlink:href you should use href
    this.use.setAttribute('href', `${spritePath}#${this.name}`);
  }
}
