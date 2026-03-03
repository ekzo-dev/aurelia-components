import { BsButton } from '@ekzo-dev/bootstrap';

import { BsDurationInput } from '.';

const meta = {
  title: 'Bootstrap Addons / Forms / Duration input',
  component: BsDurationInput,
  render: () => ({
    template: `<bs-duration-input
      value.bind='value'
      bs-size.bind='bsSize'
      floating-label.bind='floatingLabel'
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
    ></bs-duration-input>`,
  }),
  argTypes: {
    // BsDurationInput properties
    value: { control: 'text' },
    bsSize: {
      control: 'select',
      options: ['sm', 'lg'],
    },
    floatingLabel: { control: 'boolean' },

    // BaseField properties
    name: { control: 'text' },
    label: { control: 'text' },
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    valid: { control: 'boolean' },
    validFeedback: { control: 'text' },
    invalidFeedback: { control: 'text' },
    form: { control: 'text' },
    text: { control: 'text' },
  },
};

export default meta;

export const Overview = {
  args: {
    value: 'P5DT1H',
    label: 'Duration',
  },
};

export const Validation = {
  render: () => ({
    template: `<form class='was-validated'>
      <bs-duration-input
        value.bind='value'
        bs-size.bind='bsSize'
        floating-label.bind='floatingLabel'
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
      ></bs-duration-input>
      <br>\${value}
      <button bs-button>Validate</button>
    </form>`,
    components: [BsButton],
  }),
  args: {
    label: 'Duration',
    required: true,
  },
};
