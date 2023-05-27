import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { GridStack, GridStackItem } from '.';

const meta: Meta = {
  title: 'GridStack / GridStack',
  component: GridStack,
  parameters: {
    actions: {
      handles: [
        'added',
        'change',
        'disable',
        'dragstart',
        'drag',
        'dragstop',
        'dropped',
        'enable',
        'removed',
        'resizestart',
        'resize',
        'resizestop',
      ],
    },
  },
};
export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  components: [GridStackItem],
  innerHtml: `
  <grid-stack-item x="0" y="0">
    This is the first item's accordion body.
  </grid-stack-item>
  <grid-stack-item x="0" y="1">
    This is the second item's accordion body.
  </grid-stack-item>
  <grid-stack-item x="0" y="2">
    This is the third item's accordion body.
  </grid-stack-item>
  `,
  props: args,
});

export { Overview };
