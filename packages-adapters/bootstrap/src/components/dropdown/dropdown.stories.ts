import { BsDropdownMenu } from '.';

const directionOptions = ['down', 'up', 'end', 'start'];
const displayOptions = ['dynamic', 'static'];
const alignOptions = ['end', 'sm-start', 'md-start', 'lg-start', 'xl-start', 'xxl-start'];

const meta = {
  title: 'Bootstrap / Components / Dropdown',
  component: BsDropdownMenu,
  render: () => ({
    template: `<div bs-dropdown="direction.bind: direction; center.bind: center">
  <button bs-button bs-dropdown-toggle>Dropdown button</button>
  <bs-dropdown-menu align.bind="align" display.bind="display" dark.bind="dark">
    <a bs-dropdown-item>Action</a>
    <a bs-dropdown-item>Another action</a>
    <a bs-dropdown-item="disabled.bind: true">Disabled action</a>
  </bs-dropdown-menu>
</div>`,
  }),
  parameters: {
    actions: {
      handles: ['hide.bs.dropdown', 'hidden.bs.dropdown', 'show.bs.dropdown', 'shown.bs.dropdown'],
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: directionOptions,
    },
    center: { control: 'boolean' },
    align: {
      control: 'select',
      options: alignOptions,
    },
    display: {
      control: 'select',
      options: displayOptions,
    },
    dark: { control: 'boolean' },
  },
};

export default meta;

export const Overview = {
  args: {
    direction: 'down',
    center: false,
    align: undefined,
    display: undefined,
    dark: false,
  },
};

export const SplitButton = {
  render: () => ({
    template: `<div bs-dropdown="direction.bind: direction; center.bind: center">
  <bs-button-group>
    <button bs-button>Split Button</button>
    <button bs-button bs-dropdown-toggle="split.bind: true">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
  <bs-dropdown-menu align.bind="align" display.bind="display" dark.bind="dark">
      <a bs-dropdown-item>Action</a>
      <a bs-dropdown-item>Another action</a>
      <a bs-dropdown-item>Something else here</a>
    </bs-dropdown-menu>
  </bs-button-group>
</div>`,
  }),
  args: {
    direction: 'down',
    center: false,
    align: undefined,
    display: undefined,
    dark: false,
  },
};
