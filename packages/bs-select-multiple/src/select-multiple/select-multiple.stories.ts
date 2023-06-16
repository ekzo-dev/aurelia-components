import { extractArgTypes, Meta, Story } from '@storybook/aurelia';
import { BsSelectMultiple } from './select-multiple';
import { selectControl, disableControl } from '../../../../.storybook/helpers';

export default {
  title: 'Ekzo / BS Select Multiple',
  component: BsSelectMultiple,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  args: {
    label: 'Label',
    options: { '1': 'One', '2': 'Two', '3': 'Three' },
    value: [],
  },
  argTypes: {
    bsSize: {
      ...extractArgTypes(BsSelectMultiple).bsSize,
      ...selectControl(['', 'sm', 'lg']),
    },
    multiple: disableControl,
  },
} as Meta;

export const Overview: Story = (args) => ({
  props: args,
});
