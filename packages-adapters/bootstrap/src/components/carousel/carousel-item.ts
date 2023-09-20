import './carousel.scss';

import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

import { coerceBoolean } from '../../utils';

@customElement({
  name: 'bs-carousel-item',
  template: `
    <template class="carousel-item \${active ? 'active' : ''}">
        <au-slot></au-slot>
    </template>
  `,
})
export class BsCarouselItem implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  active: boolean = false;
}

@customElement({
  name: 'bs-carousel-caption',
  template: '<div class="carousel-caption"><au-slot></au-slot></div>',
})
export class BsCarouselCaption implements ICustomElementViewModel {}
