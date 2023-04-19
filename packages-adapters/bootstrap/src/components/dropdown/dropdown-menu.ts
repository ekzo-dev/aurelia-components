import { customElement, bindable, ICustomElementViewModel, BindingMode } from 'aurelia';
import { Dropdown } from 'bootstrap';
import * as Popper from '@popperjs/core';

import { coerceBoolean } from '../../utils';
import template from './dropdown-menu.html';
import './dropdown.scss';

export type BsDropdownAlign = 'end' | 'sm-start' | 'md-start' | 'lg-start' | 'xl-start' | 'xxl-start';

@customElement({
  name: 'bs-dropdown-menu',
  template,
})
export class BsDropdownMenu implements ICustomElementViewModel, Dropdown.Options {
  @bindable()
  autoClose: boolean | 'inside' | 'outside' = true;

  @bindable()
  boundary: Popper.Boundary | Element = 'clippingParents';

  @bindable()
  display: 'dynamic' | 'static' = 'dynamic';

  @bindable()
  offset: Dropdown.Offset | string | Dropdown.OffsetFunction = [0, 2];

  @bindable()
  popperConfig: Partial<Popper.Options> | Dropdown.PopperConfigFunction | null = null;

  @bindable()
  reference: 'toggle' | 'parent' | Element | Popper.Rect = 'toggle';

  @bindable(coerceBoolean)
  dark: boolean = false;

  @bindable()
  align?: BsDropdownAlign;

  private dropdown?: Dropdown;

  constructor(private element: Element) {}

  attached() {
    this.createDropdown();
  }

  detaching() {
    this.destroyDropdown();
  }

  propertyChanged(name: keyof this) {
    // TODO: correctly configure update
    switch (name) {
      case 'autoClose':
      case 'boundary':
      case 'display':
      case 'reference':
        this.destroyDropdown();
        this.createDropdown();
        break;
      case 'offset':
      case 'popperConfig':
        this.dropdown?.update();
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

  private createDropdown() {
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

  private destroyDropdown() {
    this.dropdown?.dispose();
    this.dropdown = undefined;
  }
}
