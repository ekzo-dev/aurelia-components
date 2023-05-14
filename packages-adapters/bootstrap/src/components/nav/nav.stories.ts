import { Meta, Story } from '@storybook/aurelia';
import { BsNav, BsNavItem, BsNavLink } from '.';
import { BsDropdown, BsDropdownItem, BsDropdownMenu, BsDropdownToggle } from '../dropdown';
import { selectControl } from '../../../../../.storybook/helpers';

const meta: Meta = {
  title: 'Bootstrap / Components / Nav',
  component: BsNav,
  argTypes: {
    type: selectControl(['', 'tabs', 'pills']),
    fill: selectControl(['', 'fill', 'justified']),
  },
};
export default meta;

const BaseNav: Story = (args) => ({
  components: [BsNavItem, BsNavLink],
  innerHtml: `
  <bs-nav-item>
    <a href="#" bs-nav-link="active.bind: true">Active</a>
  </bs-nav-item>
  <bs-nav-item>
    <a href="#" bs-nav-link>Link</a>
  </bs-nav-item>
  <bs-nav-item>
    <a href="#" bs-nav-link>Link</a>
  </bs-nav-item>
  <bs-nav-item>
    <a href="#" bs-nav-link="disabled.bind: true">Disabled</a>
  </bs-nav-item>
`,
  props: args,
});

const UsingDropdowns: Story = (args) => ({
  components: [BsNavItem, BsNavLink, BsDropdown, BsDropdownMenu, BsDropdownToggle, BsDropdownItem],
  innerHtml: `
  <bs-nav-item>
    <a href="#" bs-nav-link="active.bind: true">Active</a>
  </bs-nav-item>
  <bs-nav-item bs-dropdown>
    <a href="#" bs-nav-link bs-dropdown-toggle>Dropdown</a>
    <bs-dropdown-menu>
      <bs-dropdown-item>Action</bs-dropdown-item>
      <bs-dropdown-item>Another action</bs-dropdown-item>
      <bs-dropdown-item>Something else here</bs-dropdown-item>
      <bs-dropdown-item type="divider"></bs-dropdown-item>
      <bs-dropdown-item>Separated link</bs-dropdown-item>
    </bs-dropdown-menu>
  </bs-nav-item>
  <bs-nav-item>
    <a href="#" bs-nav-link>Link</a>
  </bs-nav-item>
  <bs-nav-item>
    <a href="#" bs-nav-link="disabled.bind: true">Disabled</a>
  </bs-nav-item>
`,
  props: args,
});
UsingDropdowns.args = {
  type: 'tabs',
};

export { BaseNav, UsingDropdowns };
