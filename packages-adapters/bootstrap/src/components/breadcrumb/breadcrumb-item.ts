import template from './breadcrumb-item.html';

import './breadcrumb.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

@customElement({
  name: 'bs-breadcrumb-item',
  template,
})
export class BsBreadcrumbItem implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  active: boolean = false;
}
