import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { JsonEditor } from './json-editor';

const meta: Meta = {
  title: 'JsonEditor / JsonEditor',
  component: JsonEditor,
};
export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    ...args,
  },
});

export { Overview };
