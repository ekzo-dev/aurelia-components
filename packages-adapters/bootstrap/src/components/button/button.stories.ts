import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsButton } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Button',
  component: BsButton,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    innerHtml: 'Button content',
    ...args,
  },
});
