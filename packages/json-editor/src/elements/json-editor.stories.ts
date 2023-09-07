import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { JsonEditor } from './json-editor';

const meta: Meta = {
  title: 'Ekzo / JsonEditor',
  component: JsonEditor,
  args: {
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
      },
      required: ['enum'],
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

export { Overview };
