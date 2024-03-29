import './carousel.scss';

import { customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-carousel-item')
export class BsCarouselItem extends BaseAttribute {
  get classes() {
    return ['carousel-item'];
  }
}
