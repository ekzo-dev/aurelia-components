import { Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    ...args,
  },
});

export const selectControl = (options, type = 'select') => ({
  options: options,
  control: {
    type: type,
  },
});

export const disableControl = {
  table: {
    disable: true,
  },
};
