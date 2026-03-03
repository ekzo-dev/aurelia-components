import './tooltip.stories.scss';

import { TOOLTIP_PLACEMENTS, TOOLTIP_TRIGGERS } from '../../constants';

import { BsTooltip } from '.';

const meta = {
  title: 'Bootstrap / Components / Tooltip',
  component: BsTooltip,
  render: () => ({
    template: `<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong bs-tooltip="title.bind: title; placement.bind: placement; trigger.bind: trigger; html.bind: html">some text with tooltip.</strong>
</div>`,
  }),
  parameters: {
    actions: {
      handles: ['show.bs.tooltip', 'shown.bs.tooltip', 'hide.bs.tooltip', 'hidden.bs.tooltip', 'inserted.bs.tooltip'],
    },
  },
  argTypes: {
    title: { control: 'text' },
    placement: {
      control: 'select',
      options: TOOLTIP_PLACEMENTS,
    },
    trigger: {
      control: 'select',
      options: TOOLTIP_TRIGGERS,
    },
    html: { control: 'boolean' },
  },
};

export default meta;

export const Overview = {
  args: {
    title: 'Default tooltip',
    placement: 'top',
    trigger: 'hover focus',
    html: false,
  },
};

export const HtmlDefaultTooltip = {
  render: () => ({
    template: `<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong bs-tooltip="title.bind: title; placement.bind: placement; trigger.bind: trigger; html.bind: html">some text with tooltip.</strong>
</div>`,
  }),
  args: {
    title: 'Allow <em><u>HTML</u> <strong>in the</span> tooltip</strong></em>',
    placement: 'top',
    trigger: 'hover focus',
    html: true,
  },
};

export const CustomTooltip = {
  render: () => ({
    template: `<div class="container text-center">
  <span>Some text without tooltip,</span><br>
  <strong bs-tooltip="title.bind: title; placement.bind: placement; trigger.bind: trigger; template.bind: template">some text with tooltip.</strong>
</div>`,
  }),
  args: {
    title: 'Default tooltip',
    placement: 'top',
    trigger: 'hover focus',
    template:
      '<div class="tooltip tooltip-example" style="background-color: darkred;" role="tooltip"><div class="tooltip-inner"></div></div>',
  },
  argTypes: {
    template: { control: 'text' },
  },
};
