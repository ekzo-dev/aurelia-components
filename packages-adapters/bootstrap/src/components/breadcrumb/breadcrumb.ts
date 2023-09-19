import './breadcrumb.scss';

import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

import template from './breadcrumb.html';

@customElement({
  name: 'bs-breadcrumb',
  template,
})
export class BsBreadcrumb implements ICustomElementViewModel {
  @bindable()
  divider?: string;

  private svgPrepare(svg): string {
    return svg !== undefined
      ? 'url(&quot;data:image/svg+xml, ' +
          svg.replace(/\n/g, `'`).replace(/"/g, `'`).replace(/</g, `%3C`).replace(/>/g, `%3E`) +
          '&quot;)'
      : '';
  }

  get dividerConfig(): Record<string, string> {
    return this.divider !== undefined
      ? {
          '--bs-breadcrumb-divider': this.divider.includes('<svg')
            ? `'${this.svgPrepare(this.divider)}'`
            : `'${this.divider}'`,
        }
      : {};
  }
}
