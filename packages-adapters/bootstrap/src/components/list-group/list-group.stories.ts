import { Meta, Story, createComponentTemplate } from '@storybook/aurelia';
import { BsListGroup, BsListGroupItem } from '.';
import { variantsOptions, selectControl } from '../../story';

const horizontalOptions = ['always', 'sm', 'md', 'lg', 'xl'];

const meta: Meta = {
  title: 'Bootstrap / Components / List group',
  component: BsListGroup,
  argTypes: {
    variant: selectControl(variantsOptions),
    horizontal: selectControl(horizontalOptions),
  },
  args: {
    variant: '',
  },
} as Meta;
export default meta;

const Default: Story = (args) => ({
  components: [BsListGroupItem],
  innerHtml: `
${createComponentTemplate(BsListGroupItem, `An item`)}
${createComponentTemplate(BsListGroupItem, `A second item`)}
${createComponentTemplate(BsListGroupItem, `A third item`)}
${createComponentTemplate(BsListGroupItem, `A fourth item`)}
${createComponentTemplate(BsListGroupItem, `And a fifth one`)}
  `,
  props: args,
});

const activeAndDisabledItems: Story = (args) => ({
  components: [BsListGroup, BsListGroupItem],
  template: `
<bs-list-group class="w-75" numbered.bind="numbered" flush.bind="flush" horizontal.bind="horizontal">
    <bs-list-group-item active.bind="true" variant.bind="variant">An active item</bs-list-group-item>
    ${createComponentTemplate(BsListGroupItem, `A second item`)}
    ${createComponentTemplate(BsListGroupItem, `A third item`)}
    ${createComponentTemplate(BsListGroupItem, `A fourth item`)}
    <bs-list-group-item disabled.bind="true" variant.bind="variant">A disabled item</bs-list-group-item>
</bs-list-group>
  `,
  props: args,
});

export { Default, activeAndDisabledItems };
