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

    if (this.multiple && !Array.isArray(this.value)) {
      this.value = [];
    }
  }

  unbinding() {
    this.deactivating = true;
  }

  attached() {
    this.setPopperConfig();
  }

  setPopperConfig() {
    const { host } = this;
    const parentModal = host.closest('.modal-body,.popover-body,.offcanvas-body');
    const dropdownMenu: HTMLElement = host.querySelector('.dropdown-menu');

    if (parentModal != null) {
      this.popperConfig = {
        strategy: 'fixed',
      };
      dropdownMenu.style.minWidth = `${host.offsetWidth}px`;
    } else {
      this.popperConfig = null;
      dropdownMenu.style.minWidth = undefined;
    }
  }

  optionId(index: number, parentIndex?: number): string {
    return `${this.id}${parentIndex != null ? '-g' + parentIndex.toString() : ''}-${index}`;
  }

  selectOption(option: ISelectOption) {
    this.value = option.value;
    this.#dispatchEvents();
  }

  get valueText(): string {
    // if (this.multiple) {
    //
    // }

    const { selectedOption, emptyOption } = this;

    return emptyOption && emptyOption.value === selectedOption?.value
      ? ''
      : `${selectedOption?.group ? selectedOption.group + ' / ' : ''}${selectedOption?.text ?? ''}`;
  }

  get showClear(): boolean {
    return (
      !this.disabled &&
      ((this.emptyOption && this.selectedOption?.value !== this.emptyOption.value) ||
        (this.multiple && (this.value as unknown[]).length > 0))
    );
  }

  clear() {
    this.selectOption(this.multiple ? { value: [], text: '' } : this.emptyOption);
  }

  #dispatchEvents() {
    const change = new Event('change', { bubbles: true });
    const input = new Event('input', { bubbles: true });

    this.control.dispatchEvent(input);
    this.control.dispatchEvent(change);
  }

  get selectedOption(): ISelectOption | undefined {
    if (this['__raw__'].deactivating || this.multiple) return;

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
