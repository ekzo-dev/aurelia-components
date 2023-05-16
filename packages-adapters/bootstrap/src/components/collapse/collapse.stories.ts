import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsCollapse } from './collapse';
import { BsCardBody, BsCard } from '../card';

const meta: Meta = {
  title: 'Bootstrap / Components / Collapse',
  component: BsCollapse,
};
export default meta;

export const Overview: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCard, BsCardBody],
  innerHtml: `
  <bs-card>
    <bs-card-body>
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </bs-card-body>
  </bs-card>
  `,
  props: args,
});
