import { Meta, Story } from '@storybook/aurelia';
import { BsProgress } from '.';

export default {
  title: 'Bootstrap / Components / Progress',
  component: BsProgress,
  args: {
    label: 'Label', // added to template to work
    value: 30,
  },
} as Meta;

export const Default: Story = (args) => ({
  props: args,
});
