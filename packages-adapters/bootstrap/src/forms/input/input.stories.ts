import { BsInput } from '.';

const meta = {
  title: 'Bootstrap / Forms / Input',
  component: BsInput,
  render: () => ({
    template: `<bs-input
      type.bind='type'
      inputmode.bind='inputmode'
      value.bind='value'
      minlength.bind='minlength'
      maxlength.bind='maxlength'
      min.bind='min'
      max.bind='max'
      step.bind='step'
      multiple.bind='multiple'
      disabled.bind='disabled'
      pattern.bind='pattern'
      file-accept.bind='fileAccept'
      floating-label.bind='floatingLabel'
      placeholder.bind='placeholder'
      readonly.bind='readonly'
      size.bind='size'
      bs-size.bind='bsSize'
      autocomplete.bind='autocomplete'
      name.bind='name'
      id.bind='id'
      label.bind='label'
      title.bind='title'
      required.bind='required'
      valid.bind='valid'
      valid-feedback.bind='validFeedback'
      invalid-feedback.bind='invalidFeedback'
      form.bind='form'
      text.bind='text'
    ></bs-input>`,
  }),
  argTypes: {
    // BsInput properties
    type: {
      control: 'select',
      options: [
        'text',
        'password',
        'email',
        'number',
        'tel',
        'url',
        'search',
        'date',
        'time',
        'datetime-local',
        'month',
        'week',
        'color',
        'file',
        'range',
      ],
    },
    inputmode: {
      control: 'select',
      options: [undefined, 'none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
    },
    value: { control: 'text' },
    minlength: { control: 'number' },
    maxlength: { control: 'number' },
    min: { control: 'text' },
    max: { control: 'text' },
    step: { control: 'text' },
    multiple: { control: 'boolean' },
    pattern: { control: 'text' },
    fileAccept: { control: 'text' },
    floatingLabel: { control: 'boolean' },
    placeholder: { control: 'text' },
    readonly: { control: 'boolean' },
    size: { control: 'number' },
    bsSize: {
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
    type: 'text',
    value: 'Hello from Storybook!',
    label: 'Input Label',
  },
};
