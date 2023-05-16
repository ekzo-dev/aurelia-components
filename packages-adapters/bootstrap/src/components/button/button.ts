import { bindable, ICustomAttributeViewModel, customAttribute } from 'aurelia';
import { Button } from 'bootstrap';
import { Variant, Size } from '../../types';
import { coerceBoolean } from '../../utils';
import { BUTTON_VARIANTS } from '../../constants';
import './button.scss';

export type ButtonVariant =
  | Variant
  | 'link'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-light'
  | 'outline-dark';

const BUTTON = 'btn';

@customAttribute('bs-button')
export class BsButton implements ICustomAttributeViewModel {
  @bindable({ type: String, primary: true })
  variant: ButtonVariant = 'primary';

  @bindable(coerceBoolean)
  disabled?: boolean;

  @bindable({ type: String })
  size?: Size;

  @bindable(coerceBoolean)
  active: boolean = false;

  @bindable(coerceBoolean)
  toggleState: boolean = false;

  constructor(private element: HTMLElement) {}

  binding() {
    // set default variant because primary attribute has "" default value
    if (!this.variant) this.variant = 'primary';
  }

  attaching() {
    this.setClass(BUTTON);
    this.sizeChanged(this.size);
    this.variantChanged(this.variant);
    this.activeChanged(this.active);
    if (this.disabled !== undefined) {
      this.disabledChanged(this.disabled);
    }
    this.createButton();
  }

  detaching() {
    this.setClass(BUTTON);
    this.sizeChanged();
    this.variantChanged();
    this.activeChanged();
    this.destroyButton();
  }

  variantChanged(value?: ButtonVariant) {
    BUTTON_VARIANTS.forEach((variant) => {
      this.setClass(`${BUTTON}-${variant}`, value === variant);
    });
  }

  sizeChanged(value?: Size) {
    this.setClass(`${BUTTON}-sm`, value === 'sm');
    this.setClass(`${BUTTON}-lg`, value === 'lg');
  }

  disabledChanged(value?: boolean) {
    const el = this.element;
    if (el.tagName === 'BUTTON' || el.tagName === 'INPUT') {
      value ? el.setAttribute('disabled', '') : el.removeAttribute('disabled');
    } else {
      this.setClass('disabled', value);
    }
  }

  activeChanged(value?: boolean) {
    this.setClass('active', value);
  }

  toggleStateChanged() {
    this.destroyButton();
    this.createButton();
  }

  toggle() {
    Button.getInstance(this.element)?.toggle();
  }

  private createButton() {
    this.element.setAttribute('data-bs-toggle', 'button');
  }

  private destroyButton() {
    Button.getInstance(this.element)?.dispose();
    this.element.removeAttribute('data-bs-toggle');
  }

  private setClass(token: string, force?: boolean) {
    this.element.classList.toggle(token, force);
  }
}
