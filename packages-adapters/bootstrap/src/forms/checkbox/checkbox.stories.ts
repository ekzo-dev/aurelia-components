import { Meta, Story } from '@storybook/aurelia';
import { BsCheckbox } from '.';
import { BsButton, BsButtonGroup } from '../../components';

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

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});

export const Example: Story = (args) => ({
  components: [BsCheckbox],
  template: `
    <bs-checkbox name="checkbox1" label="Default checkbox" title="Default checkbox"></bs-checkbox>
    <bs-checkbox name="checkbox2" disabled.bind="true" label="Disabled checkbox" title="Disabled checkbox"></bs-checkbox>
    <bs-checkbox name="checkbox3" checked.bind="true" label="Checked checkbox" title="Checked checkbox"></bs-checkbox>
    <bs-checkbox name="checkbox4" disabled.bind="true" checked.bind="true" label="Disabled checked checkbox" title="Disabled checked checkbox"></bs-checkbox>
    <bs-checkbox name="checkbox5" indeterminate.bind="true" label="Indeterminate checkbox" title="Indeterminate checkbox"></bs-checkbox>
    <bs-checkbox name="checkbox6" disabled.bind="true" indeterminate.bind="true" label="Disabled Indeterminate checkbox" title="Disabled Indeterminate checkbox"></bs-checkbox>
  `,
  props: {
    ...args,
  },
});

export const switchExample: Story = (args) => ({
  components: [BsCheckbox],
  template: `
    <bs-checkbox name="checkbox1" label="Default checkbox input" title="Default checkbox input" switcher.bind="true"></bs-checkbox>
    <bs-checkbox name="checkbox2" disabled.bind="true" label="Disabled switch checkbox input" title="Disabled switch checkbox input" switcher.bind="true"></bs-checkbox>
    <bs-checkbox name="checkbox3" checked.bind="true" label="Checked switch checkbox input" title="Checked switch checkbox input" switcher.bind="true"></bs-checkbox>
    <bs-checkbox name="checkbox4" disabled.bind="true" checked.bind="true" label="Disabled checked switch checkbox input" title="Disabled checked switch checkbox input"  switcher.bind="true"></bs-checkbox>
    <bs-checkbox name="checkbox5" indeterminate.bind="true" label="Indeterminate switch checkbox input" title="Indeterminate switch checkbox input" switcher.bind="true"></bs-checkbox>
    <bs-checkbox name="checkbox6" disabled.bind="true" indeterminate.bind="true" label="Disabled Indeterminate switch checkbox input" title="Disabled Indeterminate switch checkbox input" switcher.bind="true"></bs-checkbox>
  `,
  props: {
    ...args,
  },
});

export const InlinePositionExample: Story = (args) => ({
  components: [BsCheckbox],
  template: `
    <bs-checkbox label="1" value="1" name="checkbox1" title="1" inline.bind="true"></bs-checkbox>
    <bs-checkbox label="2" value="2" name="checkbox2" title="2" inline.bind="true"></bs-checkbox>
    <bs-checkbox label="3 (disabled)" value="checkbox3" name="3" title="3" disabled.bind="true" inline.bind="true"></bs-checkbox>
  `,
  props: {
    ...args,
  },
});
