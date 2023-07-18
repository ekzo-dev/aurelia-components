import { bindable, BindingMode, customElement } from 'aurelia';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import { BaseField } from '../base-field';
import template from './radio.html';
import './radio.scss';
import { BsButtonVariant, Size } from '@ekzo-dev/bootstrap';

@customElement({
  name: 'bs-radio',
  template,
})
export class BsRadio extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  checked!: any;

  @bindable()
  model?: any;

  @bindable()
  value?: string;

  @bindable()
  matcher?: (a: any, b: any) => boolean;

  @bindable(coerceBoolean)
  inline: boolean = false;

  @bindable({ type: String })
  mode?: 'button';

  @bindable({ type: String })
  buttonSize?: Size;

  @bindable()
  buttonVariant: BsButtonVariant = 'primary';
}
