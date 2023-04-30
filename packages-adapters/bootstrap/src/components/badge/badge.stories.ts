import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsBadge } from '.';
import { BsButton } from '../button';
import { variantOptions } from '../../story';
import { selectControl } from '../../../../../.storybook/helpers';

const meta: Meta = {
  title: 'Bootstrap / Components / Badge',
  component: BsBadge,
  argTypes: {
    variant: selectControl(variantOptions),
  },
};
export default meta;

const Default: Story = (args): StoryFnAureliaReturnType => ({
  innerHtml: 'NEW',
  props: args,
});

const Positioning: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
<bs-button>INBOX</bs-button>
<bs-badge pill.bind="pill" variant.bind="variant" style="position: relative; top: -15px; left: -15px;">99+</bs-badge>
<bs-button class="me-4">Notifications <bs-badge pill.bind="pill" variant.bind="variant">4</bs-badge></bs-button>
  `,
  props: args,
});
Positioning.args = {
  variant: 'danger',
  pill: false,
};

export { Default, Positioning };
