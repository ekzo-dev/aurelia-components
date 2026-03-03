import 'bootstrap/dist/css/bootstrap-utilities.min.css';

import { VARIANTS } from '../../constants';

import { BsToast } from '.';

const meta = {
  title: 'Bootstrap / Components / Toast',
  component: BsToast,
  render: () => ({
    template: `<div>
    <button bs-button click.trigger="toast.show()">Open toast</button>
    <bs-toast-container class="position-fixed bottom-0 end-0 p-3">
      <bs-toast view-model.ref="toast"
        header.bind="header"
        animation.bind="animation"
        autohide.bind="autohide"
        delay.bind="delay"
        variant.bind="variant"
      >Hello, world! This is a toast message.</bs-toast>
    </bs-toast-container>
</div>`,
  }),
  parameters: {
    actions: {
      handles: ['hide.bs.toast', 'hidden.bs.toast', 'show.bs.toast', 'shown.bs.toast'],
    },
  },
  argTypes: {
    header: { control: 'text' },
    animation: { control: 'boolean' },
    autohide: { control: 'boolean' },
    delay: { control: 'number' },
    variant: {
      control: 'select',
      options: VARIANTS,
    },
  },
};

export default meta;

export const Overview = {
  args: {
    header: 'Toast',
    animation: false,
    autohide: false,
    delay: 2000,
    variant: undefined,
  },
};
