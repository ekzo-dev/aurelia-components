import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import template from './breadcrumb.html';
import './breadcrumb.scss';

@customElement({
  name: 'bs-breadcrumb',
  template,
})
export class BsBreadcrumb implements ICustomElementViewModel {
  @bindable()
  divider?: string;

  get dividerConfig(): Record<string, string> {
    return this.divider !== undefined
      ? {
          '--bs-breadcrumb-divider': `'${this.divider}'`,
        }
      : {};
  }
}
