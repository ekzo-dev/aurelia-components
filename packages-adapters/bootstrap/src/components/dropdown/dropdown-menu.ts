import template from './dropdown-menu.html';

import './dropdown.scss';

import type { Boundary, Options, Rect } from '@popperjs/core';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement, ICustomElementViewModel, resolve } from 'aurelia';
import { Dropdown, type Tooltip } from 'bootstrap';

export type DropdownAlign = 'end' | 'sm-start' | 'md-start' | 'lg-start' | 'xl-start' | 'xxl-start';

@customElement({
  name: 'bs-dropdown-menu',
  template,
})
export class BsDropdownMenu implements ICustomElementViewModel, Dropdown.Options {
  @bindable()
  autoClose: boolean | 'inside' | 'outside' = true;

  @bindable()
  boundary: Boundary | Element = 'clippingParents';

  @bindable()
  display: 'dynamic' | 'static' = 'dynamic';

  @bindable()
  offset: Dropdown.Offset | string | Dropdown.OffsetFunction = [0, 2];

  @bindable()
  popperConfig: Partial<Options> | Tooltip.PopperConfigFunction | null = null;

  @bindable()
  reference: 'toggle' | 'parent' | Element | Rect = 'toggle';

  @bindable(coerceBoolean)
  dark: boolean = false;

  @bindable()
  align?: DropdownAlign;

  private dropdown?: Dropdown;

  constructor(private readonly element: HTMLElement = resolve(HTMLElement)) {}

  attached() {
    this.#createDropdown();
  }

  detaching() {
    this.#destroyDropdown();
  }

  propertyChanged(name: keyof this) {
    switch (name) {
      case 'autoClose':

      case 'boundary':

      case 'display':

      case 'reference':

      case 'offset':

      case 'popperConfig':
        this.#destroyDropdown();
        this.#createDropdown();
    }
  }

  show(): void {
    this.dropdown?.show();
  }

  hide(): void {
    this.dropdown?.hide();
  }

  toggle(): void {
    this.dropdown?.toggle();
  }

  update(): void {
    this.dropdown?.update();
  }

  #createDropdown() {
    // try to find toggle element and connect to it
    const selector = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
    const toggle = this.element.parentElement?.querySelector(selector);

    this.dropdown = new Dropdown(toggle || this.element, {
      autoClose: this.autoClose,
      boundary: this.boundary,
      display: this.display,
      offset: this.offset,
      popperConfig: this.popperConfig,
      reference: this.reference,
    });
  }

  #destroyDropdown() {
    this.dropdown?.dispose();
    this.dropdown = undefined;
  }
}
