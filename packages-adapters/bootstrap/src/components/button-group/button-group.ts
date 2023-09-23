import template from './button-group.html';

import './button-group.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement } from 'aurelia';

import { Size } from '../../types';

@customElement({
  name: 'bs-button-group',
  template,
})
export class BsButtonGroup {
  @bindable()
  size?: Size;

  @bindable(coerceBoolean)
  vertical: boolean = false;
}
