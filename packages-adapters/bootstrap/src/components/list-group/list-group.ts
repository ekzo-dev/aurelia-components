import './list-group.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customAttribute } from 'aurelia';

import { Breakpoint } from '../../types';
import { BaseAttribute } from '../base-attribute';

export type BsListGroupHorizontal = Breakpoint | 'always';

const prefix = (name: string) => `list-group-${name}`;

// TODO: add stories for badges / checkboxes / custom content / contextual classes
// TODO: add support for tabs usage (Javascript behavior)
@customAttribute('bs-list-group')
export class BsListGroup extends BaseAttribute {
  @bindable({ type: String })
  horizontal?: BsListGroupHorizontal;

  @bindable(coerceBoolean)
  flush: boolean = false;

  @bindable(coerceBoolean)
  numbered: boolean = false;

  protected get classes(): string[] {
    return [
      'list-group',
      this.flush ? prefix('flush') : null,
      this.numbered ? prefix('numbered') : null,
      this.horizontal ? prefix(`horizontal${this.horizontal === 'always' ? '' : `-${this.horizontal}`}`) : null,
    ].filter(Boolean);
  }
}
