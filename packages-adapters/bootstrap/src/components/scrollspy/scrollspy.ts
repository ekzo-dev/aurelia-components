import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import { ScrollSpy } from 'bootstrap';

import { coerceBoolean } from '../../utils';

@customAttribute('bs-scrollspy')
export class BsScrollspy implements Partial<ScrollSpy.Options>, ICustomAttributeViewModel {
  @bindable({ primary: true })
  target?: string | Element;

  @bindable()
  rootMargin: string = '0px 0px -25%';

  @bindable(coerceBoolean)
  smoothScroll: boolean = false;

  @bindable()
  threshold: number[] | string = [0.1, 0.5, 1];

  #scrollspy?: ScrollSpy;

  constructor(protected element: HTMLElement) {}

  attached() {
    this.#createScrollSpy();
  }

  detaching() {
    this.#destroyScrollSpy();
  }

  propertyChanged() {
    this.#destroyScrollSpy();
    this.#createScrollSpy();
  }

  #createScrollSpy() {
    this.#scrollspy = new ScrollSpy(this.element, {
      rootMargin: this.rootMargin,
      smoothScroll: this.smoothScroll,
      threshold: this.threshold,
      target: this.target,
    });
  }

  #destroyScrollSpy() {
    this.#scrollspy?.dispose();
    this.#scrollspy = undefined;
  }
}
