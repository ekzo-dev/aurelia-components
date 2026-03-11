import{n as a}from"./iframe-CQr_Z5xa.js";import"./preload-helper-PPVm8Dsz.js";const o={title:"Bootstrap / Components / Nav",component:a,render:()=>({template:`<ul bs-nav="type.bind: type; fill.bind: fill">
  <li bs-nav-item>
    <a href="#" bs-nav-link="active.bind: true">Active</a>
  </li>
  <li bs-nav-item>
    <a href="#" bs-nav-link>Link</a>
  </li>
  <li bs-nav-item>
    <a href="#" bs-nav-link>Link</a>
  </li>
  <li bs-nav-item>
    <a href="#" bs-nav-link="disabled.bind: true">Disabled</a>
  </li>
</ul>`}),parameters:{actions:{handles:["hide.bs.tab","hidden.bs.tab","show.bs.tab","shown.bs.tab"]}},argTypes:{type:{control:"select",options:["","tabs","pills"]},fill:{control:"select",options:["","fill","justified"]}}},t={args:{type:"",fill:""}},i={render:()=>({template:`<ul bs-nav="type.bind: type; fill.bind: fill">
  <li bs-nav-item>
    <a href="#" bs-nav-link="active.bind: true">Active</a>
  </li>
  <li bs-nav-item bs-dropdown>
    <a href="#" bs-nav-link bs-dropdown-toggle>Dropdown</a>
    <bs-dropdown-menu>
      <a bs-dropdown-item>Action</a>
      <a bs-dropdown-item>Another action</a>
      <a bs-dropdown-item>Something else here</a>
      <hr bs-dropdown-item="divider">
      <a bs-dropdown-item>Separated link</a>
    </bs-dropdown-menu>
  </li>
  <li bs-nav-item>
    <a href="#" bs-nav-link>Link</a>
  </li>
  <li bs-nav-item>
    <a href="#" bs-nav-link="disabled.bind: true">Disabled</a>
  </li>
</ul>`}),args:{type:"tabs",fill:""}},e={render:()=>({template:`<div>
<ul bs-nav="type.bind: type; fill.bind: fill">
  <li bs-nav-item>
    <button bs-nav-link="active.bind: true" id="home-tab">Home</button>
  </li>
  <li bs-nav-item>
    <button bs-nav-link id="profile-tab">Profile</button>
  </li>
  <li bs-nav-item>
    <button bs-nav-link id="contact-tab">Contact</button>
  </li>
  <li bs-nav-item>
    <button bs-nav-link="disabled.bind: true" id="disabled-tab">Disabled</button>
  </li>
</ul>
<div bs-tab-content style="margin-top: 1rem">
  <div bs-tab-pane="home-tab">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="profile-tab">This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="contact-tab">This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="disabled-tab"></div>
</div>
</div>`}),args:{type:"tabs",fill:""}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: '',
    fill: ''
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<ul bs-nav="type.bind: type; fill.bind: fill">
  <li bs-nav-item>
    <a href="#" bs-nav-link="active.bind: true">Active</a>
  </li>
  <li bs-nav-item bs-dropdown>
    <a href="#" bs-nav-link bs-dropdown-toggle>Dropdown</a>
    <bs-dropdown-menu>
      <a bs-dropdown-item>Action</a>
      <a bs-dropdown-item>Another action</a>
      <a bs-dropdown-item>Something else here</a>
      <hr bs-dropdown-item="divider">
      <a bs-dropdown-item>Separated link</a>
    </bs-dropdown-menu>
  </li>
  <li bs-nav-item>
    <a href="#" bs-nav-link>Link</a>
  </li>
  <li bs-nav-item>
    <a href="#" bs-nav-link="disabled.bind: true">Disabled</a>
  </li>
</ul>\`
  }),
  args: {
    type: 'tabs',
    fill: ''
  }
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div>
<ul bs-nav="type.bind: type; fill.bind: fill">
  <li bs-nav-item>
    <button bs-nav-link="active.bind: true" id="home-tab">Home</button>
  </li>
  <li bs-nav-item>
    <button bs-nav-link id="profile-tab">Profile</button>
  </li>
  <li bs-nav-item>
    <button bs-nav-link id="contact-tab">Contact</button>
  </li>
  <li bs-nav-item>
    <button bs-nav-link="disabled.bind: true" id="disabled-tab">Disabled</button>
  </li>
</ul>
<div bs-tab-content style="margin-top: 1rem">
  <div bs-tab-pane="home-tab">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="profile-tab">This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="contact-tab">This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
  <div bs-tab-pane="disabled-tab"></div>
</div>
</div>\`
  }),
  args: {
    type: 'tabs',
    fill: ''
  }
}`,...e.parameters?.docs?.source}}};const l=["BaseNav","UsingDropdowns","TabsWithContent"];export{t as BaseNav,e as TabsWithContent,i as UsingDropdowns,l as __namedExportsOrder,o as default};
