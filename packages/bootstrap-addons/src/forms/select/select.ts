import template from './select.html';

import './select.scss';

import type { Options } from '@popperjs/core';
import type { Tooltip } from 'bootstrap';

import {
  BsCloseButton,
  BsDropdown,
  BsDropdownItem,
  BsDropdownMenu,
  BsDropdownToggle,
  BsSelect as BaseBsSelect,
  ISelectOption,
} from '@ekzo-dev/bootstrap';
import { bindable, customElement, ICustomElementViewModel, resolve } from 'aurelia';

import { Filter } from './filter';

const BS_SIZE_MULTIPLIER = {
  lg: 1.125,
  sm: 0.875,
};

@customElement({
  name: 'bs-select',
  template,
  dependencies: [BsDropdown, BsDropdownMenu, BsDropdownToggle, BsDropdownItem, Filter, BsCloseButton],
})
export class BsSelect extends BaseBsSelect implements ICustomElementViewModel {
  @bindable()
  emptyValue?: unknown = null;

  host = resolve(HTMLElement);

  control!: HTMLFieldSetElement;

  filter: string = '';

  optionsCount: number = 0;

  deactivating: boolean = false;

  emptyOption?: ISelectOption;

  popperConfig: Partial<Options> | Tooltip.PopperConfigFunction | null = null;

  binding() {
    super.binding();
    this.deactivating = false;
  }

  unbinding() {
    this.deactivating = true;
  }

  attached() {
    if (this.multiple) {
      this.#setHeight();
      this.#scrollToSelected();
    }

    this.setPopperConfig();
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

  setPopperConfig() {
    if (this.multiple) return;

    const { host } = this;
    const parentModal = host.closest('.modal-body,.popover-body,.offcanvas-body');
    const dropdownMenu: HTMLElement = host.querySelector('.dropdown-menu');

    if (parentModal != null) {
      this.popperConfig = {
        strategy: 'fixed',
      };
      dropdownMenu.style.minWidth = `${this.host.offsetWidth}px`;
    } else {
      this.popperConfig = null;
      dropdownMenu.style.minWidth = undefined;
    }
  }

  selectOption(option: ISelectOption) {
    this.value = option.value;
    this.#dispatchEvents();
  }

  get valueText(): string {
    const { selectedOption, emptyOption } = this;

    return emptyOption && emptyOption.value === selectedOption?.value
      ? ''
      : `${selectedOption?.group ? selectedOption.group + ' / ' : ''}${selectedOption?.text ?? ''}`;
  }

  #dispatchEvents() {
    const change = new Event('change', { bubbles: true });
    const input = new Event('input', { bubbles: true });

    this.control.dispatchEvent(input);
    this.control.dispatchEvent(change);
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
    if (this['__raw__'].deactivating) return;

    const { matcher, value, emptyValue } = this;
    let { options } = this;
    let emptyOption: ISelectOption;

    if (options instanceof Object && options.constructor === Object) {
      options = Object.entries(options);
    }

    this.optionsCount = (options as []).length;

    const isEntries = Array.isArray(options[0]);
    let option = (options as Array<ISelectOption | readonly [unknown, string]>).find((option) => {
      const currentValue: unknown = isEntries ? option[0] : (option as ISelectOption).value;

      if (currentValue == emptyValue) {
        emptyOption = {
          value: currentValue,
          text: isEntries ? option[1] : (option as ISelectOption).text,
        } as ISelectOption;
      }

      return matcher ? matcher(value, currentValue) : value === currentValue;
    });

    option = isEntries && option !== undefined ? { value: option[0], text: option[1] } : (option as ISelectOption);

    // update value next tick
    const foundValue = option?.value;

    if (foundValue !== value) {
      console.info(`[bootstrap-addons] updating <bs-select> [id=${this.id}] value to`, foundValue);
      void Promise.resolve().then(() => (this.value = foundValue));
    }

    // update empty option next tick
    void Promise.resolve().then(() => (this.emptyOption = emptyOption));

    return option;
  }
}
