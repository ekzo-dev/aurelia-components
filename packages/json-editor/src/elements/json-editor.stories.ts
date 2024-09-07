import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { JsonEditor } from './json-editor';

const meta: Meta = {
  title: 'Ekzo / JsonEditor',
  component: JsonEditor,
  parameters: {
    actions: {
      handles: ['validation-change'],
    },
  },
};

export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    ...args,
    onRenderValue: undefined, // must be reset here, otherwise editor breaks because callback required a return value
  },
});

Overview.args = {
  schema: {
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
  json: {
    number: 1.11,
    enum: '1',
  },
};

const JsonSchemaEditor: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    ...args,
    onRenderValue: undefined, // must be reset here, otherwise editor breaks because callback required a return value
  },
});

JsonSchemaEditor.args = {
  validateAsSchema: true,
  json: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {},
  },
};

// eslint-disable-next-line
export { Overview, JsonSchemaEditor };
