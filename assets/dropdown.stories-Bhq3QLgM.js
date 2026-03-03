import{j as t}from"./iframe-Ur3dRF5-.js";import"./preload-helper-PPVm8Dsz.js";const d=["down","up","end","start"],e=["dynamic","static"],r=["end","sm-start","md-start","lg-start","xl-start","xxl-start"],a={title:"Bootstrap / Components / Dropdown",component:t,render:()=>({template:`<div bs-dropdown="direction.bind: direction; center.bind: center">
  <button bs-button bs-dropdown-toggle>Dropdown button</button>
  <bs-dropdown-menu align.bind="align" display.bind="display" dark.bind="dark">
    <a bs-dropdown-item>Action</a>
    <a bs-dropdown-item>Another action</a>
    <a bs-dropdown-item="disabled.bind: true">Disabled action</a>
  </bs-dropdown-menu>
</div>`}),parameters:{actions:{handles:["hide.bs.dropdown","hidden.bs.dropdown","show.bs.dropdown","shown.bs.dropdown"]}},argTypes:{direction:{control:"select",options:d},center:{control:"boolean"},align:{control:"select",options:r},display:{control:"select",options:e},dark:{control:"boolean"}}},n={args:{direction:"down",center:!1,align:void 0,display:void 0,dark:!1}},o={render:()=>({template:`<div bs-dropdown="direction.bind: direction; center.bind: center">
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
</div>`}),args:{direction:"down",center:!1,align:void 0,display:void 0,dark:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'down',
    center: false,
    align: undefined,
    display: undefined,
    dark: false
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div bs-dropdown="direction.bind: direction; center.bind: center">
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
</div>\`
  }),
  args: {
    direction: 'down',
    center: false,
    align: undefined,
    display: undefined,
    dark: false
  }
}`,...o.parameters?.docs?.source}}};const p=["Overview","SplitButton"];export{n as Overview,o as SplitButton,p as __namedExportsOrder,a as default};
