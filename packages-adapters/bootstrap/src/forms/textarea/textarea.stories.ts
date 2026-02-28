import { BsTextarea } from '.';

const meta = {
  title: 'Bootstrap / Forms / Textarea',
  component: BsTextarea,
  render: () => ({
    template: `<bs-textarea
      value.bind='value'
      rows.bind='rows'
      floating-label.bind='floatingLabel'
      placeholder.bind='placeholder'
      maxlength.bind='maxlength'
      minlength.bind='minlength'
      size.bind='size'
      autocomplete.bind='autocomplete'
      name.bind='name'
      id.bind='id'
      label.bind='label'
      title.bind='title'
      disabled.bind='disabled'
      required.bind='required'
      valid.bind='valid'
      valid-feedback.bind='validFeedback'
      invalid-feedback.bind='invalidFeedback'
      form.bind='form'
      text.bind='text'
    ></bs-textarea>`,
  }),
  argTypes: {
    // BsTextarea properties
    value: { control: 'text' },
    rows: { control: 'number' },
    floatingLabel: { control: 'boolean' },
    placeholder: { control: 'text' },
    maxlength: { control: 'number' },
    minlength: { control: 'number' },
    size: {
      control: 'select',
      options: [undefined, 'sm', 'lg'],
    },
    autocomplete: { control: 'text' },

    // BaseField properties
    name: { control: 'text' },
    id: { control: 'text' },
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
    label: 'Label',
    rows: 3,
  },
};
