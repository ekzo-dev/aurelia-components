import template from './carousel.html';

import './carousel.scss';

import type { BsCarouselItem } from '.';

import { ICustomElementController } from '@aurelia/runtime-html';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, slotted, customElement, ICustomElementViewModel } from 'aurelia';
import { Carousel } from 'bootstrap';

import { coerceBooleanOrString } from '../../utils';

@customElement({
  name: 'bs-carousel',
  template,
})
export class BsCarousel implements ICustomElementViewModel, Carousel.Options, EventListenerObject {
  @bindable(coerceBooleanOrString('carousel'))
  ride: boolean | 'carousel' = false;

  @bindable(coerceBoolean)
  fade: boolean = false;

  @bindable()
  interval: number = 5000;

  @bindable(coerceBoolean)
  keyboard: boolean = true;

  @bindable(coerceBooleanOrString('hover'))
  pause: false | 'hover' = 'hover';

  @bindable(coerceBoolean)
  wrap: boolean = true;

  @bindable(coerceBoolean)
  touch: boolean = true;

  @bindable(coerceBoolean)
  indicators: boolean = false;

  @bindable(coerceBoolean)
  controls: boolean = false;

  @bindable(coerceBoolean)
  dark: boolean = false;

  @slotted('.carousel-item')
  items: HTMLElement[];

  activeSlide: number = 0;

  #carousel?: Carousel;

  constructor(protected element: HTMLElement) {}

  attached() {
    this.#createCarousel();
  }

  detaching() {
    this.#destroyCarousel();
  }

  itemsChanged(items: HTMLElement[]) {
    if (this.activeSlide >= items.length) {
      this.to(0);
      this.activeSlide = 0;
    }

    items[this.activeSlide].classList.add('active');
  }

  propertyChanged(key: keyof Carousel.Options) {
    const options: Array<keyof Carousel.Options> = ['interval', 'keyboard', 'pause', 'ride', 'touch', 'wrap'];

    if (options.includes(key)) {
      this.#destroyCarousel();
      this.#createCarousel();
    }
  }

  prev(): void {
    return this.#carousel?.prev();
  }

  next(): void {
    return this.#carousel?.next();
  }

  nextWhenVisible(): void {
    return this.#carousel?.nextWhenVisible();
  }

  to(index: number): void {
    return this.#carousel?.to(index);
  }

  cycle(): void {
    return this.#carousel?.cycle();
  }

  pauseCycle(): void {
    return this.#carousel?.pause();
  }

  handleEvent(event: Event) {
    this.activeSlide = (event as unknown as Carousel.Event).to;
  }

  #createCarousel() {
    this.#carousel = new Carousel(this.element, {
      interval: this.interval,
      keyboard: this.keyboard,
      wrap: this.wrap,
      touch: this.touch,
      pause: this.pause,
      ride: this.ride,
    });

    this.element.addEventListener('slide.bs.carousel', this);
  }

  #destroyCarousel() {
    this.#carousel?.dispose();
    this.#carousel = undefined;

    this.element.removeEventListener('slide.bs.carousel', this);
  }
}
