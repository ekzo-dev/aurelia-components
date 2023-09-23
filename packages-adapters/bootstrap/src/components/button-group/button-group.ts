import template from './button-group.html';

import './button-group.scss';

import { bindable, customElement } from 'aurelia';

import { BsSize } from '../../types';
import { coerceBoolean } from '../../utils';

@customElement({
  name: 'bs-button-group',
  template,
})
export class BsButtonGroup {
  @bindable()
  size?: BsSize;

  @bindable(coerceBoolean)
  vertical: boolean = false;
}
