import{z as t}from"./iframe-CLz03ygk.js";import"./preload-helper-PPVm8Dsz.js";const o={title:"Bootstrap / Components / Spinner",component:t,render:()=>({template:'<bs-spinner type.bind="type" size.bind="size"></bs-spinner>'}),argTypes:{type:{control:"select",options:["border","grow"]},size:{control:"select",options:["","sm"]}}},e={args:{type:"border",size:""}},s={render:()=>({template:`<div>
<button bs-button disabled>
  <bs-spinner type.bind="type" size.bind="size"></bs-spinner>
</button>
<button bs-button disabled>
  <bs-spinner type.bind="type" size.bind="size"></bs-spinner> Loading...
</button>
</div>`}),args:{type:"border",size:"sm"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'border',
    size: ''
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div>
<button bs-button disabled>
  <bs-spinner type.bind="type" size.bind="size"></bs-spinner>
</button>
<button bs-button disabled>
  <bs-spinner type.bind="type" size.bind="size"></bs-spinner> Loading...
</button>
</div>\`
  }),
  args: {
    type: 'border',
    size: 'sm'
  }
}`,...s.parameters?.docs?.source}}};const i=["Overview","Buttons"];export{s as Buttons,e as Overview,i as __namedExportsOrder,o as default};
