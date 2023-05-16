import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsTextarea } from '.';

export default {
  title: 'Bootstrap / Forms / Textarea',
  component: BsTextarea,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
} as Meta;

export const Overview: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    ...args,
  },
});
