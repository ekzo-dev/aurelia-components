import { Meta, Story, StoryFnAureliaReturnType, createComponentTemplate } from '@storybook/aurelia';
import { BsTooltip } from '.';

import './tooltip.stories.scss';
import { selectControl } from '../../../../../.storybook/helpers';
import { TOOLTIP_PLACEMENTS, TOOLTIP_TRIGGERS } from '../../constants';

const meta: Meta = {
  title: 'Bootstrap / Components / Tooltip',
  component: BsTooltip,
  parameters: {
    actions: {
      handles: ['show.bs.tooltip', 'shown.bs.tooltip', 'hide.bs.tooltip', 'hidden.bs.tooltip', 'inserted.bs.tooltip'],
    },
  },
  args: {
    title: 'Default tooltip',
  },
  argTypes: {
    placement: selectControl(TOOLTIP_PLACEMENTS),
    trigger: selectControl(TOOLTIP_TRIGGERS),
  },
};
export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
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

export { Overview, HtmlDefaultTooltip, CustomTooltip };
