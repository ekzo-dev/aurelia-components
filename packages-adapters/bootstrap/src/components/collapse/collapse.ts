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
  readonly horizontal: boolean = false;

  @bindable(coerceBoolean)
  readonly collapsed: boolean = false;

  private container?: HTMLDivElement;

  private collapse?: Collapse;

  attaching() {
    this.createCollapse();

    // show element if initially expanded
    if (!this.collapsed) {
      this.collapsedChanged();
    }
  }

  detaching() {
    this.destroyCollapse();
  }

  collapsedChanged(): void {
    this.collapse?.toggle();
  }

  private createCollapse() {
    this.collapse = new Collapse(this.container!, {
      toggle: false,
    });
  }

  private destroyCollapse() {
    this.collapse?.dispose();
    this.collapse = undefined;
  }
}
