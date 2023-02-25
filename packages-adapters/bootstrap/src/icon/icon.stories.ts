import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsIcon } from '.';

// В инспекторе видно, что код иконки есть, но не отображается в Canvas
const meta: Meta = {
  title: 'Bootstrap / Icons',
  component: BsIcon,
  args: {
    name: 'activity',
  },
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    ...args,
  },
});

export const IconExample: Story = (args): StoryFnAureliaReturnType => ({
  template: `
    <div><bs-icon name="activity" title="activity"></bs-icon>&nbsp;activity</div>
    <div><bs-icon name="award" title="award"></bs-icon>&nbsp;award</div>
    <div><bs-icon name="layers" title="layers"></bs-icon>&nbsp;layers</div>
    <div><bs-icon name="x-circle" title="x-circle"></bs-icon>&nbsp;x-circle</div>
    <div><bs-icon name="arrow-down" title="arrow-down"></bs-icon>&nbsp;arrow-down</div>
  `,
});
