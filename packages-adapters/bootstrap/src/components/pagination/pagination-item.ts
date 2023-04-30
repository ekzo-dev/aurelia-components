import { customElement, bindable } from 'aurelia';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import template from './pagination-item.html';
import './pagination.scss';

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
