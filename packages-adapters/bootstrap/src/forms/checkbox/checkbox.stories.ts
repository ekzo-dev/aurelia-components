import { Meta, Story } from '@storybook/aurelia';

import { disableControl, selectControl } from '../../../../../.storybook/helpers';
import { SIZES, VARIANTS } from '../../constants';

import { BsCheckbox } from '.';

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
  argTypes: {
    mode: selectControl(['switch', 'button']),
    buttonVariant: selectControl([...VARIANTS, 'link', ...VARIANTS.map((v) => `outline-${v}`)]),
    buttonSize: selectControl(['', ...SIZES]),
  },
};

export default meta;

const Overview: Story = (args) => ({
  props: args,
});

const BindingToArray: Story = (args) => ({
  template: `
<bs-checkbox label="One" value="1" checked.bind="checked"></bs-checkbox>
<bs-checkbox label="Two" value="2" checked.bind="checked"></bs-checkbox>
<bs-checkbox label="Three" value="3" checked.bind="checked"></bs-checkbox>
<br>
Selected: \${checked}
  `,
  props: args,
});

BindingToArray.argTypes = {
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
  mode: disableControl,
  buttonSize: disableControl,
  buttonVariant: disableControl,
  indeterminate: disableControl,
  form: disableControl,
  inline: disableControl,
  reverse: disableControl,
};
BindingToArray.args = {
  checked: [],
};

export { BindingToArray, Overview };
