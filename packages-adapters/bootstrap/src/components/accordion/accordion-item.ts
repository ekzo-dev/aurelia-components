import template from './accordion-item.html';

import './accordion.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement, ICustomElementViewModel } from 'aurelia';

import { BsCollapse } from '../collapse';

@customElement({
  name: 'bs-accordion-item',
  template,
  dependencies: [BsCollapse],
})
export class BsAccordionItem implements ICustomElementViewModel {
  @bindable()
  header?: string;

  @bindable({ ...coerceBoolean, mode: BindingMode.twoWay })
  collapsed: boolean = true;

  @bindable(coerceBoolean)
  lazy: boolean = false;

  render: boolean = true;

  binding() {
    this.render = !this.lazy;
  }

  lazyChanged() {
    if (!this.render) {
      this.render = !this.lazy;
    }
  }

  onHeaderClick() {
    this.render = true;
    this.collapsed = !this.collapsed;
  }
}
