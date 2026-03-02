/* empty css                                */import{V as s,k as t,o}from"./iframe-D6G5HFNq.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Bootstrap / Components / Navbar",component:o,render:()=>({template:`<bs-navbar expand.bind="expand" dark.bind="dark" class="bg-light">
  <a bs-navbar-brand href="#">Navbar</a>
  <bs-navbar-toggler target="#navbarTogglerDemo01"></bs-navbar-toggler>
  <div bs-collapse id="navbarTogglerDemo01">
    <bs-navbar-nav class="me-auto mb-2 mb-lg-0" scroll.bind="scroll">
      <bs-nav-item>
        <a bs-nav-link="active: true" href="#">Home</a>
      </bs-nav-item>
      <bs-nav-item>
        <a bs-nav-link href="#">Link</a>
      </bs-nav-item>
      <bs-nav-item bs-dropdown>
        <a bs-nav-link bs-dropdown-toggle href="#">Dropdown</a>
        <bs-dropdown-menu>
          <a bs-dropdown-item>Action</a>
          <a bs-dropdown-item>Another action</a>
          <hr bs-dropdown-item="divider">
          <a bs-dropdown-item>Something else here</a>
        </bs-dropdown-menu>
      </bs-nav-item>
      <bs-nav-item>
        <a bs-nav-link="disabled: true">Disabled</a>
      </bs-nav-item>
    </bs-navbar-nav>
    <form class="d-flex" role="search">
      <bs-input type="search" placeholder="Search" class="me-2"></bs-input>
      <button bs-button="outline-success" type="button">Search</button>
    </form>
  </div>
</bs-navbar>`}),argTypes:{expand:{control:"select",options:["",...t,"always"]},dark:{control:"boolean"},scroll:{control:"boolean"}}},a={args:{expand:"lg",dark:!1,scroll:!1}},n={render:()=>({template:`<bs-navbar expand.bind="expand" dark.bind="dark" class="bg-\${background}">
  <a bs-navbar-brand href="#">Navbar</a>
  <bs-navbar-nav class="me-auto mb-2 mb-lg-0">
    <a bs-nav-link="active: true" href="#">Home</a>
    <a bs-nav-link href="#">Features</a>
    <a bs-nav-link href="#">Pricing</a>
    <a bs-nav-link href="#">About</a>
  </bs-navbar-nav>
  <form class="d-flex" role="search">
    <bs-input type="search" placeholder="Search" class="me-2"></bs-input>
    <button bs-button="outline-light" type="button">Search</button>
  </form>
</bs-navbar>`}),args:{expand:"lg",dark:!0,background:"dark",scroll:!1},argTypes:{background:{control:"select",options:s,table:{category:"Story controls"}}}},e={render:()=>({template:`<bs-navbar expand.bind="expand" dark.bind="dark" class="bg-light">
  <span bs-navbar-text>Navbar text with an inline element</span>
</bs-navbar>`}),args:{expand:"lg",dark:!1}},r={render:()=>({template:`<bs-navbar dark.bind="dark" class="bg-light fixed-top">
  <a bs-navbar-brand href="#">Offcanvas navbar</a>
  <bs-navbar-toggler target="#offcanvasNavbar"></bs-navbar-toggler>
  <bs-offcanvas id="offcanvasNavbar" title="Offcanvas" placement="end">
    <bs-navbar-nav class="justify-content-end flex-grow-1 pe-3 mb-3">
      <bs-nav-item>
        <a bs-nav-link="active: true" href="#">Home</a>
      </bs-nav-item>
      <bs-nav-item>
        <a bs-nav-link href="#">Link</a>
      </bs-nav-item>
      <bs-nav-item bs-dropdown>
        <a bs-nav-link bs-dropdown-toggle href="#">Dropdown</a>
        <bs-dropdown-menu>
          <a bs-dropdown-item>Action</a>
          <a bs-dropdown-item>Another action</a>
          <hr bs-dropdown-item="divider">
          <a bs-dropdown-item>Something else here</a>
        </bs-dropdown-menu>
      </bs-nav-item>
    </bs-navbar-nav>
    <form class="d-flex" role="search">
      <bs-input type="search" placeholder="Search" class="me-2"></bs-input>
      <button bs-button="outline-success" type="button">Search</button>
    </form>
  </bs-offcanvas>
</bs-navbar>`}),args:{dark:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    expand: 'lg',
    dark: false,
    scroll: false
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<bs-navbar expand.bind="expand" dark.bind="dark" class="bg-\\\${background}">
  <a bs-navbar-brand href="#">Navbar</a>
  <bs-navbar-nav class="me-auto mb-2 mb-lg-0">
    <a bs-nav-link="active: true" href="#">Home</a>
    <a bs-nav-link href="#">Features</a>
    <a bs-nav-link href="#">Pricing</a>
    <a bs-nav-link href="#">About</a>
  </bs-navbar-nav>
  <form class="d-flex" role="search">
    <bs-input type="search" placeholder="Search" class="me-2"></bs-input>
    <button bs-button="outline-light" type="button">Search</button>
  </form>
</bs-navbar>\`
  }),
  args: {
    expand: 'lg',
    dark: true,
    background: 'dark',
    scroll: false
  },
  argTypes: {
    background: {
      ...{
        control: 'select',
        options: VARIANTS
      },
      table: {
        category: 'Story controls'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<bs-navbar expand.bind="expand" dark.bind="dark" class="bg-light">
  <span bs-navbar-text>Navbar text with an inline element</span>
</bs-navbar>\`
  }),
  args: {
    expand: 'lg',
    dark: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<bs-navbar dark.bind="dark" class="bg-light fixed-top">
  <a bs-navbar-brand href="#">Offcanvas navbar</a>
  <bs-navbar-toggler target="#offcanvasNavbar"></bs-navbar-toggler>
  <bs-offcanvas id="offcanvasNavbar" title="Offcanvas" placement="end">
    <bs-navbar-nav class="justify-content-end flex-grow-1 pe-3 mb-3">
      <bs-nav-item>
        <a bs-nav-link="active: true" href="#">Home</a>
      </bs-nav-item>
      <bs-nav-item>
        <a bs-nav-link href="#">Link</a>
      </bs-nav-item>
      <bs-nav-item bs-dropdown>
        <a bs-nav-link bs-dropdown-toggle href="#">Dropdown</a>
        <bs-dropdown-menu>
          <a bs-dropdown-item>Action</a>
          <a bs-dropdown-item>Another action</a>
          <hr bs-dropdown-item="divider">
          <a bs-dropdown-item>Something else here</a>
        </bs-dropdown-menu>
      </bs-nav-item>
    </bs-navbar-nav>
    <form class="d-flex" role="search">
      <bs-input type="search" placeholder="Search" class="me-2"></bs-input>
      <button bs-button="outline-success" type="button">Search</button>
    </form>
  </bs-offcanvas>
</bs-navbar>\`
  }),
  args: {
    dark: false
  }
}`,...r.parameters?.docs?.source}}};const c=["Overview","ColorSchemes","Text","Offcanvas"];export{n as ColorSchemes,r as Offcanvas,a as Overview,e as Text,c as __namedExportsOrder,i as default};
