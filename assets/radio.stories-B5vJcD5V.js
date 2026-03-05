import{G as o}from"./iframe-kM6Dcy22.js";import"./preload-helper-PPVm8Dsz.js";const a={title:"Bootstrap / Forms / Radio",component:o,render:()=>({template:`<bs-radio
      checked.bind='checked'
      value.bind='value'
      inline.bind='inline'
      mode.bind='mode'
      button-size.bind='buttonSize'
      button-variant.bind='buttonVariant'
      name.bind='name'
      label.bind='label'
      title.bind='title'
      disabled.bind='disabled'
      required.bind='required'
      valid.bind='valid'
      valid-feedback.bind='validFeedback'
      invalid-feedback.bind='invalidFeedback'
      form.bind='form'
      text.bind='text'
    ></bs-radio>`}),argTypes:{checked:{control:"text"},value:{control:"text"},matcher:{control:!1},inline:{control:"boolean"},mode:{control:"select",options:["button"]},buttonSize:{control:"select",options:["sm","lg"]},buttonVariant:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link","outline-primary","outline-secondary","outline-success","outline-danger","outline-warning","outline-info","outline-light","outline-dark"]},name:{control:"text"},label:{control:"text"},title:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},valid:{control:"boolean"},validFeedback:{control:"text"},invalidFeedback:{control:"text"},form:{control:"text"},text:{control:"text"}}},n={args:{label:"Default radio",buttonVariant:"primary"}},e={render:()=>({template:`<bs-radio-group
      checked.bind='checked'
      options.bind='options'
      inline.bind='inline'
      mode.bind='mode'
      button-size.bind='buttonSize'
      button-variant.bind='buttonVariant'
      name.bind='name'
      label.bind='label'
      title.bind='title'
      disabled.bind='disabled'
      required.bind='required'
      valid.bind='valid'
      valid-feedback.bind='validFeedback'
      invalid-feedback.bind='invalidFeedback'
      form.bind='form'
      text.bind='text'
    ></bs-radio-group>`}),argTypes:{checked:{control:"text"},options:{control:"object"},matcher:{control:!1},inline:{control:"boolean"},mode:{control:"select",options:["button"]},buttonSize:{control:"select",options:["sm","lg"]},buttonVariant:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link","outline-primary","outline-secondary","outline-success","outline-danger","outline-warning","outline-info","outline-light","outline-dark"]},name:{control:"text"},label:{control:"text"},title:{control:!1},disabled:{control:"boolean"},required:{control:"boolean"},valid:{control:"boolean"},validFeedback:{control:"text"},invalidFeedback:{control:"text"},form:{control:"text"},text:{control:"text"},value:{control:!1}},args:{options:{0:"Default radio",1:"Default checked radio"},checked:"1",buttonVariant:"primary"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default radio',
    buttonVariant: 'primary'
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<bs-radio-group
      checked.bind='checked'
      options.bind='options'
      inline.bind='inline'
      mode.bind='mode'
      button-size.bind='buttonSize'
      button-variant.bind='buttonVariant'
      name.bind='name'
      label.bind='label'
      title.bind='title'
      disabled.bind='disabled'
      required.bind='required'
      valid.bind='valid'
      valid-feedback.bind='validFeedback'
      invalid-feedback.bind='invalidFeedback'
      form.bind='form'
      text.bind='text'
    ></bs-radio-group>\`
  }),
  argTypes: {
    // BsRadioGroup properties
    checked: {
      control: 'text'
    },
    options: {
      control: 'object'
    },
    matcher: {
      control: false
    },
    inline: {
      control: 'boolean'
    },
    mode: {
      control: 'select',
      options: ['button']
    },
    buttonSize: {
      control: 'select',
      options: ['sm', 'lg']
    },
    buttonVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link', 'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-light', 'outline-dark']
    },
    // BaseField properties
    name: {
      control: 'text'
    },
    label: {
      control: 'text'
    },
    title: {
      control: false
    },
    disabled: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    valid: {
      control: 'boolean'
    },
    validFeedback: {
      control: 'text'
    },
    invalidFeedback: {
      control: 'text'
    },
    form: {
      control: 'text'
    },
    text: {
      control: 'text'
    },
    value: {
      control: false
    }
  },
  args: {
    options: {
      '0': 'Default radio',
      '1': 'Default checked radio'
    },
    checked: '1',
    buttonVariant: 'primary'
  }
}`,...e.parameters?.docs?.source}}};const l=["Overview","RadioGroup"];export{n as Overview,e as RadioGroup,l as __namedExportsOrder,a as default};
