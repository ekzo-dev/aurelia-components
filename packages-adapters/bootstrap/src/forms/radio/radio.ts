import template from './radio.html';

import './radio.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

import { ButtonVariant } from '../../components';
import { Size } from '../../types';
import { BaseField } from '../base-field';

@customElement({
  name: 'bs-radio',
  template,
})
export class BsRadio extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  checked!: unknown;

  @bindable()
  value?: unknown;

  @bindable()
  matcher?: (a: unknown, b: unknown) => boolean;

  @bindable(coerceBoolean)
  inline: boolean = false;

  @bindable({ type: String })
  mode?: 'button';

  @bindable({ type: String })
  buttonSize?: Size;

  @bindable()
  buttonVariant: ButtonVariant = 'primary';
}
