import{q as n}from"./iframe-kM6Dcy22.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"Bootstrap / Components / Pagination",component:n,render:()=>({template:`<bs-pagination size.bind="size">
  <bs-pagination-item>Previous</bs-pagination-item>
  <bs-pagination-item>1</bs-pagination-item>
  <bs-pagination-item>2</bs-pagination-item>
  <bs-pagination-item>3</bs-pagination-item>
  <bs-pagination-item>Next</bs-pagination-item>
</bs-pagination>`}),argTypes:{size:{control:"select",options:["","sm","lg"]}}},i={args:{size:""}},a={render:()=>({template:`<bs-pagination size.bind="size">
  <bs-pagination-item disabled>Previous</bs-pagination-item>
  <bs-pagination-item>1</bs-pagination-item>
  <bs-pagination-item active>2</bs-pagination-item>
  <bs-pagination-item>3</bs-pagination-item>
  <bs-pagination-item>Next</bs-pagination-item>
</bs-pagination>`}),args:{size:""}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: ''
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<bs-pagination size.bind="size">
  <bs-pagination-item disabled>Previous</bs-pagination-item>
  <bs-pagination-item>1</bs-pagination-item>
  <bs-pagination-item active>2</bs-pagination-item>
  <bs-pagination-item>3</bs-pagination-item>
  <bs-pagination-item>Next</bs-pagination-item>
</bs-pagination>\`
  }),
  args: {
    size: ''
  }
}`,...a.parameters?.docs?.source}}};const o=["Overview","DisabledAndActiveStates"];export{a as DisabledAndActiveStates,i as Overview,o as __namedExportsOrder,s as default};
