import template from './icon.html';

import './icon.scss';

import { bindable, customElement, resolve } from 'aurelia';
import iconsUrl from 'bootstrap-icons/bootstrap-icons.svg';

import { IBootstrapOptions } from '../configuration';

@customElement({
  name: 'bs-icon',
  template,
})
export class BsIcon {
  @bindable()
  name!: string;

  use!: HTMLElement;

  private readonly _options = resolve(IBootstrapOptions);

  bound() {
    this.#setIcon();
  }

  nameChanged() {
    this.#setIcon();
  }

  #setIcon(): void {
    const url = this._options.iconsSpritePath ?? (iconsUrl as string);

    // to support simple binding to SVG attributes from template one needs to include Aurelia SVGAnalyzer
    // we use a simpler approach with custom setAttribute()
    this.use.setAttribute('xlink:href', `${url}#${this.name}`);
  }
}
