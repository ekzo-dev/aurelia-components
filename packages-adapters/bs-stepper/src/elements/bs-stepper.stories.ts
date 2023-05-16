import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsButton, BsInput } from '@ekzo-dev/bootstrap';

import { BsStepper } from './bs-stepper';
import { BsStepperStep } from './bs-stepper-step';

const meta: Meta = {
  title: 'BS stepper / Bootstrap stepper',
  component: BsStepper,
  parameters: {
    actions: {
      // TODO: bs-stepper events do not buddle, but Storybook catches events on the parent element (:
      handles: ['show.bs-stepper', 'shown.bs-stepper'],
    },
  },
};
export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsStepperStep, BsButton, BsInput],
  template: `
  <bs-stepper linear.bind="linear" animation.bind="animation" vertical.bind="vertical" view-model.ref="stepper">
    <bs-stepper-step number="1" label="Email">
      <bs-input label="Email address" type="email"></bs-input>
      <div style="margin-top: 1rem">
        <button bs-button click.trigger="stepper.next()">Next</button>
      </div>
    </bs-stepper-step>
    <bs-stepper-step number="2" label="Password">
      <bs-input label="Password" type="password"></bs-input>
      <div style="margin-top: 1rem">
        <button bs-button click.trigger="stepper.previous()">Previous</button>
        <button bs-button click.trigger="stepper.next()">Next</button>
      </div>
    </bs-stepper-step>
    <bs-stepper-step number="3" label="Validate">
      <div style="margin-top: 5rem">
        <button bs-button click.trigger="stepper.previous()">Previous</button>
        <button bs-button>Submit</button>
      </div>
    </bs-stepper-step>
  </bs-stepper>
  `,
  props: args,
});

export { Overview };
