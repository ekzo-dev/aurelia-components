import './button-group.scss';

import { bindable, customElement } from 'aurelia';

import { Size } from '../../types';
import { coerceBoolean } from '../../utils';

import template from './button-group.html';

@customElement({
  name: 'bs-button-group',
  template,
})
export class BsButtonGroup {
  @bindable()
  size?: Size;

  @bindable(coerceBoolean)
  vertical = false;
}
