import { Meta, Story, createComponentTemplate, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsNavbar, BsNavbarNav, BsNavbarBrand, BsNavbarText, BsNavbarToggler } from '.';
import { BsNavItem, BsNavLink } from '../nav';
import { BsDropdown, BsDropdownItem, BsDropdownMenu, BsDropdownToggle } from '../dropdown';
import { BsInput } from '../../forms';
import { BsButton } from '../button';
import { BsCollapse } from '../collapse';
import { selectControl } from '../../../../../.storybook/helpers';
import { BREAKPOINTS } from '../../constants';

const meta: Meta = {
  title: 'Bootstrap / Components / Navbar',
  component: BsNavbar,
  argTypes: {
    expand: selectControl(BREAKPOINTS),
  },
};
export default meta;

const SupportedContent: Story = (args): StoryFnAureliaReturnType => ({
  components: [
    BsNavbarBrand,
    BsNavbarNav,
    BsNavbarToggler,
    BsNavItem,
    BsNavLink,
    BsInput,
    BsButton,
    BsCollapse,
    BsDropdown,
    BsDropdownToggle,
    BsDropdownItem,
    BsDropdownMenu,
  ],
  innerHtml: `
  <a bs-navbar-brand href="#">Navbar</a>
  <bs-navbar-toggler click.trigger="collapsed = !collapsed"></bs-navbar-toggler>
  <bs-collapse collapsed.bind="collapsed" class="navbar-collapse">
    <bs-navbar-nav class="me-auto mb-2 mb-lg-0">
      <bs-nav-item>
        <a bs-nav-link="active.bind: true" href="#">Home</a>
      </bs-nav-item>
      <bs-nav-item>
        <a bs-nav-link href="#">Link</a>
      </bs-nav-item>
      <bs-nav-item bs-dropdown>
        <a bs-nav-link bs-dropdown-toggle href="#">Dropdown</a>
        <bs-dropdown-menu>
          <bs-dropdown-item>Action</bs-dropdown-item>
          <bs-dropdown-item>Another action</bs-dropdown-item>
          <bs-dropdown-item type="divider"></bs-dropdown-item>
          <bs-dropdown-item>Something else here</bs-dropdown-item>
        </bs-dropdown-menu>
      </bs-nav-item>
      <bs-nav-item>
        <a bs-nav-link disabled>Disabled</a>
      </bs-nav-item>
    </bs-navbar-nav>
    <form class="d-flex" role="search">
      <bs-input type="search" placeholder="Search" class="me-2"></bs-input>
      <bs-button variant="outline-success" type="submit">Search</bs-button>
    </form>
  </bs-collapse>
  `,
  props: args,
});

export { SupportedContent };
