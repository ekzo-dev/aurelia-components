import '../../transitions.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customAttribute } from 'aurelia';
import { Collapse } from 'bootstrap';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-collapse')
export class BsCollapse extends BaseAttribute implements Collapse.Options {
  @bindable({ primary: true })
  collapsed: boolean = true;

  @bindable(coerceBoolean)
  horizontal: boolean = false;

  @bindable()
  parent: string | Element = undefined;

  @bindable()
  toggle: boolean = false;

  attaching() {
    super.attaching();

    // add initial open class
    if (!this.collapsed) {
      this.element.classList.add('show');
    }

    this.#createCollapse();
  }

  attached() {
    if (this.element.parentElement?.parentElement?.nodeName === 'BS-NAVBAR') {
      this.element.classList.add('navbar-collapse');
    }
  }

  detaching() {
    super.detaching();
    this.#destroyCollapse();
  }

  collapsedChanged() {
    this.#createCollapse().toggle();
  }

  parentChanged() {
    this.#destroyCollapse();
    this.#createCollapse();
  }

  #createCollapse() {
    return Collapse.getOrCreateInstance(this.element, {
      parent: this.parent,
      toggle: this.toggle,
    });
  }

  #destroyCollapse() {
    Collapse.getInstance(this.element)?.dispose();
  }

  protected get classes(): string[] {
    return ['collapse', this.horizontal ? 'collapse-horizontal' : null].filter(Boolean);
  }
}
