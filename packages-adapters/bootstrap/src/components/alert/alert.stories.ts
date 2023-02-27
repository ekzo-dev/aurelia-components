import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsAlert } from '.';
import { BsIcon } from '../../icon';

const meta: Meta = {
  title: 'Bootstrap / Components / Alert',
  component: BsAlert,
  parameters: {
    actions: {
      handles: ['close.bs.alert', 'closed.bs.alert'],
    },
  },
};
export default meta;

const Default: Story = (args): StoryFnAureliaReturnType => ({
  innerHtml: 'A simple alert — check it out!',
  props: args,
});

const AdditionalContentExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsIcon],
  template: `
<bs-alert variant.bind="variant" dismissible.bind="dismissible">
    <h4 class="alert-heading">Well done!</h4>
    <p class="mb-0">A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.<br>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    <hr>
    <p>You successfully read this alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <p class="mb-0"><bs-icon name="exclamation-triangle-fill" class="me-2"></bs-icon>An example alert with an icon.</p>
</bs-alert>
  `,
});
AdditionalContentExample.args = {
  variant: 'danger',
  dismissible: true,
};

export { Default, AdditionalContentExample };
