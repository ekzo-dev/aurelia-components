import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { BsJsonInput } from '.';

const meta: Meta = {
  title: 'Ekzo / Bootstrap Addons / Forms / Json input',
  component: BsJsonInput,
};

export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  props: args,
});

Overview.args = {
  jsonSchema: {
    $schema: 'http://json-schema.org/draft-07/schema#',
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
};

const JsonSchemaEditor: Story = (args): StoryFnAureliaReturnType => ({
  props: args,
});

JsonSchemaEditor.args = {
  jsonSchema: true,
  value: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {},
  },
};

// eslint-disable-next-line
export { Overview, JsonSchemaEditor };
