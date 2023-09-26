import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { BsCloseButton } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Close button',
  component: BsCloseButton,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

export default meta;

export const Overview: Story = (args): StoryFnAureliaReturnType => ({
  props: args,
});
