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
  args: {
    label: `Textarea label(добавил в шаблон value.bind). Control: что такое placeholder`,
  },
} as Meta;

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});
