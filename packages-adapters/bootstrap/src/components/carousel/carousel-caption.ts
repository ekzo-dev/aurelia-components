import './carousel.scss';

import { customAttribute } from 'aurelia';

import { BaseAttribute } from '../base-attribute';

@customAttribute('bs-carousel-caption')
export class BsCarouselCaption extends BaseAttribute {
  get classes() {
    return ['carousel-caption'];
  }
}
