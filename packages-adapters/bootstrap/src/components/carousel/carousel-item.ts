import { customElement, ICustomElementViewModel } from 'aurelia';
import './carousel.scss';

@customElement({
  name: 'bs-carousel-item',
  template: `
    <template class="carousel-item \${active ? 'active' : ''}">
        <au-slot></au-slot>
    </template>
  `,
})
export class BsCarouselItem implements ICustomElementViewModel {
  active: boolean = false;
}

@customElement({
  name: 'bs-carousel-caption',
  template: '<div class="carousel-caption"><au-slot></au-slot></div>',
})
export class BsCarouselCaption implements ICustomElementViewModel {}
