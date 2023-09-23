import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import { ScrollSpy } from 'bootstrap';

import { coerceBoolean } from '@ekzo-dev/toolkit';

@customAttribute('bs-scrollspy')
export class BsScrollspy implements ScrollSpy.Options, ICustomAttributeViewModel {
  @bindable({ primary: true })
  target!: string | Element;

  @bindable()
  rootMargin: string = '0px 0px -25%';

  @bindable(coerceBoolean)
  smoothScroll: boolean = false;

  @bindable()
  threshold: number[] | string = [0.1, 0.5, 1];

  @bindable()
  /**
   * @deprecated
   */
  offset: number = 10;

  @bindable()
  /**
   * @deprecated
   */
  method: 'auto' | 'offset' | 'position' = 'auto';

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
      offset: this.offset,
      method: this.method,
    });
  }

  #destroyScrollSpy() {
    this.#scrollspy?.dispose();
    this.#scrollspy = undefined;
  }
}
