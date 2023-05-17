import { Meta, Story, StoryFnAureliaReturnType, extractArgTypes } from '@storybook/aurelia';
import { BsNavbar, BsNavbarNav, BsNavbarBrand, BsNavbarText, BsNavbarToggler } from '.';
import { BsNavItem, BsNavLink } from '../nav';
import { BsDropdown, BsDropdownItem, BsDropdownMenu, BsDropdownToggle } from '../dropdown';
import { BsInput } from '../../forms';
import { BsButton } from '../button';
import { BsCollapse } from '../collapse';
import { BsOffcanvas } from '../offcanvas';
import { disableControl, selectControl } from '../../../../../.storybook/helpers';
import { BREAKPOINTS, VARIANTS } from '../../constants';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const form = (variant = 'success') => `
  <form class="d-flex" role="search">
    <bs-input type="search" placeholder="Search" class="me-2"></bs-input>
    <button bs-button="outline-${variant}" type="button">Search</button>
  </form>
`;

const dropdown = () => `
      <bs-nav-item bs-dropdown>
        <a bs-nav-link bs-dropdown-toggle href="#">Dropdown</a>
        <bs-dropdown-menu>
          <bs-dropdown-item>Action</bs-dropdown-item>
          <bs-dropdown-item>Another action</bs-dropdown-item>
          <bs-dropdown-item type="divider"></bs-dropdown-item>
          <bs-dropdown-item>Something else here</bs-dropdown-item>
        </bs-dropdown-menu>
      </bs-nav-item>
`;

const meta: Meta = {
  title: 'Bootstrap / Components / Navbar',
  component: BsNavbar,
  argTypes: {
    expand: selectControl(['', ...BREAKPOINTS, 'always']),
  },
  args: {
    expand: 'lg',
  },
};
export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
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
  template: `
<bs-navbar expand.bind="expand" dark.bind="dark" class="bg-light">
  <a bs-navbar-brand href="#">Navbar</a>
  <bs-navbar-toggler target="#navbarTogglerDemo01"></bs-navbar-toggler>
  <bs-collapse id="navbarTogglerDemo01">
    <bs-navbar-nav class="me-auto mb-2 mb-lg-0" scroll.bind="scroll">
      <bs-nav-item>
        <a bs-nav-link="active: true" href="#">Home</a>
      </bs-nav-item>
      <bs-nav-item>
        <a bs-nav-link href="#">Link</a>
      </bs-nav-item>
      ${dropdown()}
      <bs-nav-item>
        <a bs-nav-link="disabled: true">Disabled</a>
      </bs-nav-item>
    </bs-navbar-nav>
    ${form('success')}
  </bs-collapse>
</bs-navbar>
  `,
  props: args,
});
Overview.argTypes = extractArgTypes(BsNavbarNav);

const ColorSchemes: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsNavbarBrand, BsNavbarNav, BsNavLink, BsInput, BsButton],
  template: `
<bs-navbar expand.bind="expand" dark.bind="dark" class="bg-\${background}">
  <a bs-navbar-brand href="#">Navbar</a>
  <bs-navbar-nav class="me-auto mb-2 mb-lg-0">
    <a bs-nav-link="active: true" href="#">Home</a>
    <a bs-nav-link href="#">Features</a>
    <a bs-nav-link href="#">Pricing</a>
    <a bs-nav-link href="#">About</a>
  </bs-navbar-nav>
  ${form('light')}
</bs-navbar>
  `,
  props: args,
});
ColorSchemes.args = {
  background: 'dark',
  dark: true,
};
ColorSchemes.argTypes = {
  background: {
    ...selectControl(VARIANTS),
    table: {
      category: 'Story controls',
    },
  },
};

const Text: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsNavbarText],
  template: `
<bs-navbar expand.bind="expand" dark.bind="dark" class="bg-light">
  <span bs-navbar-text>Navbar text with an inline element</span>
</bs-navbar>
  `,
  props: args,
});

const Offcanvas: Story = (args): StoryFnAureliaReturnType => ({
  components: [
    BsNavbarBrand,
    BsNavbarNav,
    BsNavbarToggler,
    BsNavItem,
    BsNavLink,
    BsInput,
    BsButton,
    BsOffcanvas,
    BsDropdown,
    BsDropdownToggle,
    BsDropdownItem,
    BsDropdownMenu,
  ],
  template: `
<bs-navbar dark.bind="dark" class="bg-light fixed-top">
  <a bs-navbar-brand href="#">Offcanvas navbar</a>
  <bs-navbar-toggler target="#offcanvasNavbar"></bs-navbar-toggler>
  <bs-offcanvas id="offcanvasNavbar" title="Offcanvas" placement="end">
    <bs-navbar-nav class="justify-content-end flex-grow-1 pe-3 mb-3">
      <bs-nav-item>
        <a bs-nav-link="active: true" href="#">Home</a>
      </bs-nav-item>
      <bs-nav-item>
        <a bs-nav-link href="#">Link</a>
      </bs-nav-item>
      ${dropdown()}
    </bs-navbar-nav>
    ${form('success')}
  </bs-offcanvas>
</bs-navbar>
  `,
  props: args,
});
Offcanvas.argTypes = {
  expand: disableControl,
};

export { Overview, ColorSchemes, Text, Offcanvas };
