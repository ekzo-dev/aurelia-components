import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import { Collapse } from 'bootstrap';
import { coerceBoolean } from '../../utils';
import template from './collapse.html';
import '../../transitions.scss';
import './collapse.scss';

@customElement({
  name: 'bs-collapse',
  template,
})
export class BsCollapse implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  horizontal: boolean = false;

  constructor(private element: HTMLElement) {}

  detaching() {
    this.destroyCollapse();
  }

  toggle() {
    Collapse.getOrCreateInstance(this.element, { toggle: false }).toggle();
  }

  private destroyCollapse() {
    Collapse.getInstance(this.element)?.dispose();
  }
}
