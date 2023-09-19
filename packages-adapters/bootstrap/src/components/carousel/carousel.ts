import type { BsCarouselItem } from '.';

import './carousel.scss';

import { ICustomElementController } from '@aurelia/runtime-html';
import { bindable, BindingMode, children, customElement, ICustomElementViewModel } from 'aurelia';
import { Carousel } from 'bootstrap';

import { coerceBoolean } from '../../utils';

import template from './carousel.html';

@customElement({
  name: 'bs-carousel',
  template,
})
export class BsCarousel implements ICustomElementViewModel, Carousel.Options {
  @bindable(coerceBoolean)
  ride = false;

  @bindable(coerceBoolean)
  fade?: boolean;

  @bindable()
  interval: number | false = 3000;

  @bindable(coerceBoolean)
  keyboard = false;

  @bindable()
  pause: 'hover' | false = 'hover';

  @bindable()
  direction: 'left' | 'right' = 'right';

  @bindable(coerceBoolean)
  wrap = true;

  //todo не тестировалось
  @bindable(coerceBoolean)
  touch = true;

  @bindable(coerceBoolean)
  indicators = true;

  @bindable(coerceBoolean)
  controls = true;

  @bindable(coerceBoolean)
  dark = false;

  @bindable({ mode: BindingMode.twoWay })
  activeSlide = 0;

  @children({
    options: { childList: true, subtree: true },
    query: (controller: ICustomElementController) =>
      controller.host.querySelector('div.carousel-inner')?.childNodes || [],
    filter: (el: HTMLElement) => el.tagName === 'BS-CAROUSEL-ITEM',
  })
  items: BsCarouselItem[];

  private carousel?: Carousel;

  private slideListener?: (event: Carousel.Event) => void;

  private itemsInit = false;

  constructor(private element: Element) {}

  attaching() {
    this.createCarousel();
  }

  detaching() {
    this.destroyCarousel();
  }

  itemsChanged() {
    if (this.items[this.activeSlide] && !this.itemsInit) {
      this.itemsInit = true;
      this.items[this.activeSlide].active = true;
    }
  }

  activeSlideChanged(value: number) {
    this.to(value);
  }

  rideChanged() {
    if (this.ride) this.cycle();
    else this.pauseCycle();
  }

  prev(): void {
    return this.carousel?.prev();
  }

  next(): void {
    return this.carousel?.next();
  }

  nextWhenVisible(): void {
    return this.carousel?.nextWhenVisible();
  }

  to(index: number): void {
    return this.carousel?.to(index);
  }

  cycle(): void {
    return this.carousel?.cycle();
  }

  pauseCycle(): void {
    return this.carousel?.pause();
  }

  private createCarousel() {
    this.carousel = new Carousel(this.element, {
      interval: this.interval,
      keyboard: this.keyboard,
      wrap: this.wrap,
      touch: this.touch,
      pause: this.pause,
      ride: this.ride,
    });

    this.slideListener = (event: Carousel.Event) => {
      this.activeSlide = event.to;
    };

    this.element.addEventListener('slide.bs.carousel', this.slideListener);
    this.rideChanged();
  }

  private destroyCarousel() {
    this.carousel?.dispose();
    this.carousel = undefined;

    if (this.slideListener) {
      this.element.removeEventListener('slide.bs.carousel', this.slideListener as unknown as EventListener);
    }
  }
}
