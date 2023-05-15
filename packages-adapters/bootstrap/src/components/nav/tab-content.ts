import { customAttribute, ICustomAttributeViewModel } from 'aurelia';
import 'bootstrap/js/dist/tab';
import './nav.scss';

@customAttribute('bs-tab-content')
export class BsTabContent implements ICustomAttributeViewModel {
  constructor(private element: HTMLElement) {}

  attaching() {
    this.element.classList.add('tab-content');
  }

  detaching() {
    this.element.classList.remove('tab-content');
  }
}
