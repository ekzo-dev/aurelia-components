import { Meta, Story, StoryFnAureliaReturnType, extractArgTypes, createComponentTemplate } from '@storybook/aurelia';
import { BsDropdown, BsDropdownMenu, BsDropdownItem, BsDropdownToggle } from '.';
import { BsButton } from '../button';
import { BsButtonGroup } from '../button-group';
import { selectControl } from '../../story';

import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const directionOptions = ['down', 'up', 'end', 'start'];
const displayOptions = ['dynamic', 'static'];
const alignOptions = ['end', 'sm-start', 'md-start', 'lg-start', 'xl-start', 'xxl-start'];
const dropdownArgTypes = extractArgTypes(BsDropdown);

const meta: Meta = {
  title: 'Bootstrap / Components / Dropdown',
  component: BsDropdownMenu,
  parameters: {
    actions: {
      handles: ['hide.bs.dropdown', 'hidden.bs.dropdown', 'show.bs.dropdown', 'shown.bs.dropdown'],
    },
  },
};
export default meta;

const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdown, BsDropdownItem, BsButton, BsDropdownToggle],
  template: `
<div ${createComponentTemplate(BsDropdown)}>
  <bs-button bs-dropdown-toggle>Dropdown button</bs-button>
  ${createComponentTemplate(
    BsDropdownMenu,
    `
    <bs-dropdown-item>Action</bs-dropdown-item>
    <bs-dropdown-item>Another action</bs-dropdown-item>
    <bs-dropdown-item disabled>Disabled action</bs-dropdown-item>
  `
  )}
</div>
  `,
  props: args,
});
Default.argTypes = {
  align: selectControl(alignOptions),
  display: selectControl(displayOptions),
  ...dropdownArgTypes,
  direction: {
    ...dropdownArgTypes.direction,
    ...selectControl(directionOptions),
  },
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
