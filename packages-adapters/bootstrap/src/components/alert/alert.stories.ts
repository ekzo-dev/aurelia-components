import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsAlert } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Alert',
  component: BsAlert,
  parameters: {
    actions: {
      handles: ['close.bs.alert', 'closed.bs.alert'],
    },
  },
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  innerHtml: 'Alert content',
  props: {
    ...args,
  },
});
