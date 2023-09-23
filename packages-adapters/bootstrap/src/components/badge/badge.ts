import template from './badge.html';

import '../../color-bg.scss';
import './badge.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement } from 'aurelia';

import { Variant } from '../../types';

@customElement({
  name: 'bs-badge',
  template,
})
export class BsBadge {
  @bindable()
  variant: Variant = 'primary';

  @bindable(coerceBoolean)
  pill: boolean = false;
}
