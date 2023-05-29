import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { GridStack, GridStackItem } from '.';
import './grid-stack.stories.scss';

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
  <grid-stack-item options.bind="{x: 0, y: 0, w: 4, h: 2}">1</grid-stack-item>
  <grid-stack-item options.bind="{x: 4, y: 0, w: 4, h: 4}">2</grid-stack-item>
  <grid-stack-item options.bind="{x: 8, y: 0, w: 2, h: 2}">Drag me!</grid-stack-item>
  <grid-stack-item options.bind="{x: 10, y: 0, w: 2, h: 2}">4</grid-stack-item>
  <grid-stack-item options.bind="{x: 0, y: 2, w: 2, h: 2}">5</grid-stack-item>
  <grid-stack-item options.bind="{x: 2, y: 2, w: 2, h: 4}">6</grid-stack-item>
  <grid-stack-item options.bind="{x: 8, y: 2, w: 4, h: 2}">7</grid-stack-item>
  <grid-stack-item options.bind="{x: 0, y: 4, w: 2, h: 2}">8</grid-stack-item>
  <grid-stack-item options.bind="{x: 4, y: 4, w: 4, h: 2}">9</grid-stack-item>
  <grid-stack-item options.bind="{x: 8, y: 4, w: 2, h: 2}">10</grid-stack-item>
  <grid-stack-item options.bind="{x: 10, y: 4, w: 2, h: 2}">11</grid-stack-item>
  `,
  props: args,
});
Overview.args = {
  options: {
    cellHeight: 70,
  },
};

const Nested: Story = (args): StoryFnAureliaReturnType => ({
  components: [GridStackItem],
  innerHtml: `
  <grid-stack-item options.bind="{x: 0, y: 0}">regular item</grid-stack-item>
  <grid-stack-item options.bind="{x: 1, y: 0, w: 4, h: 4}">
    <grid-stack options.bind="subGridOptions">
      <grid-stack-item options.bind="{x: 0, y: 0}">0</grid-stack-item>
      <grid-stack-item options.bind="{x: 1, y: 0}">1</grid-stack-item>
      <grid-stack-item options.bind="{x: 2, y: 0}">2</grid-stack-item>
      <grid-stack-item options.bind="{x: 3, y: 0}">3</grid-stack-item>
      <grid-stack-item options.bind="{x: 0, y: 1}">4</grid-stack-item>
      <grid-stack-item options.bind="{x: 1, y: 1}">5</grid-stack-item>
    </grid-stack>
  </grid-stack-item>
  <grid-stack-item options.bind="{x: 5, y: 0, w: 3, h: 4}">
    <grid-stack options.bind="subGridOptions">
      <grid-stack-item options.bind="{x: 0, y: 0}">6</grid-stack-item>
      <grid-stack-item options.bind="{x: 0, y: 1, w: 2}">7</grid-stack-item>
    </grid-stack>
  </grid-stack-item>
  `,
  props: args,
});
Nested.args = {
  options: {
    cellHeight: 50,
    margin: 5,
    minRow: 2, // don't collapse when empty
    disableOneColumnMode: true,
    acceptWidgets: true,
  },
  subGridOptions: {
    cellHeight: 50,
    column: 'auto',
    acceptWidgets: true,
    margin: 5,
  },
};

export { Overview, Nested };
