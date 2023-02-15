import { Meta, Story } from '@storybook/aurelia';
import { BsInput } from '.';

export default {
  title: 'Bootstrap / Forms / Input',
  component: BsInput,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  args: {
    label:
      'Input label (работает type: color, time, range, password, hidden, file, datetime-local, date. Вопросы: required in template, control: on-change, matcher.)',
  },
} as Meta;

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});
