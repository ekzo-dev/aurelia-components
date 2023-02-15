import { Meta, Story } from '@storybook/aurelia';
import { BsSelect } from '.';

export default {
  title: 'Bootstrap / Forms / Select',
  component: BsSelect,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  args: {
    label: `Select label (исправлен шаблон model.bind => value.bind.
    Вопросы: нет контрола small (для form-select), для чего emptyLabel (он выбирается по дефолту если добавить),
    нет в шаблоне selected, для чего параметр placeholder в select.ts.
    Control: on-change, для чего и откуда value)`,
    options: { '1': 'One', '2': 'Two', '3': 'Three' },
  },
} as Meta;

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});
