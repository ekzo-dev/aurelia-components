import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsModal } from '.';
import { BsButton } from '../button';

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
  props: {
    ...args,
  },
});
