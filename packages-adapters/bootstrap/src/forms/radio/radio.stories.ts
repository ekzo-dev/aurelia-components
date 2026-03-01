import { BsRadio, BsRadioGroup } from '.';

const meta = {
  title: 'Bootstrap / Forms / Radio',
  component: BsRadio,
  render: () => ({
    template: `<bs-radio
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
    ></bs-radio>`,
  }),
  argTypes: {
    // BsRadio properties
    checked: { control: 'text' },
    value: { control: 'text' },
    matcher: { control: false },
    inline: { control: 'boolean' },
    mode: {
      control: 'select',
      options: [undefined, 'button'],
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
    label: 'Default radio',
    buttonVariant: 'primary',
  },
};

export const RadioGroup = {
  render: () => ({
    template: `<bs-radio-group
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
    ></bs-radio-group>`,
  }),
  argTypes: {
    // BsRadioGroup properties
    checked: { control: 'text' },
    options: { control: 'object' },
    matcher: { control: false },
    inline: { control: 'boolean' },
    mode: {
      control: 'select',
      options: [undefined, 'button'],
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

    // BaseField properties
    name: { control: 'text' },
    label: { control: 'text' },
    title: { control: false },
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
    value: { control: false },
  },
  args: {
    options: { '0': 'Default radio', '1': 'Default checked radio' },
    checked: '1',
    buttonVariant: 'primary',
  },
};
