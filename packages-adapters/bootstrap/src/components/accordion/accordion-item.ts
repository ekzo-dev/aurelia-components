import { bindable, BindingMode, customElement, ICustomElementViewModel } from 'aurelia';
import { BsCollapse } from '../collapse';
import template from './accordion-item.html';
import './accordion.scss';

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

  private collapse!: BsCollapse;

  onHeaderClick() {
    this.collapsed = !this.collapsed;
  }

  collapsedChanged() {
    this.collapse.toggle();
  }
}
