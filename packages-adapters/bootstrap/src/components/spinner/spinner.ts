import { customElement, bindable } from 'aurelia';
import template from './spinner.html';
import './spinner.scss';

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
