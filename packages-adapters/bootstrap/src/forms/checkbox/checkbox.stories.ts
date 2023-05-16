import { Meta, Story } from '@storybook/aurelia';
import { BsCheckbox } from '.';
import { disableControl } from '../../../../../.storybook/helpers';

const meta: Meta = {
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
};
export default meta;

const Overview: Story = (args) => ({
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
  checked: disableControl,
  label: disableControl,
  name: disableControl,
  id: disableControl,
  title: disableControl,
  disabled: disableControl,
  required: disableControl,
  valid: disableControl,
  validFeedback: disableControl,
  invalidFeedback: disableControl,
  model: disableControl,
  value: disableControl,
  matcher: disableControl,
  switcher: disableControl,
  indeterminate: disableControl,
};
InlinePosition.args = {
  inline: true,
};

export { Overview, InlinePosition };
