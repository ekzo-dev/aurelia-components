import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsBreadcrumb, BsBreadcrumbItem } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Breadcrumb',
  component: BsBreadcrumb,
  args: {
    divider: '/',
  },
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsBreadcrumbItem],
  innerHtml: `
    <bs-breadcrumb-item><a href="#">Home</a></bs-breadcrumb-item>
    <bs-breadcrumb-item active>Library</bs-breadcrumb-item>
  `,
  props: {
    ...args,
  },
});
