import template from './pagination-item.html';

import './pagination.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement } from 'aurelia';

@customElement({
  name: 'bs-pagination-item',
  template,
})
export class BsPaginationItem {
  @bindable(coerceBoolean)
  disabled: boolean = false;

  @bindable(coerceBoolean)
  active: boolean = false;
}
