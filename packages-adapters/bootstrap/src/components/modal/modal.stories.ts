import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { BsButton } from '../button';

import { BsModal } from '.';

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
    backdrop: selectControl([true, false, 'static']),
  },
};

export default meta;

export const Overview: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
    <button bs-button click.trigger="modal.toggle()">Open modal</button>
    <bs-modal view-model.ref="modal"
      title.bind="title"
      animation.bind="animation"
      centered.bind="centered"
      scrollable.bind="scrollable"
      size.bind="size"
      fullscreen.bind="fullscreen"
      backdrop.bind="backdrop"
      keyboard.bind="keyboard"
      focus.bind="focus"
    >
      Modal body
    </bs-modal>
  `,
  props: args,
});
