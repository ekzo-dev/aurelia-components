import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsButton } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Button',
  component: BsButton,
};
export default meta;

const Default: Story = (args): StoryFnAureliaReturnType => ({
  innerHtml: 'Button content',
  props: args,
});

const FullWidthExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: '<bs-button class="d-grid">Accept</bs-button>',
  props: args,
});

export { Default, FullWidthExample };
