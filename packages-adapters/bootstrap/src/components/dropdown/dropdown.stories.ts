import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsDropdown, BsDropdownMenu, BsDropdownItem, BsDropdownToggle } from '.';
import { BsButton } from '../button';
import { BsButtonGroup } from '../button-group';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const meta: Meta = {
  title: 'Bootstrap / Components / Dropdown',
  component: BsDropdownMenu,
};
export default meta;

const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdown, BsDropdownItem, BsButton, BsDropdownToggle],
  template: `
<div bs-dropdown="direction.bind: direction; center.bind: center;">
<bs-button variant.bind="variant" bs-dropdown-toggle>Dropdown button</bs-button>
<bs-dropdown-menu dark.bind="dark">
  <bs-dropdown-item>Action</bs-dropdown-item>
  <bs-dropdown-item>Another action</bs-dropdown-item>
  <bs-dropdown-item disabled>Disabled action</bs-dropdown-item>
</bs-dropdown-menu>
</div>
  `,
  props: args,
});
Default.args = {
  variant: 'secondary',
  dark: false,
  direction: 'down',
  center: false,
};

const WithSizableButton: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdown, BsDropdownItem, BsButton, BsDropdownToggle, BsButtonGroup],
  template: `
<bs-button-group class="me-2">
  <div bs-dropdown="direction.bind: direction; center.bind: center;">
    <bs-button size="sm" bs-dropdown-toggle variant.bind="variant">Button sm</bs-button>
    <bs-dropdown-menu dark.bind="dark">
      <bs-dropdown-item>Action</bs-dropdown-item>
      <bs-dropdown-item>Another action</bs-dropdown-item>
      <bs-dropdown-item>Something else here</bs-dropdown-item>
      <bs-dropdown-item type="divider"></bs-dropdown-item>
      <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
    </bs-dropdown-menu>
  </div>
</bs-button-group>
<bs-button-group class="me-2">
  <div bs-dropdown="direction.bind: direction; center.bind: center;">
    <bs-button bs-dropdown-toggle variant.bind="variant">Button default</bs-button>
    <bs-dropdown-menu dark.bind="dark">
      <bs-dropdown-item>Action</bs-dropdown-item>
      <bs-dropdown-item>Another action</bs-dropdown-item>
      <bs-dropdown-item>Something else here</bs-dropdown-item>
      <bs-dropdown-item type="divider"></bs-dropdown-item>
      <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
    </bs-dropdown-menu>
  </div>
</bs-button-group>
<bs-button-group class="me-2">
  <div bs-dropdown="direction.bind: direction; center.bind: center;">
    <bs-button size="lg" bs-dropdown-toggle variant.bind="variant">Button lg</bs-button>
    <bs-dropdown-menu dark.bind="dark">
      <bs-dropdown-item>Action</bs-dropdown-item>
      <bs-dropdown-item>Another action</bs-dropdown-item>
      <bs-dropdown-item>Something else here</bs-dropdown-item>
      <bs-dropdown-item type="divider"></bs-dropdown-item>
      <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
    </bs-dropdown-menu>
  </div>
</bs-button-group>
  `,
  props: args,
});
WithSizableButton.args = {
  variant: 'secondary',
  dark: false,
  direction: 'down',
  center: false,
};

const WithSplitButton: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdown, BsDropdownItem, BsButton, BsDropdownToggle, BsButtonGroup],
  template: `
  <bs-button-group>
    <bs-button variant.bind="variant">Split Button</bs-button>
    <bs-button variant.bind="variant" bs-dropdown-toggle="split.bind: true">
      <span class="visually-hidden">Toggle Dropdown</span>
    </bs-button>
    <bs-dropdown-menu dark.bind="dark">
      <bs-dropdown-item>Action</bs-dropdown-item>
      <bs-dropdown-item>Another action</bs-dropdown-item>
      <bs-dropdown-item>Something else here</bs-dropdown-item>
    </bs-dropdown-menu>
  </bs-button-group>
  `,
  props: args,
});
WithSplitButton.args = {
  variant: 'secondary',
  dark: false,
};

export { Default, WithSizableButton, WithSplitButton };
