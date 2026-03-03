import{D as l}from"./iframe-CLz03ygk.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Bootstrap / Forms / Checkbox",component:l,render:()=>({template:`<bs-checkbox
      checked.bind='checked'
      value.bind='value'
      inline.bind='inline'
      mode.bind='mode'
      button-size.bind='buttonSize'
      button-variant.bind='buttonVariant'
      indeterminate.bind='indeterminate'
      reverse.bind='reverse'
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
    ></bs-checkbox>`}),argTypes:{checked:{control:"boolean"},value:{control:"object"},matcher:{control:!1},inline:{control:"boolean"},mode:{control:"select",options:["switch","button"]},buttonSize:{control:"select",options:["sm","lg"]},buttonVariant:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link","outline-primary","outline-secondary","outline-success","outline-danger","outline-warning","outline-info","outline-light","outline-dark"]},indeterminate:{control:"boolean"},reverse:{control:"boolean"},name:{control:"text"},label:{control:"text"},title:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},valid:{control:"boolean"},validFeedback:{control:"text"},invalidFeedback:{control:"text"},form:{control:"text"},text:{control:"text"}}},e={args:{checked:!1,label:"Some label",buttonVariant:"primary"}},o={render:()=>({template:`<bs-checkbox label="One" value="1" checked.bind="checked"></bs-checkbox>
<bs-checkbox label="Two" value="2" checked.bind="checked"></bs-checkbox>
<bs-checkbox label="Three" value="3" checked.bind="checked"></bs-checkbox>
<br>
Selected: \${checked}`}),argTypes:{checked:{control:"object"},label:{control:!1},name:{control:!1},title:{control:!1},disabled:{control:!1},required:{control:!1},valid:{control:!1},validFeedback:{control:!1},invalidFeedback:{control:!1},value:{control:!1},matcher:{control:!1},mode:{control:!1},buttonSize:{control:!1},buttonVariant:{control:!1},indeterminate:{control:!1},form:{control:!1},inline:{control:!1},reverse:{control:!1},text:{control:!1}},args:{checked:["1"]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'Some label',
    buttonVariant: 'primary'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<bs-checkbox label="One" value="1" checked.bind="checked"></bs-checkbox>
<bs-checkbox label="Two" value="2" checked.bind="checked"></bs-checkbox>
<bs-checkbox label="Three" value="3" checked.bind="checked"></bs-checkbox>
<br>
Selected: \\\${checked}\`
  }),
  argTypes: {
    checked: {
      control: 'object'
    },
    label: {
      control: false
    },
    name: {
      control: false
    },
    title: {
      control: false
    },
    disabled: {
      control: false
    },
    required: {
      control: false
    },
    valid: {
      control: false
    },
    validFeedback: {
      control: false
    },
    invalidFeedback: {
      control: false
    },
    value: {
      control: false
    },
    matcher: {
      control: false
    },
    mode: {
      control: false
    },
    buttonSize: {
      control: false
    },
    buttonVariant: {
      control: false
    },
    indeterminate: {
      control: false
    },
    form: {
      control: false
    },
    inline: {
      control: false
    },
    reverse: {
      control: false
    },
    text: {
      control: false
    }
  },
  args: {
    checked: ['1']
  }
}`,...o.parameters?.docs?.source}}};const a=["Overview","BindingToArray"];export{o as BindingToArray,e as Overview,a as __namedExportsOrder,c as default};
