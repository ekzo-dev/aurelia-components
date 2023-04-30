import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsModal } from '.';
import { BsButton } from '../button';

import { selectControl } from '../../../../../.storybook/helpers';

const sizeOptions = ['sm', 'lg', 'xl'];
const fullscreenOptions = ['always', 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];

const meta: Meta = {
  title: 'Bootstrap / Components / Modal',
  component: BsModal,
  parameters: {
    actions: {
      handles: ['hide.bs.modal', 'hidden.bs.modal', 'hidePrevented.bs.modal', 'show.bs.modal', 'shown.bs.modal'],
    },
  },
  args: {
    title: 'Modal title',
  },
  argTypes: {
    size: selectControl(sizeOptions),
    fullscreen: selectControl(fullscreenOptions),
  },
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
    <bs-button click.trigger="modal.toggle()">Open modal</bs-button>
    <bs-modal view-model.ref="modal"
      title.bind="title"
      animation.bind="animation"
      centered.bind="centered"
      scrollable.bind="scrollable"
      static.bind="static"
      size.bind="size"
      backdrop.bind="backdrop"
      fullscreen.bind="fullscreen"
      opened.bind="opened"
    >
      Modal body
    </bs-modal>
  `,
  props: args,
});
