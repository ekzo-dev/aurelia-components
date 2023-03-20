import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import './navbar.scss';
import template from './navbar.html';
import { Variants } from '../../interfaces';

export type Expands = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

@customElement({
  name: 'bs-navbar',
  template,
})
export class BsNavbar implements ICustomElementViewModel {
  @bindable()
  expand?: Expands = 'lg';

  @bindable()
  variant?: Variants;
}
