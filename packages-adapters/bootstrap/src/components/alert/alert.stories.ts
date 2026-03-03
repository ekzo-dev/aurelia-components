import { BsAlert } from '.';

const meta = {
  title: 'Bootstrap / Components / Alert',
  component: BsAlert,
  render: () => ({
    template: `<bs-alert
      variant.bind='variant'
      dismissible.bind='dismissible'
    >
      \${content}
    </bs-alert>`,
  }),
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    dismissible: { control: 'boolean' },
    content: { control: 'text' },
  },
};

export default meta;

export const Overview = {
  args: {
    variant: 'primary',
    dismissible: false,
    content: 'A simple alert — check it out!',
  },
};

export const AdditionalContent = {
  render: () => ({
    template: `<bs-alert
      variant.bind='variant'
      dismissible.bind='dismissible'
    >
      <h4 class="alert-heading">Well done!</h4>
      <p class="mb-0">A simple primary alert
      with <a href="#" target="_self" class="alert-link">an example link</a>.
      Give it a click if you like.<br>Whenever you need to, be sure
      to use margin utilities to keep things nice and tidy.</p>
      <hr>
      <p>You successfully read this alert message.
      This example text is going to run a bit longer so that you can see
      how spacing within an alert works with this kind of content.</p>
      <p class="mb-0"><bs-icon name="exclamation-triangle-fill" class="me-2"></bs-icon>An example alert with an icon.</p>
    </bs-alert>`,
  }),
  argTypes: {
    content: { control: false },
  },
  args: {
    variant: 'success',
    dismissible: true,
  },
};
