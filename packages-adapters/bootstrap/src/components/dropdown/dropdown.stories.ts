import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsDropdown, BsDropdownMenu, BsDropdownItem, BsDropdownToggle } from '.';
import { BsIcon } from '../../icon';
import { BsButton } from '../button';
import { BsButtonGroup } from '../button-group';
import { Variants } from '../../interfaces';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

let variants: Array<Variants> = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const meta: Meta = {
  title: 'Bootstrap / Components / Dropdown',
  component: BsDropdownMenu,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdownItem, BsButton, BsDropdownToggle],
  template: `
    <bs-button variant="secondary" bs-dropdown-toggle>Dropdown button</bs-button>
    <bs-dropdown-menu>
      <bs-dropdown-item>Action</bs-dropdown-item>
      <bs-dropdown-item>Another action</bs-dropdown-item>
      <bs-dropdown-item disabled>Disabled action</bs-dropdown-item>
    </bs-dropdown-menu>
  `,
  props: {
    ...args,
  },
});

export const Dark: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdownItem, BsButton, BsDropdownToggle],
  template: `
      <bs-button variant="secondary" bs-dropdown-toggle>Dropdown button</bs-button>
      <bs-dropdown-menu dark.bind="true">
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
         <bs-dropdown-item disabled>Disabled action</bs-dropdown-item>
    </bs-dropdown-menu>
  `,
  props: {
    ...args,
  },
});

export const WithVariantButton: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdownItem, BsButton, BsDropdownToggle, BsIcon, BsButtonGroup],
  template: `
    <bs-button-group repeat.for="variant of variants" class="me-2">
      <bs-button variant.bind="variant" bs-dropdown-toggle>\${variant}</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item type="header">Header</bs-dropdown-item>
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
        <bs-dropdown-item type="divider"></bs-dropdown-item>
        <bs-dropdown-item><bs-icon name="info"></bs-icon>Action with icon</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>
  `,
  props: {
    ...args,
    variants: variants,
  },
});

export const WithSizableButton: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdownItem, BsButton, BsDropdownToggle, BsButtonGroup],
  template: `
    <bs-button-group repeat.for="size of sizes" class="me-2">
      <bs-button size.bind="size" bs-dropdown-toggle>Button \${size ? size : 'default'}</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item type="header">Header</bs-dropdown-item>
        <bs-dropdown-item><bs-icon name="table"></bs-icon> Table</bs-dropdown-item>
        <bs-dropdown-item><bs-icon name="pie-chart"></bs-icon> Pie-chart</bs-dropdown-item>
        <bs-dropdown-item type="divider"></bs-dropdown-item>
        <bs-dropdown-item><bs-icon name="info"></bs-icon> Info</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>
  `,
  props: {
    ...args,
    sizes: ['sm', '', 'lg'],
  },
});

export const WithSplitButton: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdownItem, BsButton, BsDropdownToggle, BsButtonGroup],
  template: `
    <bs-button-group>
      <bs-button>Split Button</bs-button>
      <bs-button bs-dropdown-toggle="split.bind: true">
        <span class="visually-hidden">Toggle Dropdown</span>
      </bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
        <bs-dropdown-item>Something else here</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>
  `,
  props: {
    ...args,
  },
});

export const NavBar: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdownItem, BsButton, BsDropdownToggle, BsDropdown, BsButtonGroup],
  template: `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
    <div bs-dropdown>
          <bs-button variant="secondary" bs-dropdown-toggle>Dropdown button</bs-button>
          <bs-dropdown dark="true">
            <bs-dropdown-item>Action</bs-dropdown-item>
            <bs-dropdown-item>Another action</bs-dropdown-item>
            <bs-dropdown-item>Something else here</bs-dropdown-item>
        </bs-dropdown-menu>
    </div>
</nav>
  `,
  props: {
    ...args,
  },
});
