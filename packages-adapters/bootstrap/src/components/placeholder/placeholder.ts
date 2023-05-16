import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import './placeholder.scss';
import { Size } from '../../types';

export type PlaceholderSize = Size | 'xs';
export type PlaceholderAnimation = 'glow' | 'wave';

const PLACEHOLDER = 'placeholder';

@customAttribute('bs-placeholder')
export class BsPlaceholder implements ICustomAttributeViewModel {
  @bindable({ primary: true, type: String })
  animation?: PlaceholderAnimation;

  @bindable({ type: String })
  size?: PlaceholderSize;

  constructor(private element: HTMLElement) {}

  attaching() {
    this.setClass(PLACEHOLDER);
    this.sizeChanged(this.size);
  }

  attached() {
    // set animation after attach on parent element
    this.animationChanged(this.animation);
  }

  sizeChanged(value?: PlaceholderSize) {
    this.setClass(`${PLACEHOLDER}-sm`, value === 'sm');
    this.setClass(`${PLACEHOLDER}-lg`, value === 'lg');
    this.setClass(`${PLACEHOLDER}-xs`, value === 'xs');
  }

  animationChanged(value?: PlaceholderAnimation) {
    const parent = this.element.parentElement;
    if (parent) {
      this.setClass(`${PLACEHOLDER}-glow`, value === 'glow', parent);
      this.setClass(`${PLACEHOLDER}-wave`, value === 'wave', parent);
    }
  }

  detaching() {
    this.setClass(PLACEHOLDER);
    this.sizeChanged();
    // do not remove animation classes because several placeholders may use the same animation
  }

  private setClass(token: string, force?: boolean, element?: HTMLElement) {
    (element || this.element).classList.toggle(token, force);
  }
}
