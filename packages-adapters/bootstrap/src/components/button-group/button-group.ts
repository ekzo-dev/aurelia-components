import { customElement, bindable, ICustomElementViewModel } from 'aurelia';

import { Sizes } from '../../interfaces';
import { coerceBoolean } from '../../utils';
import template from './button-group.html';
import './button-group.scss';

@customElement({
  name: 'bs-button-group',
  template,
})
export class BsButtonGroup implements ICustomElementViewModel {
  @bindable()
  readonly size?: Sizes;

  @bindable(coerceBoolean)
  readonly vertical: boolean = false;
}
