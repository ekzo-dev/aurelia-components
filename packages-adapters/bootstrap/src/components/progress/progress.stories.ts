import { Meta, Story } from '@storybook/aurelia';
import { BsProgress } from '.';
import { variantOptions } from '../../story';
import { selectControl } from '../../../../../.storybook/helpers';

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
