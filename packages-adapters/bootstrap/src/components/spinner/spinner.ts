import { customElement, bindable } from 'aurelia';

import { Variants, Sizes } from '../../interfaces';
import template from './spinner.html';

import './spinner.scss';

export type SpinnerType = 'border' | 'grow';

@customElement({
  name: 'bs-spinner',
  template,
})
export class BsSpinner {
  @bindable()
  readonly type: SpinnerType = 'border';

  @bindable()
  readonly variant?: Variants;

  @bindable()
  readonly size?: Sizes;
}
