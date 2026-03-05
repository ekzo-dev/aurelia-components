import{P as o,k as t,p as a}from"./iframe-kM6Dcy22.js";import"./preload-helper-PPVm8Dsz.js";const r={title:"Bootstrap / Components / Offcanvas",component:a,render:()=>({template:`<div>
    <button bs-button click.trigger="offcanvas.toggle()">Open offcanvas</button>
    <bs-offcanvas view-model.ref="offcanvas"
      title.bind="title"
      scroll.bind="scroll"
      responsive.bind="responsive"
      backdrop.bind="backdrop"
      placement.bind="placement"
      keyboard.bind="keyboard"
    >
        <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
          <button bs-button="secondary" bs-dropdown-toggle>Hide this way</button>
          <bs-dropdown-menu dark>
            <a bs-dropdown-item click.trigger="offcanvas.toggle()">Hide</a>
            <a bs-dropdown-item="disabled.bind: true">Disabled action</a>
        </bs-dropdown-menu>
    </bs-offcanvas>
</div>`}),parameters:{actions:{handles:["hide.bs.offcanvas","hidden.bs.offcanvas","show.bs.offcanvas","shown.bs.offcanvas"]}},argTypes:{title:{control:"text"},scroll:{control:"boolean"},responsive:{control:"select",options:["",...t]},backdrop:{control:"select",options:[!0,!1,"static"]},placement:{control:"select",options:o},keyboard:{control:"boolean"}}},e={args:{title:"Offcanvas title",scroll:!1,responsive:"",backdrop:!0,placement:"start",keyboard:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Offcanvas title',
    scroll: false,
    responsive: '',
    backdrop: true,
    placement: 'start',
    keyboard: true
  }
}`,...e.parameters?.docs?.source}}};const c=["Overview"];export{e as Overview,c as __namedExportsOrder,r as default};
