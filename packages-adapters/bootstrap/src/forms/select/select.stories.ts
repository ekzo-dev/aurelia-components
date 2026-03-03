import { BsSelect } from '.';

const meta = {
  title: 'Bootstrap / Forms / Select',
  component: BsSelect,
  render: () => ({
    template: `<bs-select
      value.bind='value'
      options.bind='options'
      multiple.bind='multiple'
      floating-label.bind='floatingLabel'
      size.bind='size'
      bs-size.bind='bsSize'
      autocomplete.bind='autocomplete'
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
    ></bs-select>`,
  }),
  argTypes: {
    // BsSelect properties
    value: { control: 'text' },
    options: { control: 'object' },
    multiple: { control: 'boolean' },
    floatingLabel: { control: 'boolean' },
    size: { control: 'number' },
    bsSize: {
      control: 'select',
      options: ['sm', 'lg'],
    },
    autocomplete: { control: 'text' },
    matcher: { control: false },

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
    label: 'Label',
    options: [
      { value: '1', text: 'One' },
      { value: '2', text: 'Two' },
      { value: '3', text: 'Three' },
    ],
  },
};
