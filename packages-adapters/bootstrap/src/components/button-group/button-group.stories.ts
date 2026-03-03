import './button-group.stories.scss';

import { SIZES } from '../../constants';

import { BsButtonGroup } from '.';

const meta = {
  title: 'Bootstrap / Components / Button group',
  component: BsButtonGroup,
  render: () => ({
    template: `<bs-button-group size.bind="size" vertical.bind="vertical">
  <button bs-button>Left</button>
  <button bs-button>Middle</button>
  <button bs-button>Right</button>
</bs-button-group>`,
  }),
  argTypes: {
    size: {
      control: 'select',
      options: ['', ...SIZES],
    },
    vertical: { control: 'boolean' },
  },
};

export default meta;

export const Overview = {
  args: {
    size: '',
    vertical: false,
  },
};

export const MixedStyles = {
  render: () => ({
    template: `<bs-button-group size.bind="size" vertical.bind="vertical">
  <button bs-button="danger">Left</button>
  <button bs-button="warning">Middle</button>
  <button bs-button="success">Right</button>
</bs-button-group>`,
  }),
  args: {
    size: '',
    vertical: false,
  },
};

export const ButtonToolbar = {
  render: () => ({
    template: `<div>
<bs-button-group class="me-2" vertical.bind="vertical" size.bind="size">
  <button bs-button>1</button>
  <button bs-button>2</button>
  <button bs-button>3</button>
  <button bs-button>4</button>
</bs-button-group>

<bs-button-group class="me-2" vertical.bind="vertical" size.bind="size">
  <button bs-button="secondary">5</button>
  <button bs-button="secondary">6</button>
  <button bs-button="secondary">7</button>
</bs-button-group>

<bs-button-group vertical.bind="vertical" size.bind="size">
  <button bs-button="info">8</button>
</bs-button-group>
</div>`,
  }),
  args: {
    size: '',
    vertical: false,
  },
};

export const Nesting = {
  render: () => ({
    template: `<bs-button-group size.bind="size" vertical.bind="vertical">
  <button bs-button>1</button>
  <button bs-button>2</button>
  <bs-button-group size.bind="size" bs-dropdown>
    <button bs-button bs-dropdown-toggle>Dropdown</button>
    <bs-dropdown-menu>
      <a bs-dropdown-item>Dropdown link</a>
      <a bs-dropdown-item>Dropdown link</a>
    </bs-dropdown-menu>
  </bs-button-group>
</bs-button-group>`,
  }),
  args: {
    size: '',
    vertical: false,
  },
};
