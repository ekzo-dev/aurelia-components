import { Meta, Story } from '@storybook/aurelia';
import { BsListGroup, BsListGroupItem } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / List group',
  component: BsListGroup,
} as Meta;
export default meta;

export const Default: Story = (args) => ({
  components: [BsListGroupItem],
  props: {
    innerHtml: `
    <bs-list-group-item>An item</bs-list-group-item>
    <bs-list-group-item>A second item</bs-list-group-item>
    <bs-list-group-item>A third item</bs-list-group-item>
    <bs-list-group-item>A fourth item</bs-list-group-item>
    <bs-list-group-item>And a fifth one</bs-list-group-item>
  `,
    ...args,
  },
});

export const activeAndDisabledItemsExample: Story = (args) => ({
  components: [BsListGroup, BsListGroupItem],
  template: `
<bs-list-group class="w-75">
    <bs-list-group-item active.bind="true">An active item</bs-list-group-item>
    <bs-list-group-item>A second item</bs-list-group-item>
    <bs-list-group-item>A third item</bs-list-group-item>
    <bs-list-group-item>A fourth item</bs-list-group-item>
    <bs-list-group-item disabled.bind="true">A disabled item</bs-list-group-item>
</bs-list-group>
  `,
  props: {
    ...args,
  },
});

export const colorsExample: Story = (args) => ({
  components: [BsListGroup, BsListGroupItem],
  template: `
<bs-list-group class="w-75">
    <bs-list-group-item>A simple default list group item</bs-list-group-item>
    <bs-list-group-item variant="primary">A simple primary list group item</bs-list-group-item>
    <bs-list-group-item variant="secondary">A simple secondary list group item</bs-list-group-item>
    <bs-list-group-item variant="success">A simple success list group item</bs-list-group-item>
    <bs-list-group-item variant="danger">A simple danger list group <item></item></bs-list-group-item>
    <bs-list-group-item variant="warning">A simple warning list group item</bs-list-group-item>
    <bs-list-group-item variant="info">A simple info list group item</bs-list-group-item>
    <bs-list-group-item variant="light">A simple light list group item</bs-list-group-item>
    <bs-list-group-item variant="dark">A simple dark list group item</bs-list-group-item>
</bs-list-group>
  `,
  props: {
    ...args,
  },
});
