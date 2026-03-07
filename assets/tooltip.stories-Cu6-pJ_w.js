import{T as r,w as i,u as l}from"./iframe-Bxd6yq2z.js";import"./preload-helper-PPVm8Dsz.js";const a={title:"Bootstrap / Components / Tooltip",component:l,render:()=>({template:`<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong bs-tooltip="title.bind: title; placement.bind: placement; trigger.bind: trigger; html.bind: html">some text with tooltip.</strong>
</div>`}),parameters:{actions:{handles:["show.bs.tooltip","shown.bs.tooltip","hide.bs.tooltip","hidden.bs.tooltip","inserted.bs.tooltip"]}},argTypes:{title:{control:"text"},placement:{control:"select",options:i},trigger:{control:"select",options:r},html:{control:"boolean"}}},t={args:{title:"Default tooltip",placement:"top",trigger:"hover focus",html:!1}},e={render:()=>({template:`<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong bs-tooltip="title.bind: title; placement.bind: placement; trigger.bind: trigger; html.bind: html">some text with tooltip.</strong>
</div>`}),args:{title:"Allow <em><u>HTML</u> <strong>in the</span> tooltip</strong></em>",placement:"top",trigger:"hover focus",html:!0}},o={render:()=>({template:`<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong bs-tooltip="title.bind: title; placement.bind: placement; trigger.bind: trigger; template.bind: template">some text with tooltip.</strong>
</div>`}),args:{title:"Default tooltip",placement:"top",trigger:"hover focus",template:'<div class="tooltip tooltip-example" style="background-color: darkred;" role="tooltip"><div class="tooltip-inner"></div></div>'},argTypes:{template:{control:"text"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Default tooltip',
    placement: 'top',
    trigger: 'hover focus',
    html: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong bs-tooltip="title.bind: title; placement.bind: placement; trigger.bind: trigger; html.bind: html">some text with tooltip.</strong>
</div>\`
  }),
  args: {
    title: 'Allow <em><u>HTML</u> <strong>in the</span> tooltip</strong></em>',
    placement: 'top',
    trigger: 'hover focus',
    html: true
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong bs-tooltip="title.bind: title; placement.bind: placement; trigger.bind: trigger; template.bind: template">some text with tooltip.</strong>
</div>\`
  }),
  args: {
    title: 'Default tooltip',
    placement: 'top',
    trigger: 'hover focus',
    template: '<div class="tooltip tooltip-example" style="background-color: darkred;" role="tooltip"><div class="tooltip-inner"></div></div>'
  },
  argTypes: {
    template: {
      control: 'text'
    }
  }
}`,...o.parameters?.docs?.source}}};const p=["Overview","HtmlDefaultTooltip","CustomTooltip"];export{o as CustomTooltip,e as HtmlDefaultTooltip,t as Overview,p as __namedExportsOrder,a as default};
