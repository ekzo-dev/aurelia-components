import './popover.stories.scss';

import { TOOLTIP_PLACEMENTS, TOOLTIP_TRIGGERS } from '../../constants';

import { BsPopover } from '.';

const meta = {
  title: 'Bootstrap / Components / Popover',
  component: BsPopover,
  render: () => ({
    template: `<div class="container text-center"><br><br><br><br><br><br>
    <button bs-button bs-popover="title.bind: title; content.bind: content; placement.bind: placement; trigger.bind: trigger; html.bind: html">Open popover</button>
</div>`,
  }),
  parameters: {
    actions: {
      handles: ['show.bs.popover', 'shown.bs.popover', 'hide.bs.popover', 'hidden.bs.popover', 'inserted.bs.popover'],
    },
  },
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
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
    title: 'Popover title',
    content: "And here's some amazing content. It's very engaging. Right?",
    placement: 'right',
    trigger: 'click',
    html: false,
  },
};

export const HtmlInPopover = {
  render: () => ({
    template: `<div class="container text-center"><br><br><br><br><br><br>
    <button bs-button bs-popover="title.bind: title; content.bind: content; placement.bind: placement; trigger.bind: trigger; html.bind: html">Open popover</button>
</div>`,
  }),
  args: {
    title: 'Popover title',
    content: "And here's <em><u>some</u> amazing</em> content. <strong>It's very engaging</strong>. Right?",
    placement: 'right',
    trigger: 'click',
    html: true,
  },
};
