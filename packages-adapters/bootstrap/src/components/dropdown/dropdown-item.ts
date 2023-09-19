import './dropdown.scss';

import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

import { coerceBoolean } from '../../utils';

import template from './dropdown-item.html';

export interface IBsDropdownItem {
  type?: 'header' | 'divider' | 'text' | 'link';
  disabled?: boolean;
  active?: boolean;
}

@customElement({
  name: 'bs-dropdown-item',
  template,
})
export class BsDropdownItem implements IBsDropdownItem, ICustomElementViewModel {
  @bindable()
  type: IBsDropdownItem['type'] = 'link';

  @bindable(coerceBoolean)
  disabled: IBsDropdownItem['disabled'] = false;

  @bindable(coerceBoolean)
  active: IBsDropdownItem['active'] = false;
}
