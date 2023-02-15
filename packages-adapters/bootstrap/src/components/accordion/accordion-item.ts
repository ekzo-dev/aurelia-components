import { bindable, BindingMode, customElement, ICustomElementViewModel } from 'aurelia';
import { BsCollapse } from '@ekzo/bootstrap';
import template from './accordion-item.html';
import './accordion-item.scss';

@customElement({
  name: 'bs-accordion-item',
  template,
  dependencies: [BsCollapse],
})
export class BsAccordionItem implements ICustomElementViewModel {
  @bindable()
  header?: string;

  @bindable({ mode: BindingMode.twoWay })
  collapsed: boolean = true;

  onHeaderClick() {
    this.collapsed = !this.collapsed;
  }
}
