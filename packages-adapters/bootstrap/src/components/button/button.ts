import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import { Button } from 'bootstrap';
import { Variants, Sizes } from '../../interfaces';
import { coerceBoolean } from '../../utils';
import template from './button.html';
import './button.scss';

@customElement({
  name: 'bs-button',
  template,
})
export class BsButton implements ICustomElementViewModel {
  @bindable()
  variant: Variants = 'primary';

  @bindable(coerceBoolean)
  outline: boolean = false;

  @bindable(coerceBoolean)
  disabled: boolean = false;

  @bindable(coerceBoolean)
  active: boolean = false;

  @bindable({ type: String })
  size?: Sizes;

  @bindable(coerceBoolean)
  toggleState: boolean = false;

  @bindable()
  type: 'button' | 'submit' | 'reset' = 'button';

  @bindable()
  form?: string;

  private button?: Button;

  constructor(private element: Element) {}

  attaching() {
    this.createButton();
  }

  detaching() {
    this.destroyButton();
  }

  toggleStateChanged() {
    this.destroyButton();
    this.createButton();
  }

  private createButton() {
    if (this.toggleState) {
      this.button = new Button(this.element);
    }
  }

  private destroyButton() {
    if (this.button) {
      this.button.dispose();
      this.button = undefined;
    }
  }
}
