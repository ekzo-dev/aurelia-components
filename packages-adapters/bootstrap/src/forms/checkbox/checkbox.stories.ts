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

const Default: Story = (args) => ({
  props: args,
});

const InlinePosition: Story = (args) => ({
  components: [BsCheckbox],
  template: `
<bs-checkbox label="1" value="1" name="checkbox1" title="1" inline.bind="inline" switcher.bind="switcher" indeterminate.bind="indeterminate"></bs-checkbox>
<bs-checkbox label="2" value="2" name="checkbox2" title="2" inline.bind="inline" switcher.bind="switcher" indeterminate.bind="indeterminate"></bs-checkbox>
<bs-checkbox label="3 (disabled)" value="3" name="checkbox3" title="3" disabled inline.bind="inline" switcher.bind="switcher" indeterminate.bind="indeterminate"></bs-checkbox>
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
  switcher: { table: { disable: true } },
  indeterminate: { table: { disable: true } },
};
InlinePosition.args = {
  inline: true,
};

export { Default, InlinePosition };
