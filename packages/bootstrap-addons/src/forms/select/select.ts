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

import { Filter } from './filter';

const BS_SIZE_MULTIPLIER = {
  lg: 1.125,
  sm: 0.875,
};

@customElement({
  name: 'bs-select',
  template,
  dependencies: [BsDropdown, BsDropdownMenu, BsDropdownToggle, BsDropdownItem, Filter],
})
export class BsSelect extends BaseBsSelect implements ICustomElementViewModel {
  control!: HTMLFieldSetElement;

  filter: string = '';

  optionsCount: number = 0;

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

  get selectedOption(): ISelectOption | undefined {
    const { matcher, value } = this;
    let { options } = this;

    if (options instanceof Object && options.constructor === Object) {
      options = Object.entries(options);
    }

    this.optionsCount = (options as []).length;

    const isEntries = Array.isArray(options[0]);
    let option = (options as Array<ISelectOption | readonly [unknown, string]>).find((option) => {
      const currentValue: unknown = isEntries ? option[0] : (option as ISelectOption).value;

      return matcher ? matcher(value, currentValue) : value === currentValue;
    });

    option = isEntries && option !== undefined ? { value: option[0], text: option[1] } : (option as ISelectOption);

    // update value next tick if it differs from current
    const foundValue = option?.value;

    if (foundValue !== value) {
      console.info(`[bootstrap-addons] updating <bs-select> [id=${this.id}] value to`, foundValue);
      void Promise.resolve().then(() => (this.value = foundValue));
    }

    return option;
  }
}
