import { BsModal } from '.';

const sizeOptions = ['sm', 'lg', 'xl'];
const fullscreenOptions = ['always', 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];

const meta = {
  title: 'Bootstrap / Components / Modal',
  component: BsModal,
  render: () => ({
    template: `<div>
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
</div>`,
  }),
  parameters: {
    actions: {
      handles: ['hide.bs.modal', 'hidden.bs.modal', 'hidePrevented.bs.modal', 'show.bs.modal', 'shown.bs.modal'],
    },
  },
  argTypes: {
    title: { control: 'text' },
    animation: { control: 'boolean' },
    centered: { control: 'boolean' },
    scrollable: { control: 'boolean' },
    size: {
      control: 'select',
      options: sizeOptions,
    },
    fullscreen: {
      control: 'select',
      options: fullscreenOptions,
    },
    backdrop: {
      control: 'select',
      options: [true, false, 'static'],
    },
    keyboard: { control: 'boolean' },
    focus: { control: 'boolean' },
  },
};

export default meta;

export const Overview = {
  args: {
    title: 'Modal title',
    animation: true,
    centered: false,
    scrollable: false,
    size: undefined,
    fullscreen: undefined,
    backdrop: true,
    keyboard: true,
    focus: true,
  },
};
