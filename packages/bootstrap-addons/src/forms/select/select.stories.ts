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

export const Overview: Story = (args) => ({
  props: args,
});
