import template from './radio.html';

import './radio.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

import { BsButtonVariant } from '../../components';
import { BsSize } from '../../types';
import { BaseField } from '../base-field';

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
  buttonSize?: BsSize;

  @bindable()
  buttonVariant: BsButtonVariant = 'primary';
}
