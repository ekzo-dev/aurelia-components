import { BsButton } from '@ekzo-dev/bootstrap';
import { createComponentTemplate, Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';

import { BsDurationInput } from '.';

const meta: Meta = {
  title: 'Ekzo / Bootstrap Addons / Forms / Duration input',
  component: BsDurationInput,
  args: {
    value: 'P5DT1H',
    label: 'Duration',
  },
  argTypes: {
    bsSize: selectControl(['', 'sm', 'lg']),
  },
};

export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  props: args,
});

const Validation: Story = (args): StoryFnAureliaReturnType => ({
  props: args,
  template: `<form class='was-validated'>${createComponentTemplate(
    BsDurationInput
  )}<br><button bs-button>Validate</button></form>`,
  components: [BsButton],
});

Validation.args = {
  required: true,
  floatingLabel: true,
};

// eslint-disable-next-line
export { Overview, Validation };
