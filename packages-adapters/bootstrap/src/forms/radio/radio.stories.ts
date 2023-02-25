import { Meta, Story } from '@storybook/aurelia';
import { BsRadio } from '.';

export default {
  title: 'Bootstrap / Forms / Radio',
  component: BsRadio,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  args: {
    label: 'Radio',
  },
} as Meta;

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});
