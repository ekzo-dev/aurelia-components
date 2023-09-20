import { customElement, bindable } from 'aurelia';
import template from './pagination.html';
import './pagination.scss';

@customElement({
  name: 'bs-pagination',
  template,
})
export class BsPagination {
  @bindable()
  size?: 'sm' | 'lg';
}
