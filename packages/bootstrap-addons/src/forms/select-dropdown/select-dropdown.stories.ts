import { BsButton, BsOffcanvas } from '@ekzo-dev/bootstrap';

import { BsSelectDropdown } from '.';

const meta = {
  title: 'Bootstrap Addons / Forms / Select',
  component: BsSelectDropdown,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  render: () => ({
    template: `<bs-select-dropdown
      value.bind='value'
      options.bind='options'
      multiple.bind='multiple'
      floating-label.bind='floatingLabel'
      size.bind='size'
      bs-size.bind='bsSize'
      autocomplete.bind='autocomplete'
      matcher.bind='matcher'
      empty-value.bind='emptyValue'
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
    ></bs-select-dropdown>`,
  }),
  argTypes: {
    // BsSelectDropdown properties
    value: { control: 'object' },
    options: { control: 'object' },
    multiple: { control: 'boolean' },
    floatingLabel: { control: 'boolean' },
    size: { control: 'number' },
    bsSize: {
      control: 'select',
      options: ['sm', 'lg'],
    },
    autocomplete: { control: 'text' },
    matcher: { control: 'object' },
    emptyValue: { control: 'object' },

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
    floatingLabel: false,
    valid: undefined,
    options: [
      { value: undefined, text: 'Select option' },
      { value: '1', text: 'One', disabled: true },
      { value: '2', text: 'Two' },
      { value: '3', text: 'Three', group: 'Group' },
    ],
    value: '2',
  },
};

export const Multiple = {
  args: {
    label: 'Label',
    floatingLabel: false,
    valid: undefined,
    multiple: true,
    value: ['2', '3'],
    options: [
      { value: '1', text: 'One', disabled: true },
      { value: '2', text: 'Two' },
      { value: '3', text: 'Three', group: 'Group' },
    ],
  },
};

export const LargeOptions = {
  render: () => ({
    template: `<bs-select-dropdown
      value.bind='value'
      options.bind='options'
      label.bind='label'
      style='width: 400px; max-width: 100%'
    ></bs-select-dropdown>`,
  }),
  args: {
    label: 'Label',
    options: Array.from({ length: 1000 }).map((v, i) => ({
      value: i.toString(),
      text: `Option ${i} has long content which forces dropdown menu to scale larger that select box`,
    })),
  },
};

export const InModal = {
  render: () => ({
    template: `
      <button bs-button click.trigger="offcanvas.toggle()">Open modal</button>
      <bs-offcanvas component.ref="offcanvas">
        <bs-select-dropdown
          value.bind='value'
          options.bind='options'
          label.bind='label'
          style='width: 100%'
        ></bs-select-dropdown>
        <div style="height: 2000px"></div>
      </bs-offcanvas>`,
    components: [BsOffcanvas, BsButton],
  }),
  args: {
    label: 'Label',
    options: Array.from({ length: 1000 }).map((v, i) => ({
      value: i.toString(),
      text: `Option ${i} has long content which forces dropdown menu to scale larger that select box`,
    })),
  },
};
