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
<bs-checkbox label="3 (disabled)" value="checkbox3" name="3" title="3" disabled.bind="true" inline.bind="inline" checked.bind="checked" switcher.bind="switcher" indeterminate.bind="indeterminate"></bs-checkbox>
  `,
  props: args,
});
InlinePosition.args = {
  inline: true,
};

export { Default, InlinePosition };
