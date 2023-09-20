import template from './pagination.html';

import './pagination.scss';

import { bindable, customElement } from 'aurelia';

@customElement({
  name: 'bs-pagination',
  template,
})
export class BsPagination {
  @bindable()
  size?: 'sm' | 'lg';
}
