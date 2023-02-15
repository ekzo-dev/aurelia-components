import { Meta, Story } from '@storybook/aurelia';
import { BsSpinner } from '.';

export default {
  title: 'Bootstrap / Components / Spinner',
  component: BsSpinner,
} as Meta;

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});
