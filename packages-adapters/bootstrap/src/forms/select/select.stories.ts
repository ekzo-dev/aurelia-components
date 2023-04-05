import { Meta, Story } from '@storybook/aurelia';
import { BsSelect } from '.';
import { inputSizeOptions, selectControl } from '../../story';

export default {
  title: 'Bootstrap / Forms / Select',
  component: BsSelect,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  args: {
    options: { '1': 'One', '2': 'Two', '3': 'Three' },
    emptyLabel: 'Open this select menu',
  },
  argTypes: {
    bsSize: selectControl(inputSizeOptions, 'inline-radio'),
  },
} as Meta;

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});
