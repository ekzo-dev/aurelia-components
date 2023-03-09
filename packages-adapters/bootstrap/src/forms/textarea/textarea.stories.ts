import { Meta, Story } from '@storybook/aurelia';
import { BsTextarea } from '.';

export default {
  title: 'Bootstrap / Forms / Textarea',
  component: BsTextarea,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
} as Meta;

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});
