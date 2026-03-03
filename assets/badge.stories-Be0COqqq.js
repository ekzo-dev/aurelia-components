import{b as n}from"./iframe-CLz03ygk.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"Bootstrap / Components / Badge",component:n,render:()=>({template:`<bs-badge
      variant.bind='variant'
      pill.bind='pill'
    >
      \${content}
    </bs-badge>`}),argTypes:{variant:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark"]},pill:{control:"boolean"},content:{control:"text"}}},t={args:{variant:"primary",pill:!1,content:"NEW"}},a={render:()=>({template:`<button bs-button class="position-relative">
      INBOX
      <bs-badge pill.bind="pill" variant.bind="variant" class="position-absolute top-0 start-100 translate-middle">99+</bs-badge>
    </button>`}),argTypes:{content:{control:!1}},args:{variant:"danger",pill:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    pill: false,
    content: 'NEW'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<button bs-button class="position-relative">
      INBOX
      <bs-badge pill.bind="pill" variant.bind="variant" class="position-absolute top-0 start-100 translate-middle">99+</bs-badge>
    </button>\`
  }),
  argTypes: {
    content: {
      control: false
    }
  },
  args: {
    variant: 'danger',
    pill: false
  }
}`,...a.parameters?.docs?.source}}};const o=["Overview","Positioned"];export{t as Overview,a as Positioned,o as __namedExportsOrder,s as default};
