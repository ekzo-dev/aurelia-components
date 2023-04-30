import { Meta, Story } from '@storybook/aurelia';
import { BsRadio } from '.';
import { disableControl } from '../../../../../.storybook/helpers';

const meta: Meta = {
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
};
export default meta;

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
};
InlinePosition.args = {
  inline: true,
};

export { Default, InlinePosition };
