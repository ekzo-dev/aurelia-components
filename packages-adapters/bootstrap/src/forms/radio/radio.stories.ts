import { Meta, Story } from '@storybook/aurelia';
import { BsRadio } from '.';
import { BsCheckbox } from '../checkbox';

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

const Default: Story = (args) => ({
  props: {
    ...args,
  },
});

const InlinePosition: Story = (args) => ({
  components: [BsRadio],
  template: `
<bs-radio label="1" value="1" name="radio1" title="1" inline.bind="inline" switcher.bind="switcher"></bs-radio>
<bs-radio label="2" value="2" name="radio2" title="2" inline.bind="inline" switcher.bind="switcher"></bs-radio>
<bs-radio label="3 (disabled)" value="3" name="radio3" title="3" disabled inline.bind="inline" switcher.bind="switcher"></bs-radio>
  `,
  props: args,
});
InlinePosition.argTypes = {
  checked: { table: { disable: true } },
  label: { table: { disable: true } },
  name: { table: { disable: true } },
  id: { table: { disable: true } },
  title: { table: { disable: true } },
  disabled: { table: { disable: true } },
  required: { table: { disable: true } },
  valid: { table: { disable: true } },
  validFeedback: { table: { disable: true } },
  invalidFeedback: { table: { disable: true } },
  model: { table: { disable: true } },
  value: { table: { disable: true } },
  matcher: { table: { disable: true } },
};
InlinePosition.args = {
  inline: true,
};

export { Default, InlinePosition };
