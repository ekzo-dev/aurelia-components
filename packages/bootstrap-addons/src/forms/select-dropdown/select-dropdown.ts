import template from './select-dropdown.html';

import './select-dropdown.scss';

import type { Options } from '@popperjs/core';
import type { Tooltip } from 'bootstrap';

import {
  BsCloseButton,
  BsDropdown,
  BsDropdownItem,
  BsDropdownMenu,
  BsDropdownToggle,
  BsSelect,
  ISelectOption,
} from '@ekzo-dev/bootstrap';
import { bindable, customElement, ICustomElementViewModel, queueTask } from 'aurelia';

import { Filter } from './filter';

@customElement({
  name: 'bs-select-dropdown',
  template,
  dependencies: [BsDropdown, BsDropdownMenu, BsDropdownToggle, BsDropdownItem, Filter, BsCloseButton],
})
export class BsSelectDropdown extends BsSelect implements ICustomElementViewModel {
  @bindable()
  emptyValue?: unknown = null;

  filter: string = '';

  emptyOption?: ISelectOption;

  popperConfig: Partial<Options> | Tooltip.PopperConfigFunction | null = null;

  binding() {
    if (this.multiple && !Array.isArray(this.value)) {
      this.value = [];
    }
  }

  attached() {
    this.setPopperConfig();
  }

  valueChanged(value: unknown) {
    if (this.multiple && !Array.isArray(value)) {
      this.value = [];
    }
  }

  propertyChanged(key: PropertyKey, newValue: unknown, oldValue?: unknown) {
    super.propertyChanged(key, newValue, oldValue);
    // multiple must not be set on control
    this.control.removeAttribute('multiple');
  }

  setPopperConfig() {
    const { host } = this;
    const parentModal = host.closest('.modal-body,.popover-body,.offcanvas-body');
    const dropdownMenu: HTMLElement = host.querySelector('.dropdown-menu')!;

    if (parentModal != null) {
      this.popperConfig = {
        strategy: 'fixed',
      };
      dropdownMenu.style.minWidth = `${host.offsetWidth}px`;
    } else {
      this.popperConfig = null;
      dropdownMenu.style.minWidth = '';
    }
  }

  optionId(index: number, parentIndex?: number): string {
    return `${this.id}${parentIndex != null ? '-g' + parentIndex.toString() : ''}-${index}`;
  }

  selectOption(option?: ISelectOption) {
    this.value = option?.value;
    this.#dispatchEvents();
  }

  get valueText(): string {
    if (this.multiple) {
      const { options, value } = this;

      return Array.isArray(value)
        ? value.map((val) => (options as ISelectOption[]).find((option) => option.value === val)!.text).join(', ')
        : '';
    }

    const { selectedOption, emptyOption } = this;

    return emptyOption && emptyOption.value === selectedOption?.value
      ? ''
      : `${selectedOption?.group ? selectedOption.group + ' / ' : ''}${selectedOption?.text ?? ''}`;
  }

  get showClear(): boolean {
    return (
      !this.disabled &&
      ((this.emptyOption && this.selectedOption?.value !== this.emptyOption.value) ||
        (this.multiple && Array.isArray(this.value) && this.value.length > 0))
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

  get optionsCount(): number {
    const { options } = this;
    const isObj = options instanceof Object && options.constructor === Object;

    return isObj ? Object.keys(options).length : (options as []).length;
  }

  get selectedOption(): ISelectOption | undefined {
    if (this.multiple) return;

    const { value, emptyValue, matcher } = this;
    let { options } = this;
    let emptyOption: ISelectOption;

    if (options instanceof Object && options.constructor === Object) {
      options = Object.entries(options);
    }

    // @ts-ignore
    const isEntries = Array.isArray(options[0]);
    let option = (options as Array<ISelectOption | readonly [unknown, string]>).find((option) => {
      // @ts-ignore
      const optionValue: unknown = isEntries ? option[0] : (option as ISelectOption).value;

      if (optionValue == emptyValue) {
        emptyOption = {
          value: optionValue,
          // @ts-ignore
          text: isEntries ? (option[1] as string) : (option as ISelectOption).text,
        } as ISelectOption;
      }

      return matcher ? matcher(value, optionValue) : value === optionValue;
    });

    option =
      // @ts-ignore
      isEntries && option !== undefined ? { value: option[0], text: option[1] as string } : (option as ISelectOption);

    // update value next tick
    const foundValue = option?.value;

    if (foundValue !== value) {
      queueTask(() => (this.value = foundValue));
    }

    // update empty option next tick
    // TODO: investigate if next tick is still needed
    queueTask(() => (this.emptyOption = emptyOption));

    return option;
  }
}
