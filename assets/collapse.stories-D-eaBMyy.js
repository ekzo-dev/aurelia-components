/* empty css                                */import{i as o}from"./iframe-kM6Dcy22.js";import"./preload-helper-PPVm8Dsz.js";const t={title:"Bootstrap / Components / Collapse",component:o,render:()=>({template:`<div>
<button bs-button click.trigger="collapsed = !collapsed" class="mb-3">Toggle content</button>
<div bs-collapse="collapsed.bind: collapsed; horizontal.bind: horizontal">
  <bs-card>
    <bs-card-body>
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </bs-card-body>
  </bs-card>
</div>
</div>`}),parameters:{actions:{handles:["hide.bs.collapse","hidden.bs.collapse","show.bs.collapse","shown.bs.collapse"]}},argTypes:{collapsed:{control:"boolean"},horizontal:{control:"boolean"}}},e={args:{collapsed:!0,horizontal:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    collapsed: true,
    horizontal: false
  }
}`,...e.parameters?.docs?.source}}};const r=["Overview"];export{e as Overview,r as __namedExportsOrder,t as default};
