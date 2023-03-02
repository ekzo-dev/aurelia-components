import { Meta, Story, StoryFnAureliaReturnType, createComponentTemplate } from '@storybook/aurelia';
import { BsAlert } from '.';
import { BsIcon } from '../../icon';
import { selectControl, defaultVariants } from '../../story';

const meta: Meta = {
  title: 'Bootstrap / Components / Alert',
  component: BsAlert,
  parameters: {
    actions: {
      handles: ['close.bs.alert', 'closed.bs.alert'],
    },
  },
  argTypes: {
    variant: selectControl(defaultVariants),
  },
};
export default meta;

const Default: Story = (args): StoryFnAureliaReturnType => ({
  innerHtml: 'A simple alert — check it out!',
  props: args,
});

const AdditionalContent: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsIcon],
  template: `
${createComponentTemplate(
  BsAlert,
  `
    <h4 class="alert-heading">Well done!</h4>
    <p class="mb-0">A simple primary alert
    with <a href="#" class="alert-link">an example link</a>.
    Give it a click if you like.<br>Whenever you need to, be sure
    to use margin utilities to keep things nice and tidy.</p>
    <hr>
    <p>You successfully read this alert message.
    This example text is going to run a bit longer so that you can see
    how spacing within an alert works with this kind of content.</p>
    <p class="mb-0"><bs-icon name="exclamation-triangle-fill" class="me-2"></bs-icon>An example alert with an icon.</p>
`
)}
`,
  props: args,
});
AdditionalContent.args = {
  variant: 'success',
  dismissible: true,
};

export { Default, AdditionalContent };
