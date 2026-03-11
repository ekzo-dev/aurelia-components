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

// TODO: step list breaks when changing args. Probably an issue of aurelia-storybook.
export const DynamicSteps = {
  render: () => ({
    components: [BsStepperStep],
    template: `
    <div style="margin-bottom: 1rem">
      <button bs-button click.trigger="addStep(steps)">Add Step</button>
      <button bs-button variant="danger" click.trigger="removeStep(steps)" disabled.bind="steps.length <= 2">Remove Last Step</button>
      <span style="margin-left: 1rem">Total steps: \${steps.length}</span>
    </div>

    <bs-stepper linear.bind="linear" animation.bind="animation" vertical.bind="vertical" component.ref="stepper">
      <bs-stepper-step repeat.for="step of steps" number.bind="step.number" label.bind="step.label">
        <h4>\${step.label}</h4>
        <p>\${step.content}</p>
        <div style="margin-top: 1rem">
          <button bs-button click.trigger="stepper.previous()" if.bind="!$first">Previous</button>
          <button bs-button click.trigger="stepper.next()" if.bind="!$last">Next</button>
          <button bs-button if.bind="$last">Complete</button>
        </div>
      </bs-stepper-step>
    </bs-stepper>`,
    props: {
      steps: [
        { number: '1', label: 'Step 1', content: 'This is the first step' },
        { number: '2', label: 'Step 2', content: 'This is the second step' },
        { number: '3', label: 'Step 3', content: 'This is the third step' },
      ],
      addStep: (steps: any[]) => {
        const newStepNumber = steps.length + 1;

        steps.push({
          number: newStepNumber.toString(),
          label: `Step ${newStepNumber}`,
          content: `This is step ${newStepNumber}`,
        });
      },
      removeStep: (steps: any[]) => {
        if (steps.length > 2) {
          steps.pop();
        }
      },
    },
  }),
};
