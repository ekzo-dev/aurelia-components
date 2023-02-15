import { customElement, bindable } from 'aurelia';
import { coerceBoolean } from '../../utils';
import template from './list-group.html';
import './list-group.scss';

export type ListGroupHorizontal = 'always' | 'sm' | 'md' | 'lg' | 'xl';

@customElement({
  name: 'bs-list-group',
  template,
})
export class BsListGroup {
  @bindable()
  horizontal?: ListGroupHorizontal;

  @bindable(coerceBoolean)
  flush: boolean = false;

  @bindable(coerceBoolean)
  numbered: boolean = false;

  get classes() {
    return [
      'list-group',
      this.flush ? 'list-group-flush' : null,
      this.numbered ? 'list-group-numbered' : null,
      this.horizontal ? `list-group-horizontal${this.horizontal === 'always' ? '' : `-${this.horizontal}`}` : null,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
