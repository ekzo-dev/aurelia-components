import { customElement, bindable } from 'aurelia';
import { Variants } from '../../interfaces';
import { coerceBoolean } from '../../utils';
import template from './badge.html';
import '../../color-bg.scss';
import './badge.scss';

@customElement({
  name: 'bs-badge',
  template,
})
export class BsBadge {
  @bindable()
  variant: Variants = 'primary';

  @bindable(coerceBoolean)
  pill: boolean = false;
}
