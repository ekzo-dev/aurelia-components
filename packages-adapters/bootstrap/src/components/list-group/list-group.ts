import { customElement, bindable } from 'aurelia';
import { coerceBoolean } from '../../utils';
import template from './list-group.html';
import './list-group.scss';
import { Breakpoint } from '@ekzo-dev/bootstrap';

export type BsListGroupHorizontal = Breakpoint | 'always';

const prefix = (name) => `list-group-${name}`;

// TODO: add stories for badges / checkboxes / custom content / contextual classes
// TODO: add support for tabs usage (Javascript behavior)
@customElement({
  name: 'bs-list-group',
  template,
})
export class BsListGroup {
  @bindable({ type: String })
  horizontal?: BsListGroupHorizontal;

  @bindable(coerceBoolean)
  flush: boolean = false;

  @bindable(coerceBoolean)
  numbered: boolean = false;

  get classes() {
    return [
      'list-group',
      this.flush ? prefix('flush') : null,
      this.numbered ? prefix('numbered') : null,
      this.horizontal ? prefix(`horizontal${this.horizontal === 'always' ? '' : `-${this.horizontal}`}`) : null,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
