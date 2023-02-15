import { customElement, bindable } from 'aurelia';

import { Sizes } from '../../interfaces';
import template from './input-group.html';

import './input-group.scss';

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
  readonly size?: Sizes;
}
