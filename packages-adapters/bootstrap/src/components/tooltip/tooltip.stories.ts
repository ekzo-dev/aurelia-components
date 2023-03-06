import { Meta, Story, StoryFnAureliaReturnType, createComponentTemplate } from '@storybook/aurelia';
import { BsTooltip } from '.';
import { selectControl } from '../../story';

import './tooltip.stories.scss';

const placementOptions = <const>['top', 'right', 'bottom', 'left'];

export default {
  title: 'Bootstrap / Components / Tooltip',
  component: BsTooltip,
  args: {
    title: 'Default tooltip',
  },
  argTypes: {
    placement: selectControl(placementOptions),
  },
} as Meta;

const Default: Story = (args): StoryFnAureliaReturnType => ({
  template: `
<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong ${createComponentTemplate(BsTooltip)}>some text with tooltip.</strong>
</div>
  `,
  props: args,
});

const HtmlDefaultTooltip: Story = (args): StoryFnAureliaReturnType => ({
  template: `
<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong ${createComponentTemplate(BsTooltip)}>some text with tooltip.</strong>
<div class="container">
  `,
  props: args,
});
HtmlDefaultTooltip.args = {
  title: 'Allow <em><u>HTML</u> <strong>in the</span> tooltip</strong></em>',
  html: true,
};

const CustomTooltip: Story = (args): StoryFnAureliaReturnType => ({
  template: `
<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong ${createComponentTemplate(BsTooltip)}>some text with tooltip.</strong>
</div>
  `,
  props: args,
});
CustomTooltip.args = {
  template:
    '<div class="tooltip tooltip-example" style="background-color: darkred;" role="tooltip"><div class="tooltip-inner"></div></div>',
};

export { Default, HtmlDefaultTooltip, CustomTooltip };
