import { customElement, bindable } from 'aurelia';

import { BgColors } from '../../interfaces';
import { coerceBoolean } from '../../utils';
import template from './progress.html';

import './progress.scss';

@customElement({
  name: 'bs-progress',
  template,
})
export class BsProgress {
  @bindable()
  readonly value: number = 0;

  @bindable()
  readonly label: string = '';

  @bindable()
  readonly background?: BgColors;

  @bindable(coerceBoolean)
  readonly striped: boolean = false;

  @bindable(coerceBoolean)
  readonly animated: boolean = false;
}
