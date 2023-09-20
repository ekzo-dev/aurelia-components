import template from './button-group.html';

import './button-group.scss';

import { bindable, customElement } from 'aurelia';

import { Size } from '../../types';
import { coerceBoolean } from '../../utils';

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
