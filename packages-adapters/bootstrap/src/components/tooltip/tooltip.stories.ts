import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsTooltip } from '.';

import './tooltip.stories.scss';

export default {
  title: 'Bootstrap / Components / Tooltip',
  args: {
    animation: false,
    placement: 'top',
    title: 'Default tooltip',
    delay: 0,
    html: true,
  },
} as Meta;

const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsTooltip],
  template: `
<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong bs-tooltip="delay.bind: delay; title.bind: title; animation.bind: animation; placement.bind: placement;">some text with tooltip.</strong>
<div class="container">
  `,
  props: args,
});

const HtmlDefaultTooltip: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsTooltip],
  template: `
<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong bs-tooltip="delay.bind: delay; template.bind: template; title.bind: title; animation.bind: animation; placement.bind: placement; html.bind: html">some text with tooltip.</strong>
<div class="container">
  `,
  props: args,
});
HtmlDefaultTooltip.args = {
  title: 'Allow <em><u>HTML</u> <strong>in the</span> tooltip</strong></em>',
};

const CustomTooltip: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsTooltip],
  template: `
<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong bs-tooltip="delay.bind: delay; template.bind: template; title.bind: title; animation.bind: animation; placement.bind: placement; html.bind: html">some text with tooltip.</strong>
</div>
  `,
  props: args,
});
CustomTooltip.args = {
  template:
    '<div class="tooltip tooltip-example" style="background-color: darkred;" role="tooltip"><div class="tooltip-inner"></div></div>',
  title: 'Allow <em><u>HTML</u> <strong>in the</span> tooltip</strong></em>',
};

export { Default, HtmlDefaultTooltip, CustomTooltip };
