import{S as e,d as s}from"./iframe-CLz03ygk.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Bootstrap / Components / Button group",component:s,render:()=>({template:`<bs-button-group size.bind="size" vertical.bind="vertical">
  <button bs-button>Left</button>
  <button bs-button>Middle</button>
  <button bs-button>Right</button>
</bs-button-group>`}),argTypes:{size:{control:"select",options:["",...e]},vertical:{control:"boolean"}}},t={args:{size:"",vertical:!1}},n={render:()=>({template:`<bs-button-group size.bind="size" vertical.bind="vertical">
  <button bs-button="danger">Left</button>
  <button bs-button="warning">Middle</button>
  <button bs-button="success">Right</button>
</bs-button-group>`}),args:{size:"",vertical:!1}},o={render:()=>({template:`<div>
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
</div>`}),args:{size:"",vertical:!1}},b={render:()=>({template:`<bs-button-group size.bind="size" vertical.bind="vertical">
  <button bs-button>1</button>
  <button bs-button>2</button>
  <bs-button-group size.bind="size" bs-dropdown>
    <button bs-button bs-dropdown-toggle>Dropdown</button>
    <bs-dropdown-menu>
      <a bs-dropdown-item>Dropdown link</a>
      <a bs-dropdown-item>Dropdown link</a>
    </bs-dropdown-menu>
  </bs-button-group>
</bs-button-group>`}),args:{size:"",vertical:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: '',
    vertical: false
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<bs-button-group size.bind="size" vertical.bind="vertical">
  <button bs-button="danger">Left</button>
  <button bs-button="warning">Middle</button>
  <button bs-button="success">Right</button>
</bs-button-group>\`
  }),
  args: {
    size: '',
    vertical: false
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div>
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
</div>\`
  }),
  args: {
    size: '',
    vertical: false
  }
}`,...o.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<bs-button-group size.bind="size" vertical.bind="vertical">
  <button bs-button>1</button>
  <button bs-button>2</button>
  <bs-button-group size.bind="size" bs-dropdown>
    <button bs-button bs-dropdown-toggle>Dropdown</button>
    <bs-dropdown-menu>
      <a bs-dropdown-item>Dropdown link</a>
      <a bs-dropdown-item>Dropdown link</a>
    </bs-dropdown-menu>
  </bs-button-group>
</bs-button-group>\`
  }),
  args: {
    size: '',
    vertical: false
  }
}`,...b.parameters?.docs?.source}}};const a=["Overview","MixedStyles","ButtonToolbar","Nesting"];export{o as ButtonToolbar,n as MixedStyles,b as Nesting,t as Overview,a as __namedExportsOrder,i as default};
