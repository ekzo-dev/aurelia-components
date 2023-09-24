import { Meta, Story, StoryFnAureliaReturnType, createComponentTemplate } from '@storybook/aurelia';
import { BsPopover } from '.';
import { BsButton } from '../button';

import './popover.stories.scss';
import { selectControl } from '../../../../../.storybook/helpers';

const placementOptions = <const>['top', 'right', 'bottom', 'left'];

const triggerOptions = <const>[
  'click',
  'hover',
  'focus',
  'manual',
  'click hover',
  'click focus',
  'hover focus',
  'click hover focus',
];

export default {
  title: 'Bootstrap / Components / Popover',
  component: BsPopover,
  parameters: {
    actions: {
      handles: ['show.bs.popover', 'shown.bs.popover', 'hide.bs.popover', 'hidden.bs.popover', 'inserted.bs.popover'],
    },
  },
  args: {
    title: 'Popover title',
    content: "And here's some amazing content. It's very engaging. Right?",
  },
  argTypes: {
    placement: selectControl(placementOptions),
    trigger: selectControl(triggerOptions),
  },
} as Meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
<div class="container text-center"><br><br><br><br><br><br>
    <button bs-button ${createComponentTemplate(BsPopover)}>Open popover</button>
</div>
  `,
  props: args,
});

const HtmlInPopover: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
<div class="container text-center"><br><br><br><br><br><br>
    <button bs-button ${createComponentTemplate(BsPopover)}>Open popover</button>
</div>
  `,
  props: args,
});
HtmlInPopover.args = {
  content: "And here's <em><u>some</u> amazing</em> content. <strong>It's very engaging</strong>. Right?",
  html: true,
};

// todo story with customTemplate
/*const CustomTemplate: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton,],
  template: `
<div class="container text-center"><br><br><br><br><br><br>
    <button bs-button ${createComponentTemplate(BsPopover)}>Open popover</button>
</div>
  `,
  props: args,
});
CustomTemplate.args = {
  template:
    `<div class='popover popover-example' style='background-color: darkred;' role='popover'><div class='popover-arrow'></div><div class='popover-inner'>Test</div></div>`,
};*/

export { Overview, HtmlInPopover };
