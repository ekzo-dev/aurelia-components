import { extractArgTypes, Meta, Story } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';

import { BsSelect } from '.';

export default {
  title: 'Ekzo / Bootstrap Addons / Forms / Select',
  component: BsSelect,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  args: {
    label: 'Label',
    options: [
      { value: undefined, text: '' },
      { value: '1', text: 'One', disabled: true },
      { value: '2', text: 'Two' },
      { value: '3', text: 'Three', group: 'Group' },
    ],
    value: '2',
  },
  argTypes: {
    bsSize: {
      ...extractArgTypes(BsSelect).bsSize,
      ...selectControl(['', 'sm', 'lg']),
    },
  },
} as Meta;

const Overview: Story = (args) => ({
  props: args,
});

const Multiple: Story = (args) => ({
  props: args,
});

Multiple.args = {
  multiple: true,
  value: ['2', '3'],
};

const LargeOptions: Story = (args) => ({
  props: args,
  template: '<bs-select value.bind="value" options.bind="options" label.bind="label" style="width: 400px"></bs-select>',
});

LargeOptions.args = {
  options: Array.from({ length: 1000 }).map((v, i) => ({
    value: i.toString(),
    text: `Option ${i} has long content which forces dropdown menu to scale larger that select box`,
  })),
};

// eslint-disable-next-line
export { Overview, Multiple, LargeOptions };
