import { customElement, bindable } from 'aurelia';
import { Size } from '../../types';
import { coerceBoolean } from '../../utils';
import template from './button-group.html';
import './button-group.scss';

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
