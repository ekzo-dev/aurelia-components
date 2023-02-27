import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsDropdown, BsDropdownMenu, BsDropdownItem, BsDropdownToggle } from '.';
import { BsIcon } from '../../icon';
import { BsButton } from '../button';
import { BsButtonGroup } from '../button-group';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

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
  props: args,
});

export const DarkExample: Story = (args): StoryFnAureliaReturnType => ({
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

export const variantColorsExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdownItem, BsButton, BsDropdownToggle, BsIcon, BsButtonGroup],
  template: `
    <bs-button-group class="me-2">
      <bs-button variant="primary" bs-dropdown-toggle>Primary</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
        <bs-dropdown-item>Something else here</bs-dropdown-item>
        <bs-dropdown-item type="divider"></bs-dropdown-item>
        <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>

    <bs-button-group class="me-2">
      <bs-button variant="secondary" bs-dropdown-toggle>Secondary</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
        <bs-dropdown-item>Something else here</bs-dropdown-item>
        <bs-dropdown-item type="divider"></bs-dropdown-item>
        <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>

    <bs-button-group class="me-2">
      <bs-button variant="success" bs-dropdown-toggle>Success</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
        <bs-dropdown-item>Something else here</bs-dropdown-item>
        <bs-dropdown-item type="divider"></bs-dropdown-item>
        <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>

    <bs-button-group class="me-2">
      <bs-button variant="info" bs-dropdown-toggle>Info</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
        <bs-dropdown-item>Something else here</bs-dropdown-item>
        <bs-dropdown-item type="divider"></bs-dropdown-item>
        <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>

    <bs-button-group class="me-2">
      <bs-button variant="warning" bs-dropdown-toggle>Warning</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
        <bs-dropdown-item>Something else here</bs-dropdown-item>
        <bs-dropdown-item type="divider"></bs-dropdown-item>
        <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>

    <bs-button-group class="me-2">
      <bs-button variant="danger" bs-dropdown-toggle>Danger</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
        <bs-dropdown-item>Something else here</bs-dropdown-item>
        <bs-dropdown-item type="divider"></bs-dropdown-item>
        <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>
  `,
  props: args,
});

export const WithSizableButton: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsDropdownItem, BsButton, BsDropdownToggle, BsButtonGroup],
  template: `
    <bs-button-group class="me-2">
      <bs-button size="sm" bs-dropdown-toggle>Button sm</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
        <bs-dropdown-item>Something else here</bs-dropdown-item>
        <bs-dropdown-item type="divider"></bs-dropdown-item>
        <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>

    <bs-button-group class="me-2">
      <bs-button bs-dropdown-toggle>Button default</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
        <bs-dropdown-item>Something else here</bs-dropdown-item>
        <bs-dropdown-item type="divider"></bs-dropdown-item>
        <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>

    <bs-button-group class="me-2">
      <bs-button size="lg" bs-dropdown-toggle>Button lg</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Action</bs-dropdown-item>
        <bs-dropdown-item>Another action</bs-dropdown-item>
        <bs-dropdown-item>Something else here</bs-dropdown-item>
        <bs-dropdown-item type="divider"></bs-dropdown-item>
        <bs-dropdown-item>Separated link with icon</bs-dropdown-item>
      </bs-dropdown-menu>
    </bs-button-group>
  `,
  props: {
    ...args,
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
  props: args,
});
