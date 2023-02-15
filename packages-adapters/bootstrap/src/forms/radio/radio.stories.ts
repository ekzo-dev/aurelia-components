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
    label: 'Radio label. Вопросы: required in template, checked. control: floating-label, on-change, matcher)',
  },
} as Meta;

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});
