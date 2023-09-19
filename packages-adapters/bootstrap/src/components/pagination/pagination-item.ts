import './pagination.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement } from 'aurelia';

import template from './pagination-item.html';

@customElement({
  name: 'bs-pagination-item',
  template,
})
export class BsPaginationItem {
  @bindable(coerceBoolean)
  disabled = false;

  @bindable(coerceBoolean)
  active = false;
}
