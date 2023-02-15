import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import './dropdown.scss';

const TOGGLE_ATTRIBUTE = 'data-bs-toggle';
const TOGGLE_CLASS = 'dropdown-toggle';
const TOGGLE_SPLIT_CLASS = 'dropdown-toggle-split';

@customAttribute('bs-dropdown-toggle')
export class BsDropdownToggle implements ICustomAttributeViewModel {
  // TODO: баг в Aurelia, значение ставится в "" если не передано
  // @bindable(coerceBoolean)
  @bindable()
  split: boolean = false;

  constructor(private element: Element) {}

  attaching() {
    this.element.setAttribute(TOGGLE_ATTRIBUTE, 'dropdown');
    this.setClasses();
  }

  detaching() {
    this.element.removeAttribute(TOGGLE_ATTRIBUTE);
    this.setClasses(false);
  }

  propertyChanged(): void {
    this.setClasses();
  }

  private setClasses(add: boolean = true): void {
    const { element } = this;
    const { classList } = element.tagName === 'BS-BUTTON' ? element.querySelector('button') : element;

    classList.remove(TOGGLE_CLASS, TOGGLE_SPLIT_CLASS);
    if (add) {
      classList.add(...[TOGGLE_CLASS, this.split ? TOGGLE_SPLIT_CLASS : null].filter(Boolean));
    }
  }
}
