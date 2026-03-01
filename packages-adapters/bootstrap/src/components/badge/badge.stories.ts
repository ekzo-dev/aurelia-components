import { BsBadge } from '.';

const meta = {
  title: 'Bootstrap / Components / Badge',
  component: BsBadge,
  render: () => ({
    template: `<bs-badge
      variant.bind='variant'
      pill.bind='pill'
    >
      \${content}
    </bs-badge>`,
  }),
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    pill: { control: 'boolean' },
    content: { control: 'text' },
  },
};

export default meta;

export const Overview = {
  args: {
    variant: 'primary',
    pill: false,
    content: 'NEW',
  },
};

export const Positioned = {
  render: () => ({
    template: `<button bs-button class="position-relative">
      INBOX
      <bs-badge pill.bind="pill" variant.bind="variant" class="position-absolute top-0 start-100 translate-middle">99+</bs-badge>
    </button>`,
  }),
  argTypes: {
    content: { control: false },
  },
  args: {
    variant: 'danger',
    pill: false,
  },
};
