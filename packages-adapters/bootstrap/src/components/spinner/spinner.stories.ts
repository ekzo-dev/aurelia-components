import { BsSpinner } from '.';

const meta = {
  title: 'Bootstrap / Components / Spinner',
  component: BsSpinner,
  render: () => ({
    template: `<bs-spinner type.bind="type" size.bind="size"></bs-spinner>`,
  }),
  argTypes: {
    type: {
      control: 'select',
      options: ['border', 'grow'],
    },
    size: {
      control: 'select',
      options: ['', 'sm'],
    },
  },
};

export default meta;

export const Overview = {
  args: {
    type: 'border',
    size: '',
  },
};

export const Buttons = {
  render: () => ({
    template: `<div>
<button bs-button disabled>
  <bs-spinner type.bind="type" size.bind="size"></bs-spinner>
</button>
<button bs-button disabled>
  <bs-spinner type.bind="type" size.bind="size"></bs-spinner> Loading...
</button>
</div>`,
  }),
  args: {
    type: 'border',
    size: 'sm',
  },
};
