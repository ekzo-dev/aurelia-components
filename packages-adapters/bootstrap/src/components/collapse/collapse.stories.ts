import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsCollapse } from './collapse';
import { BsCardBody, BsCard } from '../card';
import { BsButton } from '../button';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

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
<button bs-button click.trigger="collapse.toggle()" class="mb-3">Toggle content</button>
<bs-collapse horizontal.bind="horizontal" view-model.ref="collapse">
  <bs-card>
    <bs-card-body>
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </bs-card-body>
  </bs-card>
</bs-collapse>
`,
  props: args,
});
