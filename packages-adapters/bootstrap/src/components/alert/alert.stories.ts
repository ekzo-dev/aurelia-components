import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsAlert } from '.';
import { BsCloseButton } from '../close-button';
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

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    innerHtml: 'A simple alert — check it out!',
    ...args,
  },
});

export const DismissibleExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCloseButton],
  template: `
    <bs-alert dismissible.bind="true">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    </bs-alert>
  `,
  props: {
    ...args,
  },
});

export const AdditionalContentExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsIcon],
  template: `
    <bs-alert>
        A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </bs-alert>

    <bs-alert variant="success">
        <h4 class="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr>
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
    </bs-alert>

    <bs-alert variant="danger" dismissible.bind="true">
       <bs-icon name="exclamation-triangle-fill" class="me-2"></bs-icon>An example danger alert with an icon
    </bs-alert>
  `,
  props: {
    ...args,
  },
});
