import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsToast, BsToastContainer } from '.';
import { BsButton } from '../button';
import { BsCloseButton } from '../close-button';
import { variantOptions } from '../../story';

import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import { selectControl } from '../../../../../.storybook/helpers';

const meta: Meta = {
  title: 'Bootstrap / Components / Toast',
  component: BsToast,
  parameters: {
    actions: {
      handles: ['hide.bs.toast', 'hidden.bs.toast', 'show.bs.toast', 'shown.bs.toast'],
    },
  },
  args: {
    header: 'Toast',
  },
  argTypes: {
    variant: selectControl(variantOptions),
  },
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton, BsCloseButton, BsToastContainer],
  template: `
    <bs-button click.trigger="toast.show()">Open toast</bs-button>
    <bs-toast-container class="position-fixed bottom-0 end-0 p-3">
      <bs-toast view-model.ref="toast"
        header.bind="header"
        animation.bind="animation"
        autohide.bind="autohide"
        delay.bind="delay"
        variant.bind="variant"
      >Hello, world! This is a toast message.</bs-toast>
    </bs-toast-container>
  `,
  props: args,
});
