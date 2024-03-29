import { createComponentTemplate, Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { BsDropdown, BsDropdownItem, BsDropdownMenu, BsDropdownToggle } from '../dropdown';

import { BsNav, BsNavItem, BsNavLink, BsTabContent, BsTabPane } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Nav',
  component: BsNav,
  parameters: {
    actions: {
      handles: ['hide.bs.tab', 'hidden.bs.tab', 'show.bs.tab', 'shown.bs.tab'],
    },
  },
  argTypes: {
    type: selectControl(['', 'tabs', 'pills']),
    fill: selectControl(['', 'fill', 'justified']),
  },
};

export default meta;

const BaseNav: Story = (args): StoryFnAureliaReturnType => ({
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

const UsingDropdowns: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsNavItem, BsNavLink, BsDropdown, BsDropdownMenu, BsDropdownToggle, BsDropdownItem],
  innerHtml: `
  <bs-nav-item>
    <a href="#" bs-nav-link="active.bind: true">Active</a>
  </bs-nav-item>
  <bs-nav-item bs-dropdown>
    <a href="#" bs-nav-link bs-dropdown-toggle>Dropdown</a>
    <bs-dropdown-menu>
      <a bs-dropdown-item>Action</a>
      <a bs-dropdown-item>Another action</a>
      <a bs-dropdown-item>Something else here</a>
      <hr bs-dropdown-item="divider">
      <a bs-dropdown-item>Separated link</a>
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

const TabsWithContent: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsNavItem, BsNavLink, BsTabContent, BsTabPane],
  template: `${createComponentTemplate(
    BsNav,
    `
  <bs-nav-item>
    <button bs-nav-link="active.bind: true" id="home-tab">Home</button>
  </bs-nav-item>
  <bs-nav-item>
    <button bs-nav-link id="profile-tab">Profile</button>
  </bs-nav-item>
  <bs-nav-item>
    <button bs-nav-link id="contact-tab">Contact</button>
  </bs-nav-item>
  <bs-nav-item>
    <button bs-nav-link="disabled.bind: true" id="disabled-tab">Disabled</button>
  </bs-nav-item>
`
  )}
<div bs-tab-content style="margin-top: 1rem">
  <div bs-tab-pane="home-tab">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="profile-tab">This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="contact-tab">This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="disabled-tab"></div>
</div>`,
  props: args,
});

TabsWithContent.args = {
  type: 'tabs',
};

export { BaseNav, TabsWithContent, UsingDropdowns };
