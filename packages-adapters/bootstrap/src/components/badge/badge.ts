import '../../color-bg.scss';
import './badge.scss';

import { bindable, customElement } from 'aurelia';

import { Variants } from '../../interfaces';
import { coerceBoolean } from '../../utils';

import template from './badge.html';

@customElement({
  name: 'bs-badge',
  template,
})
export class BsBadge {
  @bindable()
  variant: Variants = 'primary';

  @bindable(coerceBoolean)
  pill = false;
}
