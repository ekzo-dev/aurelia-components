import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsIcon } from '.';

// В инспекторе видно, что код иконки есть, но не отображается в Canvas
const meta: Meta = {
  title: 'Bootstrap / Icons',
  component: BsIcon,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    ...args,
  },
});

export const IconExample: Story = (args): StoryFnAureliaReturnType => ({
  template: `
<p repeat.for="icon of icons">
    <bs-icon name.bind="icon" title.bind="icon"></bs-icon>&nbsp;\${icon}
</p>
  `,
  props: {
    ...args,
    icons: ['activity', 'award', 'layers', 'x-circle', 'arrow-down'],
  },
});
