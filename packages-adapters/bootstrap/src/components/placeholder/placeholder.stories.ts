import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsCard, BsCardBody } from '../card';
import { BsButton } from '../button';
import { BsPlaceholder } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Placeholder',
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCard, BsCardBody, BsButton, BsPlaceholder],
  template: `
<div class="row col-6">
<div style="width: 250px;">
<p style="margin-top: 20px;">Without placeholders</p>
<bs-card>
  <bs-card-body>
    <h5 class="card-title">Card title</h5>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <bs-button>Go somewhere</bs-button>
  </bs-card-body>
</bs-card>
<p style="margin-top: 20px;">Placeholders as attribute to existing elements<br>
(<span style="color: darkred">ToDo: button is disabled manually now, label is still visible</span>)</p>
<bs-card>
  <bs-card-body>
    <h5 bs-placeholder="animation.bind: 'glow'" class="card-title">Card title</h5>
    <p bs-placeholder>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <bs-button disabled.bind="true" bs-placeholder>Go somewhere</bs-button>
  </bs-card-body>
</bs-card>
<p style="margin-top: 20px;">Placeholders as the block elements itself<br>
(<span style="color: darkred">ToDo: span width not applied correctly (in card only)</span>)</p>
<bs-card>
  <bs-card-body>
    <h5 bs-placeholder="size.bind: 'lg'; animation.bind: 'glow'">&nbsp;</h5>
    <p>
    <span bs-placeholder="animation.bind: 'glow'" width="col-6">&nbsp;</span>
    <span bs-placeholder="animation.bind: 'glow'" width="col-8">&nbsp;</span>
    </p>
    <span bs-placeholder="size.bind: 'lg'; color.bind: 'primary'" width="col-4">&nbsp;</span>
  </bs-card-body>
</bs-card>
</div>
</div>
  `,
  props: {
    ...args,
  },
});
