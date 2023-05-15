import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import './dropdown.scss';

const TOGGLE_ATTRIBUTE = 'data-bs-toggle';
const TOGGLE_CLASS = 'dropdown-toggle';
const TOGGLE_SPLIT_CLASS = 'dropdown-toggle-split';

@customAttribute('bs-dropdown-toggle')
export class BsDropdownToggle implements ICustomAttributeViewModel {
  // TODO: Aurelia bug, set to "" when not explicitly defined (treated as primary attribute)
  // @bindable(coerceBoolean)
  @bindable()
  split: boolean = false;

  @bindable()
  arrow: boolean = true;

  constructor(private element: Element) {}

  attaching() {
    this.element.setAttribute(TOGGLE_ATTRIBUTE, 'dropdown');
    this.setClass();
  }

  detaching() {
    this.element.removeAttribute(TOGGLE_ATTRIBUTE);
    this.setClass(false);
  }

  propertyChanged(): void {
    this.setClass();
  }

  private setClass(add: boolean = true): void {
    const { element } = this;
    const { classList } = element.tagName === 'BS-BUTTON' ? element.querySelector('button') : element;

    classList.remove(TOGGLE_CLASS, TOGGLE_SPLIT_CLASS);
    if (add) {
      classList.add(...[this.arrow ? TOGGLE_CLASS : null, this.split ? TOGGLE_SPLIT_CLASS : null].filter(Boolean));
    }
  }
}
