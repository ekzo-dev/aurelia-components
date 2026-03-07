import{k as i,l as o}from"./iframe-Bxd6yq2z.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"Bootstrap / Components / List group",component:o,render:()=>({template:`<ul bs-list-group="horizontal.bind: horizontal; flush.bind: flush; numbered.bind: numbered">
  <li bs-list-group-item="active: true">An item</li>
  <li bs-list-group-item>A second item</li>
  <li bs-list-group-item>A third item</li>
  <li bs-list-group-item>A fourth item</li>
  <li bs-list-group-item="disabled: true">And a fifth one</li>
</ul>`}),argTypes:{horizontal:{control:"select",options:["","always",...i]},flush:{control:"boolean"},numbered:{control:"boolean"}}},t={args:{horizontal:"",flush:!1,numbered:!1}},e={render:()=>({template:`<div bs-list-group="horizontal.bind: horizontal; flush.bind: flush; numbered.bind: numbered">
  <a bs-list-group-item="active: true; action: true" href="javascript: void(0)">An item</a>
  <a bs-list-group-item="action: true" href="javascript: void(0)">A second item</a>
  <button bs-list-group-item="action: true">A third item</button>
  <button bs-list-group-item="action: true">A fourth item</button>
  <button bs-list-group-item="disabled: true; action: true">And a fifth one</button>
</div>`}),args:{horizontal:"",flush:!1,numbered:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: '',
    flush: false,
    numbered: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div bs-list-group="horizontal.bind: horizontal; flush.bind: flush; numbered.bind: numbered">
  <a bs-list-group-item="active: true; action: true" href="javascript: void(0)">An item</a>
  <a bs-list-group-item="action: true" href="javascript: void(0)">A second item</a>
  <button bs-list-group-item="action: true">A third item</button>
  <button bs-list-group-item="action: true">A fourth item</button>
  <button bs-list-group-item="disabled: true; action: true">And a fifth one</button>
</div>\`
  }),
  args: {
    horizontal: '',
    flush: false,
    numbered: false
  }
}`,...e.parameters?.docs?.source}}};const a=["Overview","LinksAndButtons"];export{e as LinksAndButtons,t as Overview,a as __namedExportsOrder,s as default};
