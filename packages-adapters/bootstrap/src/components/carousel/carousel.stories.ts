import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsCarousel } from './carousel';
import { BsCarouselItem, BsCarouselCaption } from '.';

import './carousel.stories.scss';

const meta: Meta = {
  title: 'Bootstrap / Components / Carousel',
  component: BsCarousel,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCarouselItem, BsCarouselCaption],
  props: {
    innerHtml: `
    <bs-carousel-item>
      <svg class="bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777"></rect>
          <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
      </svg>
      <bs-carousel-caption class="d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
    </bs-carousel-caption>
    </bs-carousel-item>
    <bs-carousel-item>
      <svg class="bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#666"></rect>
          <text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
      </svg>
      <bs-carousel-caption class="d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
      </bs-carousel-caption>
    </bs-carousel-item>
    <bs-carousel-item>
      <svg class="bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#555"></rect>
          <text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
      </svg>
      <bs-carousel-caption class="d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
      </bs-carousel-caption>
    </bs-carousel-item>
  `,
    ...args,
  },
});
