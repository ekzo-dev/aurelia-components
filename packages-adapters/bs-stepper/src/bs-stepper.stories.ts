import { BsStepper, BsStepperStep } from '.';

const meta = {
  title: 'BS stepper / Bootstrap stepper',
  component: BsStepper,
  render: () => ({
    components: [BsStepperStep],
    template: `<bs-stepper linear.bind="linear" animation.bind="animation" vertical.bind="vertical" component.ref="stepper">
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
      <bs-alert>Final step!</bs-alert>
      <div style="margin-top: 1rem">
        <button bs-button click.trigger="stepper.previous()">Previous</button>
        <button bs-button>Submit</button>
      </div>
    </bs-stepper-step>
  </bs-stepper>
  `,
  }),
  argTypes: {
    linear: { control: 'boolean' },
    animation: { control: 'boolean' },
    vertical: { control: 'boolean' },
  },
  parameters: {
    actions: {
      // TODO: bs-stepper events do not buddle, but Storybook catches events on the parent element (:
      handles: ['show.bs-stepper', 'shown.bs-stepper'],
    },
  },
};

export default meta;

export const Overview = {
  args: {},
};
