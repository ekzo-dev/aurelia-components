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

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsTooltip],
  template: `
    <div class="container w-75">
      <span>Some text without tooltip,</span><br>
      <strong bs-tooltip="delay.bind: delay; title.bind: title; animation.bind: animation; placement.bind: placement;">some text with tooltip.</strong>
    <div class="container">
  `,
  props: {
    ...args,
  },
});

export const DelayOneSecExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsTooltip],
  template: `
    <div class="container w-75">
      <span>Some text without tooltip,</span><br>
      <strong bs-tooltip="delay.bind: delay; title.bind: title; animation.bind: animation; placement.bind: placement;">some text with tooltip.</strong>
    <div class="container">
  `,
  props: {
    ...args,
    delay: 1000,
  },
});

export const HtmlDefaultTooltipExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsTooltip],
  template: `
    <div class="container text-center">
      <span>Some text without tooltip,</span><br>
      <strong bs-tooltip="delay.bind: delay; template.bind: template; title.bind: title; animation.bind: animation; placement.bind: placement; html.bind: html">some text with tooltip.</strong>
    <div class="container">
  `,
  props: {
    ...args,
    title: 'Allow <em><u>HTML</u> <strong>in the</span> tooltip</strong></em>',
  },
});

export const CustomTooltipExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsTooltip],
  template: `
   <div class="container text-center">
          <span>Some text without tooltip,</span><br>
          <strong bs-tooltip="delay.bind: delay; template.bind: template; title.bind: title; animation.bind: animation; placement.bind: placement; html.bind: html">some text with tooltip.</strong>
    </div>
  `,
  props: {
    ...args,
    template:
      '<div class="tooltip tooltip-example" style="background-color: darkred;" role="tooltip"><div class="tooltip-inner"></div></div>',
    title: 'Allow <em><u>HTML</u> <strong>in the</span> tooltip</strong></em>',
  },
});
