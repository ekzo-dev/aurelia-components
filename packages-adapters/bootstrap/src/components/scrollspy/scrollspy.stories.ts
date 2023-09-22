import { Meta, Story, StoryFnAureliaReturnType, createComponentTemplate } from '@storybook/aurelia';
import { BsScrollspy } from '.';
import { BsNavbar, BsNavbarBrand } from '../navbar';
import { BsNav, BsNavItem, BsNavLink } from '../nav';
import { BsDropdownToggle, BsDropdown, BsDropdownItem, BsDropdownMenu } from '../dropdown';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const meta: Meta = {
  title: 'Bootstrap / Components / ScrollSpy',
  component: BsScrollspy,
  args: {
    target: 'navbar-example2',
  },
};
export default meta;

const Navbar: Story = (args): StoryFnAureliaReturnType => ({
  components: [
    BsNavbar,
    BsNavbarBrand,
    BsNav,
    BsNavItem,
    BsNavLink,
    BsDropdownItem,
    BsDropdown,
    BsDropdownToggle,
    BsDropdownMenu,
  ],
  template: `
<bs-navbar id="navbar-example2" class="px-3 mb-3 bg-light">
  <a bs-navbar-brand href="#">Navbar</a>
  <bs-nav type="pills">
    <a bs-nav-link href="#scrollspyHeading1">First</a>
    <a bs-nav-link href="#scrollspyHeading2">Second</a>
    <bs-nav-item bs-dropdown>
      <a bs-nav-link bs-dropdown-toggle href="#">Dropdown</a>
      <bs-dropdown-menu>
        <a bs-dropdown-item href="#scrollspyHeading3">Third</a>
        <a bs-dropdown-item href="#scrollspyHeading4">Fourth</a>
        <hr bs-dropdown-item="divider">
        <a bs-dropdown-item href="#scrollspyHeading5">Fifth</a>
      </bs-dropdown-menu>
    </bs-nav-item>
  </bs-nav>
</bs-navbar>

<div ${createComponentTemplate(
    BsScrollspy
  )} class="bg-light p-3 rounded-2" tabindex="0" style="height: 200px; overflow: auto; margin-top: .5rem;">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
</div>
  `,
  props: args,
});

export { Navbar };
