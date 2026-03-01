import { BsCloseButton } from '.';

const meta = {
  title: 'Bootstrap / Components / Close button',
  component: BsCloseButton,
  render: () => ({
    template: `<button type="button" bs-close-button="white.bind: white"></button>`,
  }),
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    white: { control: 'boolean' },
  },
};

export default meta;

export const Overview = {
  args: {
    white: false,
  },
};
