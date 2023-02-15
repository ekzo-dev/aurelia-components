import { Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    ...args,
  },
});
