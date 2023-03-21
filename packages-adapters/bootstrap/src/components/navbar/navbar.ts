import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import './navbar.scss';
import template from './navbar.html';
import { Variants } from '../../interfaces';
import { coerceBoolean } from '../../utils';

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

  @bindable(coerceBoolean)
  darkBackground?: boolean = false;

  /* todo
  - navbar-toggler for use with our collapse plugin and other navigation toggling behaviors.
  - Add an optional .navbar-scroll to set a max-height and scroll expanded navbar content.

  For navbars that never collapse, add the .navbar-expand class on the navbar.
  For navbars that always collapse, don’t add any .navbar-expand class.
  */
}
