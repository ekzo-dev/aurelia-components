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
export class BsDropdownMenu implements ICustomElementViewModel {
  @bindable()
  autoClose: boolean | 'inside' | 'outside' = true;

  @bindable()
  boundary: Popper.Boundary | Element = 'clippingParents';

  @bindable()
  display: 'dynamic' | 'static' = 'dynamic';

  @bindable()
  offset: Dropdown.Offset | string | Dropdown.OffsetFunction = [0, 2];

  @bindable()
  popperConfig?: Partial<Popper.Options> | Dropdown.PopperConfigFunction | null = null;

  @bindable()
  reference: 'toggle' | 'parent' | Element | Popper.Rect = 'toggle';

  @bindable({ mode: BindingMode.twoWay, ...coerceBoolean })
  shown: boolean = false;

  @bindable(coerceBoolean)
  dark: boolean = false;

  @bindable()
  align?: BsDropdownAlign;

  private dropdown?: Dropdown;

  constructor(private element: Element) {}

  attaching() {
    this.createDropdown();
  }

  detaching() {
    this.destroyDropdown();
  }

  propertyChanged(name: keyof this) {
    switch (name) {
      case 'shown':
        this.toggle();
        break;
      default:
        this.destroyDropdown();
        this.createDropdown();
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

  private createDropdown() {
    this.dropdown = new Dropdown(this.element, {
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
