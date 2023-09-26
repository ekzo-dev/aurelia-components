import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../.storybook/helpers';

import { JsonEditor } from './json-editor';

const meta: Meta = {
  title: 'VanillaJsoneditor / JsonEditor',
  component: JsonEditor,
  argTypes: {
    theme: selectControl(['default', 'dark']),
    mode: selectControl(['tree', 'text', 'table']),
  },
};

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    ...args,
    onRenderValue: undefined, // must be reset here, otherwise editor breaks because callback required a return value
  },
});

export default meta;
export { Overview };
