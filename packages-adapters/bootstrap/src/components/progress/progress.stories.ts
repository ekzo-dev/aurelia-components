import { Meta, Story } from '@storybook/aurelia';
import { BsProgress } from '.';
import { selectControl, variantOptions } from '../../story';

export default {
  title: 'Bootstrap / Components / Progress',
  component: BsProgress,
  args: {
    label: 'Label', // added to template to work
    value: 30,
  },
  argTypes: {
    background: selectControl(variantOptions),
  },
} as Meta;

export const Default: Story = (args) => ({
  props: args,
});
