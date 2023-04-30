import { Meta, Story, extractArgTypes } from '@storybook/aurelia';
import { BsSelect } from '.';
import { inputSizeOptions } from '../../story';
import { selectControl } from '../../../../../.storybook/helpers';

export default {
  title: 'Bootstrap / Forms / Select',
  component: BsSelect,
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
      ...extractArgTypes(BsSelect).bsSize,
      ...selectControl(inputSizeOptions),
    },
  },
} as Meta;

export const Default: Story = (args) => ({
  props: args,
});
