import { extractArgTypes, Meta, Story } from '@storybook/aurelia';
import { BsSelectMultiple } from './select-multiple';

const disable = {
  table: {
    disable: true,
  },
};

export default {
  title: 'BS Select Multiple / BS Select Multiple',
  component: BsSelectMultiple,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  args: {
    label: 'Label',
    options: { '1': 'One', '2': 'Two', '3': 'Three' },
  },
  argTypes: {
    bsSize: {
      ...extractArgTypes(BsSelectMultiple).bsSize,
      options: ['', 'sm', 'lg'],
      control: {
        type: 'select',
      },
    },
    name: disable,
    multiple: disable,
    required: disable,
  },
} as Meta;

export const Default: Story = (args) => ({
  props: args,
});
