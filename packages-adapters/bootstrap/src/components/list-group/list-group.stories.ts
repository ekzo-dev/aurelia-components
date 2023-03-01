import { Meta, Story } from '@storybook/aurelia';
import { BsListGroup, BsListGroupItem } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / List group',
  component: BsListGroup,
} as Meta;
export default meta;

const Default: Story = (args) => ({
  components: [BsListGroupItem],
  innerHtml: `
<bs-list-group-item variant.bind="variant">An item</bs-list-group-item>
<bs-list-group-item variant.bind="variant">A second item</bs-list-group-item>
<bs-list-group-item variant.bind="variant">A third item</bs-list-group-item>
<bs-list-group-item variant.bind="variant">A fourth item</bs-list-group-item>
<bs-list-group-item variant.bind="variant">And a fifth one</bs-list-group-item>
  `,
  props: args,
});
Default.args = {
  variant: '',
};

const activeAndDisabledItems: Story = (args) => ({
  components: [BsListGroup, BsListGroupItem],
  template: `
<bs-list-group class="w-75" numbered.bind="numbered" flush.bind="flush" horizontal.bind="horizontal">
    <bs-list-group-item active.bind="true" variant.bind="variant">An active item</bs-list-group-item>
    <bs-list-group-item variant.bind="variant">A second item</bs-list-group-item>
    <bs-list-group-item variant.bind="variant">A third item</bs-list-group-item>
    <bs-list-group-item variant.bind="variant">A fourth item</bs-list-group-item>
    <bs-list-group-item disabled.bind="true" variant.bind="variant">A disabled item</bs-list-group-item>
</bs-list-group>
  `,
  props: args,
});
activeAndDisabledItems.args = {
  variant: '',
};

export { Default, activeAndDisabledItems };
