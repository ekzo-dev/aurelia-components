import { Meta, Story } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { VARIANTS } from '../../constants';

import { BsProgress } from '.';

export default {
  title: 'Bootstrap / Components / Progress',
  component: BsProgress,
  args: {
    label: 'Label', // added to template to work
    value: 30,
  },
  argTypes: {
    background: selectControl(VARIANTS),
  },
} as Meta;

export const Overview: Story = (args) => ({
  props: args,
});
