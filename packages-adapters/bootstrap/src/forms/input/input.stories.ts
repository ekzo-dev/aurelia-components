import { Meta, Story } from '@storybook/aurelia';
import { BsInput } from '.';
import { selectControl } from '../../story';

const sizeOptions = <const>['sm', 'lg'];

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
    size: selectControl(sizeOptions, 'inline-radio'),
  },
} as Meta;

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});
