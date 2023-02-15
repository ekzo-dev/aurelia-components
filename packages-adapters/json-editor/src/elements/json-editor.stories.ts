import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { JsonEditor } from './json-editor';

const meta: Meta = {
  title: 'JsonEditor / JsonEditor',
  component: JsonEditor,
};

const Default: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    ...args,
  },
});

export default meta;
export { Default };
