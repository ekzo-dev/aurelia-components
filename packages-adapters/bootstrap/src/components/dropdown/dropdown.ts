import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import { coerceBoolean } from '../../utils';
import './dropdown.scss';

export type BsDropdownDirection = 'down' | 'up' | 'end' | 'start';

@customAttribute('bs-dropdown')
export class BsDropdown implements ICustomAttributeViewModel {
  @bindable(coerceBoolean)
  center: boolean = false;

  @bindable()
  direction: BsDropdownDirection = 'down';

  constructor(private element: Element) {}

  attaching(): void {
    this.setClasses();
  }

  detaching(): void {
    this.setClasses(false);
  }

  propertyChanged(): void {
    this.setClasses();
  }

  private setClasses(add: boolean = true): void {
    const { classList } = this.element;

    classList.remove('dropdown', 'dropup', 'dropend', 'dropstart', 'dropdown-center', 'dropup-center');
    if (add) {
      classList.add(...[`drop${this.direction}`, this.center ? `drop${this.direction}-center` : null].filter(Boolean));
    }
  }
}
