import template from './input-group.html';

import './input-group.scss';

import { bindable, customElement } from 'aurelia';

import { Size } from '../../types';

@customElement({
  name: 'bs-input-group-text',
  template: '<template class="input-group-text"><au-slot></au-slot></template>',
})
export class BsInputGroupText {}

// TODO: focused items
@customElement({
  name: 'bs-input-group',
  template,
})
export class BsInputGroup {
  @bindable()
  readonly size?: Size;
}
