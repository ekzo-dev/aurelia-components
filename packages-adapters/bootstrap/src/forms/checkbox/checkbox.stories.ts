import { Meta, Story } from '@storybook/aurelia';
import { BsCheckbox } from '.';

export default {
  title: 'Bootstrap / Forms / Checkbox',
  component: BsCheckbox,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  args: {
    label: 'Some label',
  },
} as Meta;

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});
