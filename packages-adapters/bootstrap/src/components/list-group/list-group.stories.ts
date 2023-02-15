import { Meta, Story } from '@storybook/aurelia';
import { BsListGroup, BsListGroupItem } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / List group',
  component: BsListGroup,
} as Meta;
export default meta;

export const Default: Story = (args) => ({
  components: [BsListGroupItem],
  innerHtml: `
    <bs-list-group-item>Item 1</bs-list-group-item>
    <bs-list-group-item>Item 2</bs-list-group-item>
  `,
  props: {
    ...args,
  },
});
