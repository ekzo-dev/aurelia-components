import { customElement, bindable, BindingMode } from 'aurelia';
import { Iterable } from '@ekzo/toolkit';
import { BsCheckbox, BsSelect } from '@ekzo/bootstrap';
import template from './select-multiple.html';
import './select-multiple.scss';

/**
 * TODO: support required native attribute
 */
@customElement({
  name: 'bs-select-multiple',
  template,
  dependencies: [Iterable, BsCheckbox],
})
export class BsSelectMultiple extends BsSelect {
  @bindable({ mode: BindingMode.twoWay })
  value!: any[];

  constructor(private element: HTMLElement) {
    super();
  }

  attached() {
    this.setHeight(true);
  }

  sizeChanged() {
    this.setHeight();
  }

  bsSizeChanged() {
    this.setHeight();
  }

  private setHeight(init = false): void {
    const { style } = this.element;
    if (style.height && init) return;

    if (this.size > 0) {
      const { borderTopWidth, borderBottomWidth, paddingTop, paddingBottom } = getComputedStyle(
        this.element.querySelector('div.form-control')
      );
      style.height = `calc(${
        this.size * 1.625
      }rem + ${borderTopWidth} + ${borderBottomWidth} + ${paddingTop} + ${paddingBottom})`;
    } else if (style.height) {
      style.height = 'auto';
    }
  }
}
