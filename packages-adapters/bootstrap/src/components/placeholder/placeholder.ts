import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import './placeholder.scss';
import { Sizes, Variants } from '../../interfaces';

export type PlaceholderSizes = Sizes | 'xs';

export type PlaceholderAnimation = 'glow' | 'wave';

@customAttribute('bs-placeholder')
export class BsPlaceholder implements ICustomAttributeViewModel {
  // https://getbootstrap.com/docs/5.3/components/placeholders/#sizing
  @bindable()
  size?: PlaceholderSizes;

  // https://getbootstrap.com/docs/5.3/components/placeholders/#color
  @bindable()
  color?: Variants;

  // https://getbootstrap.com/docs/5.3/components/placeholders/#animation
  @bindable()
  animation?: PlaceholderAnimation;

  constructor(private element: Element) {}

  attaching() {
    const { classList } = this.element;
    classList.add('placeholder');
    if (this.size) this.element.classList.add(`placeholder-${this.size}`);
    if (this.color) this.element.classList.add(`bg-${this.color}`);
  }

  attached() {
    if (this.animation) {
      this.element.parentElement?.classList.add(`placeholder-${this.animation}`);
    }
  }

  detaching() {
    this.element.classList.remove('placeholder', `placeholder-${this.size}`, `bg-${this.color}`);
  }
}
