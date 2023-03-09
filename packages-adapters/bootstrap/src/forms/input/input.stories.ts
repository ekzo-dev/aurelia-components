import { Meta, Story } from '@storybook/aurelia';
import { BsInput } from '.';
import { inputSizeOptions, selectControl } from '../../story';

export default {
  title: 'Bootstrap / Forms / Input',
  component: BsInput,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  args: {
    label: 'Label',
  },
  argTypes: {
    size: selectControl(inputSizeOptions, 'inline-radio'),
  },
} as Meta;

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});
