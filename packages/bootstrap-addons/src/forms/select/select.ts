import template from './select.html';

import './select.scss';

import {
  BsDropdown,
  BsDropdownItem,
  BsDropdownMenu,
  BsDropdownToggle,
  BsSelect as BaseBsSelect,
  ISelectOption,
} from '@ekzo-dev/bootstrap';
import { customElement, ICustomElementViewModel } from 'aurelia';

const BS_SIZE_MULTIPLIER = {
  lg: 1.125,
  sm: 0.875,
};

@customElement({
  name: 'bs-select',
  template,
  dependencies: [BsDropdown, BsDropdownMenu, BsDropdownToggle, BsDropdownItem],
})
export class BsSelect extends BaseBsSelect implements ICustomElementViewModel {
  control!: HTMLFieldSetElement;

  selectedOption?: ISelectOption;

  attached() {
    if (this.multiple) {
      this.#setHeight();
      this.#scrollToSelected();
    }
  }

  propertyChanged(name: keyof this) {
    switch (name) {
      case 'size':

      case 'bsSize':

      case 'floatingLabel':
        if (this.multiple) {
          setTimeout(() => this.#setHeight());
        }
    }
  }

  selectOption(option: ISelectOption) {
    this.value = option.value;
    this.selectedOption = option;
  }

  #setHeight(): void {
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

  #scrollToSelected() {
    const selected = this.control.querySelector<HTMLInputElement>('input:checked');

    if (selected) {
      const { paddingTop } = getComputedStyle(this.control);

      this.control.scrollTo({ top: selected.parentElement.offsetTop - parseInt(paddingTop) });
    }
  }
}
