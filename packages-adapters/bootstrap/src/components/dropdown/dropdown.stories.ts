import { Meta, Story, StoryFnAureliaReturnType, extractArgTypes, createComponentTemplate } from '@storybook/aurelia';
import { BsDropdown, BsDropdownMenu, BsDropdownItem, BsDropdownToggle } from '.';
import { BsButton } from '../button';
import { BsButtonGroup } from '../button-group';
import { selectControl } from '../../../../../.storybook/helpers';

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
  argTypes: {
    align: selectControl(alignOptions),
    display: selectControl(displayOptions),
  },
};
export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdown, BsDropdownItem, BsButton, BsDropdownToggle],
  template: `
<div ${createComponentTemplate(BsDropdown)}>
  <button bs-button bs-dropdown-toggle>Dropdown button</button>
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
Overview.argTypes = {
  ...dropdownArgTypes,
  direction: {
    ...dropdownArgTypes.direction,
    ...selectControl(directionOptions),
  },
};

const SplitButton: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdown, BsDropdownItem, BsButton, BsDropdownToggle, BsButtonGroup],
  template: `
<div ${createComponentTemplate(BsDropdown)}>
  <bs-button-group>
    <button bs-button>Split Button</button>
    <button bs-button bs-dropdown-toggle="split.bind: true">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
  ${createComponentTemplate(
    BsDropdownMenu,
    `
      <bs-dropdown-item>Action</bs-dropdown-item>
      <bs-dropdown-item>Another action</bs-dropdown-item>
      <bs-dropdown-item>Something else here</bs-dropdown-item>
    `
  )}
  </bs-button-group>
</div>
  `,
  props: args,
});

export { Overview, SplitButton };
