import './pagination.scss';

import { bindable, customElement } from 'aurelia';

import template from './pagination.html';

@customElement({
  name: 'bs-pagination',
  template,
})
export class BsPagination {
  @bindable()
  size?: 'sm' | 'lg';
}
