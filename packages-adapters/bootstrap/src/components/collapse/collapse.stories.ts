import 'bootstrap/dist/css/bootstrap-utilities.min.css';

import { createComponentTemplate, Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { BsButton } from '../button';
import { BsCard, BsCardBody } from '../card';

import { BsCollapse } from './collapse';

const meta: Meta = {
  title: 'Bootstrap / Components / Collapse',
  component: BsCollapse,
  parameters: {
    actions: {
      handles: ['hide.bs.collapse', 'hidden.bs.collapse', 'show.bs.collapse', 'shown.bs.collapse'],
    },
  },
};

export default meta;

export const Overview: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCard, BsCardBody, BsButton],
  template: `
<button bs-button click.trigger="collapsed = !collapsed" class="mb-3">Toggle content</button>
<div ${createComponentTemplate(BsCollapse)}>
  <bs-card>
    <bs-card-body>
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </bs-card-body>
  </bs-card>
</div>
`,
  props: args,
});
