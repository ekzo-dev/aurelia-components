import template from './progress.html';

import './progress.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement } from 'aurelia';

import { Background } from '../../types';

@customElement({
  name: 'bs-progress',
  template,
})
export class BsProgress {
  @bindable()
  value: number = 0;

  @bindable()
  label: string = '';

  @bindable()
  background?: Background;

  @bindable(coerceBoolean)
  striped: boolean = false;

  @bindable(coerceBoolean)
  animated: boolean = false;
}
