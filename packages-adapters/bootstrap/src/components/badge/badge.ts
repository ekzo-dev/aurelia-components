import template from './badge.html';

import '../../color-bg.scss';
import './badge.scss';

import { bindable, customElement } from 'aurelia';

import { BsVariant } from '../../types';
import { coerceBoolean } from '../../utils';

@customElement({
  name: 'bs-badge',
  template,
})
export class BsBadge {
  @bindable()
  variant: BsVariant = 'primary';

  @bindable(coerceBoolean)
  pill: boolean = false;
}
