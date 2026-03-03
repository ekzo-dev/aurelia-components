import { BsJsonInput } from '.';

const meta = {
  title: 'Bootstrap Addons / Forms / Json input',
  component: BsJsonInput,
  render: () => ({
    template: `<bs-json-input
      value.bind='value'
      required.bind='required'
      disabled.bind='disabled'
      json-schema.bind='jsonSchema'
      validator-options.bind='validatorOptions'
      json-editor-options.bind='jsonEditorOptions'
    ></bs-json-input>`,
  }),
  argTypes: {
    // BsJsonInput properties
    value: { control: 'object' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    jsonSchema: { control: 'object' },
    validatorOptions: { control: 'object' },
    jsonEditorOptions: { control: 'object' },
  },
};

export default meta;

export const Overview = {
  args: {
    jsonSchema: {
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      type: 'object',
      properties: {
        enum: {
          type: 'string',
          enum: ['1', '2', '3'],
        },
        boolean: {
          type: 'boolean',
        },
        email: {
          type: 'string',
          format: 'email',
        },
        number: {
          type: 'number',
          multipleOf: 0.0001,
        },
      },
      required: ['enum'],
    },
    value: {
      number: 1.11,
      enum: '1',
    },
  },
};

export const JsonSchemaEditor = {
  args: {
    jsonSchema: true,
    value: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: 'object',
      properties: {},
    },
  },
};
