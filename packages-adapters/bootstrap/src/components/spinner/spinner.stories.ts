import { createComponentTemplate, Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { BsButton } from '../button';

import { BsSpinner } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Spinner',
  component: BsSpinner,
  argTypes: {
    type: selectControl(['border', 'grow']),
    size: selectControl(['', 'sm']),
  },
};

export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  props: args,
});

const Buttons: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
<button bs-button disabled>
  ${createComponentTemplate(BsSpinner)}
</button>
<button bs-button disabled>
  ${createComponentTemplate(BsSpinner)} Loading...
</button>
  `,
  props: args,
});

Buttons.args = {
  size: 'sm',
};

export { Buttons, Overview };
