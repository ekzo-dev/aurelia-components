import { customElement, bindable, BindingMode, ICustomElementViewModel } from 'aurelia';
import { Iterable } from '@ekzo/toolkit';
import { BsCheckbox, BsSelect } from '@ekzo/bootstrap';
import template from './select-multiple.html';
import './select-multiple.scss';

const BS_SIZE_MULTIPLIER = {
  lg: 1.125,
  sm: 0.875,
};

/**
 * TODO: change required error message to the same as select[multiple] not filled
 */
@customElement({
  name: 'bs-select-multiple',
  template,
  dependencies: [Iterable, BsCheckbox],
})
export class BsSelectMultiple extends BsSelect implements ICustomElementViewModel {
  @bindable({ mode: BindingMode.twoWay })
  value!: any[];

  control!: HTMLFieldSetElement;

  attached() {
    this.setHeight();
    this.scrollToSelected();
  }

  propertyChanged(name: keyof this) {
    switch (name) {
      case 'size':
      case 'bsSize':
      case 'floatingLabel':
        setTimeout(() => this.setHeight());
    }
  }

  private setHeight(): void {
    const { style } = this.control;

    if (this.size > 0) {
      const { borderTopWidth, borderBottomWidth, paddingTop, paddingBottom } = getComputedStyle(this.control);
      style.height = `calc(${
        this.size * 1.625 * (this.bsSize ? BS_SIZE_MULTIPLIER[this.bsSize] : 1)
      }rem + ${borderTopWidth} + ${borderBottomWidth} + ${paddingTop} + ${paddingBottom} - 2px)`;
    } else if (style.height) {
      style.height = undefined;
    }
  }

  private scrollToSelected() {
    const selected = this.control.querySelector<HTMLInputElement>('input:checked');
    if (selected) {
      const { paddingTop } = getComputedStyle(this.control);
      this.control.scrollTo({ top: selected.parentElement.offsetTop - parseInt(paddingTop) });
    }
  }
}
