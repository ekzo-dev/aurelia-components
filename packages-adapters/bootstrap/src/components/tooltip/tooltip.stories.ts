import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsTooltip } from '.';

export default {
  title: 'Bootstrap / Components / Tooltip',
  args: {
    animation: false,
    placement: 'top',
  },
} as Meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsTooltip],
  template: `
    <div class="container w-75">
      <span>Some text without tooltip,</span><br>
      <strong bs-tooltip="title: Default tooltip; animation.bind: animation; placement.bind: placement;">some text with tooltip.</strong>
    <div class="container">
  `,
  props: {
    ...args,
  },
});

export const HtmlTooltipExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsTooltip],
  template: `
    <div class="container w-75">
      <span>Some text without tooltip,</span><br>
      <strong bs-tooltip="template.bind: template; title.bind: 'Allow <em><u>HTML</u> <strong>in the tooltip</strong></em>'; animation.bind: animation; placement.bind: placement; html.bind: true">some text with tooltip.</strong>
    <div class="container">
  `,
  props: {
    ...args,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
  },
});
