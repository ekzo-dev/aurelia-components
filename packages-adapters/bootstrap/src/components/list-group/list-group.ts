import './list-group.scss';

import { Breakpoint } from '@ekzo-dev/bootstrap';
import { bindable, customElement } from 'aurelia';

import { coerceBoolean } from '../../utils';

import template from './list-group.html';

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
  flush = false;

  @bindable(coerceBoolean)
  numbered = false;

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
