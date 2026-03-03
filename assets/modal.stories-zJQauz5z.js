import{m as o}from"./iframe-CLz03ygk.js";import"./preload-helper-PPVm8Dsz.js";const n=["sm","lg","xl"],t=["always","sm-down","md-down","lg-down","xl-down","xxl-down"],a={title:"Bootstrap / Components / Modal",component:o,render:()=>({template:`<div>
    <button bs-button click.trigger="modal.toggle()">Open modal</button>
    <bs-modal view-model.ref="modal"
      title.bind="title"
      animation.bind="animation"
      centered.bind="centered"
      scrollable.bind="scrollable"
      size.bind="size"
      fullscreen.bind="fullscreen"
      backdrop.bind="backdrop"
      keyboard.bind="keyboard"
      focus.bind="focus"
    >
      Modal body
    </bs-modal>
</div>`}),parameters:{actions:{handles:["hide.bs.modal","hidden.bs.modal","hidePrevented.bs.modal","show.bs.modal","shown.bs.modal"]}},argTypes:{title:{control:"text"},animation:{control:"boolean"},centered:{control:"boolean"},scrollable:{control:"boolean"},size:{control:"select",options:n},fullscreen:{control:"select",options:t},backdrop:{control:"select",options:[!0,!1,"static"]},keyboard:{control:"boolean"},focus:{control:"boolean"}}},e={args:{title:"Modal title",animation:!0,centered:!1,scrollable:!1,size:void 0,fullscreen:void 0,backdrop:!0,keyboard:!0,focus:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Modal title',
    animation: true,
    centered: false,
    scrollable: false,
    size: undefined,
    fullscreen: undefined,
    backdrop: true,
    keyboard: true,
    focus: true
  }
}`,...e.parameters?.docs?.source}}};const s=["Overview"];export{e as Overview,s as __namedExportsOrder,a as default};
