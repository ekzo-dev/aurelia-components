import { BsButton } from '.';

const meta = {
  title: 'Bootstrap / Components / Button',
  component: BsButton,
  render: () => ({
    template: `<button type="button"
      bs-button.bind='variant'
      size.bind='size'
      disabled.bind='disabled'
      active.bind='active'
      toggle-state.bind='toggleState'
    >
      \${content}
    </button>`,
  }),
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link',
        'outline-primary',
        'outline-secondary',
        'outline-success',
        'outline-danger',
        'outline-warning',
        'outline-info',
        'outline-light',
        'outline-dark',
      ],
    },
    size: {
      control: 'select',
      options: [undefined, 'sm', 'lg'],
    },
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
    toggleState: { control: 'boolean' },
    content: { control: 'text' },
  },
};

export default meta;

export const Overview = {
  args: {
    variant: 'primary',
    content: 'Button content',
  },
};
