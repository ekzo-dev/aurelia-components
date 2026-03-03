/* empty css                                */import{V as a,A as o}from"./iframe-CLz03ygk.js";import"./preload-helper-PPVm8Dsz.js";const r={title:"Bootstrap / Components / Toast",component:o,render:()=>({template:`<div>
    <button bs-button click.trigger="toast.show()">Open toast</button>
    <bs-toast-container class="position-fixed bottom-0 end-0 p-3">
      <bs-toast view-model.ref="toast"
        header.bind="header"
        animation.bind="animation"
        autohide.bind="autohide"
        delay.bind="delay"
        variant.bind="variant"
      >Hello, world! This is a toast message.</bs-toast>
    </bs-toast-container>
</div>`}),parameters:{actions:{handles:["hide.bs.toast","hidden.bs.toast","show.bs.toast","shown.bs.toast"]}},argTypes:{header:{control:"text"},animation:{control:"boolean"},autohide:{control:"boolean"},delay:{control:"number"},variant:{control:"select",options:a}}},t={args:{header:"Toast",animation:!1,autohide:!1,delay:2e3,variant:void 0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Toast',
    animation: false,
    autohide: false,
    delay: 2000,
    variant: undefined
  }
}`,...t.parameters?.docs?.source}}};const i=["Overview"];export{t as Overview,i as __namedExportsOrder,r as default};
