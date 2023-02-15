import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import { coerceBoolean } from '../../utils';
import template from './nav-link.html';
import './nav.scss';

@customElement({
  name: 'bs-nav-link',
  template,
})
export class BsNavLink implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  active: boolean = false;

  @bindable(coerceBoolean)
  disabled: boolean = false;
}
