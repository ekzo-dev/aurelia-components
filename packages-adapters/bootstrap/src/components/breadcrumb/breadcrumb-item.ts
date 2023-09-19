import './breadcrumb.scss';

import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

import { coerceBoolean } from '../../utils';

import template from './breadcrumb-item.html';

@customElement({
  name: 'bs-breadcrumb-item',
  template,
})
export class BsBreadcrumbItem implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  active = false;
}
