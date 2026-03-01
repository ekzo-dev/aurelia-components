import { BsNav } from '.';

const meta = {
  title: 'Bootstrap / Components / Nav',
  component: BsNav,
  render: () => ({
    template: `<ul bs-nav="type.bind: type; fill.bind: fill">
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
</ul>`,
  }),
  parameters: {
    actions: {
      handles: ['hide.bs.tab', 'hidden.bs.tab', 'show.bs.tab', 'shown.bs.tab'],
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['', 'tabs', 'pills'],
    },
    fill: {
      control: 'select',
      options: ['', 'fill', 'justified'],
    },
  },
};

export default meta;

export const BaseNav = {
  args: {
    type: '',
    fill: '',
  },
};

export const UsingDropdowns = {
  render: () => ({
    template: `<ul bs-nav="type.bind: type; fill.bind: fill">
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
</ul>`,
  }),
  args: {
    type: 'tabs',
    fill: '',
  },
};

export const TabsWithContent = {
  render: () => ({
    template: `<div>
<ul bs-nav="type.bind: type; fill.bind: fill">
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
</ul>
<div bs-tab-content style="margin-top: 1rem">
  <div bs-tab-pane="home-tab">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="profile-tab">This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="contact-tab">This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="disabled-tab"></div>
</div>
</div>`,
  }),
  args: {
    type: 'tabs',
    fill: '',
  },
};
