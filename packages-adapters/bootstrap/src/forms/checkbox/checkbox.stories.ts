import { BsCheckbox } from '.';

const meta = {
  title: 'Bootstrap / Forms / Checkbox',
  component: BsCheckbox,
  render: () => ({
    template: `<bs-checkbox
      checked.bind='checked'
      model.bind='model'
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
    ></bs-checkbox>`,
  }),
  argTypes: {
    // BsCheckbox properties
    checked: { control: 'boolean' },
    model: { control: 'object' },
    value: { control: 'text' },
    matcher: { control: false },
    inline: { control: 'boolean' },
    mode: {
      control: 'select',
      options: [undefined, 'switch', 'button'],
    },
    buttonSize: {
      control: 'select',
      options: [undefined, 'sm', 'lg'],
    },
    buttonVariant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link',
        'outline-primary',
        'outline-secondary',
        'outline-success',
        'outline-danger',
        'outline-warning',
        'outline-info',
        'outline-light',
        'outline-dark',
      ],
    },
    indeterminate: { control: 'boolean' },
    reverse: { control: 'boolean' },

    // BaseField properties
    name: { control: 'text' },
    label: { control: 'text' },
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    valid: {
      control: 'select',
      options: [undefined, true, false],
    },
    validFeedback: { control: 'text' },
    invalidFeedback: { control: 'text' },
    form: { control: 'text' },
    text: { control: 'text' },
  },
};

export default meta;

export const Overview = {
  args: {
    checked: false,
    label: 'Some label',
    buttonVariant: 'primary',
  },
};

export const BindingToArray = {
  render: () => ({
    template: `<bs-checkbox label="One" model="1" checked.bind="checked"></bs-checkbox>
<bs-checkbox label="Two" model="2" checked.bind="checked"></bs-checkbox>
<bs-checkbox label="Three" model="3" checked.bind="checked"></bs-checkbox>
<br>
Selected: \${checked}`,
  }),
  argTypes: {
    checked: { control: 'object' },
    label: { control: false },
    name: { control: false },
    title: { control: false },
    disabled: { control: false },
    required: { control: false },
    valid: { control: false },
    validFeedback: { control: false },
    invalidFeedback: { control: false },
    model: { control: false },
    value: { control: false },
    matcher: { control: false },
    mode: { control: false },
    buttonSize: { control: false },
    buttonVariant: { control: false },
    indeterminate: { control: false },
    form: { control: false },
    inline: { control: false },
    reverse: { control: false },
    text: { control: false },
  },
  args: {
    checked: ['1'],
  },
};
