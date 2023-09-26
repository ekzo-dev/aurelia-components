import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import { createComponentTemplate, Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { BsButton } from '../button';
import { BsCard, BsCardBody } from '../card';

import { BsPlaceholder } from '.';

const meta: Meta = {
  component: BsPlaceholder,
  title: 'Bootstrap / Components / Placeholder',
  argTypes: {
    size: selectControl(['', 'sm', 'lg', 'xs']),
    animation: selectControl(['', 'glow', 'wave']),
  },
};

export default meta;

const Example: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCard, BsCardBody, BsButton],
  template: `
<div class="d-flex justify-content-around">
  <bs-card style="width: 18rem">
    <svg class="card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#20c997"></rect>
    </svg>
    <bs-card-body>
      <h5>Card title</h5>
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button bs-button>Go somewhere</button>
    </bs-card-body>
  </bs-card>
  <bs-card style="width: 18rem">
    <svg class="card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
    </svg>
    <bs-card-body>
      <h5>
        <span class="col-6" ${createComponentTemplate(BsPlaceholder)}></span>
      </h5>
      <p>
        <span class="col-7" ${createComponentTemplate(BsPlaceholder)}></span>
        <span class="col-4" ${createComponentTemplate(BsPlaceholder)}></span>
        <span class="col-4" ${createComponentTemplate(BsPlaceholder)}></span>
        <span class="col-6" ${createComponentTemplate(BsPlaceholder)}></span>
        <span class="col-8" ${createComponentTemplate(BsPlaceholder)}></span>
      </p>
      <a href="#" tabindex="-1" class="col-6" bs-button="disabled: true" bs-placeholder></a>
    </bs-card-body>
  </bs-card>
</div>
  `,
  props: args,
});

Example.args = {
  animation: 'glow',
};

const Color: Story = (args): StoryFnAureliaReturnType => ({
  template: `
<span class="col-12" ${createComponentTemplate(BsPlaceholder)}></span>
<span class="col-12 bg-primary" ${createComponentTemplate(BsPlaceholder)}></span>
<span class="col-12 bg-secondary" ${createComponentTemplate(BsPlaceholder)}></span>
<span class="col-12 bg-success" ${createComponentTemplate(BsPlaceholder)}></span>
<span class="col-12 bg-danger" ${createComponentTemplate(BsPlaceholder)}></span>
<span class="col-12 bg-warning" ${createComponentTemplate(BsPlaceholder)}></span>
<span class="col-12 bg-info" ${createComponentTemplate(BsPlaceholder)}></span>
<span class="col-12 bg-light" ${createComponentTemplate(BsPlaceholder)}></span>
<span class="col-12 bg-dark" ${createComponentTemplate(BsPlaceholder)}></span>
  `,
  props: args,
});

export { Color, Example };
