import './spinner.scss';

import { bindable, customElement } from 'aurelia';

import template from './spinner.html';

export type SpinnerType = 'border' | 'grow';
export type SpinnerSize = 'sm';

@customElement({
  name: 'bs-spinner',
  template,
})
export class BsSpinner {
  @bindable()
  type: SpinnerType = 'border';

  @bindable()
  size?: SpinnerSize;
}
