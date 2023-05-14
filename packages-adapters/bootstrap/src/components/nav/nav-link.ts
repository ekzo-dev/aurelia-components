import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import './nav.scss';

@customAttribute('bs-nav-link')
export class BsNavLink implements ICustomAttributeViewModel {
  @bindable()
  active: boolean = false;

  @bindable()
  disabled: boolean = false;

  constructor(private element: HTMLElement) {}

  attaching() {
    this.element.classList.add(
      ...['nav-link', this.active ? 'active' : '', this.disabled ? 'disabled' : ''].filter(Boolean)
    );
  }

  detaching() {
    this.element.classList.remove('nav-link', 'active', 'disabled');
  }
}
