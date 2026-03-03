import { BsPagination } from '.';

const meta = {
  title: 'Bootstrap / Components / Pagination',
  component: BsPagination,
  render: () => ({
    template: `<bs-pagination size.bind="size">
  <bs-pagination-item>Previous</bs-pagination-item>
  <bs-pagination-item>1</bs-pagination-item>
  <bs-pagination-item>2</bs-pagination-item>
  <bs-pagination-item>3</bs-pagination-item>
  <bs-pagination-item>Next</bs-pagination-item>
</bs-pagination>`,
  }),
  argTypes: {
    size: {
      control: 'select',
      options: ['', 'sm', 'lg'],
    },
  },
};

export default meta;

export const Overview = {
  args: {
    size: '',
  },
};

export const DisabledAndActiveStates = {
  render: () => ({
    template: `<bs-pagination size.bind="size">
  <bs-pagination-item disabled>Previous</bs-pagination-item>
  <bs-pagination-item>1</bs-pagination-item>
  <bs-pagination-item active>2</bs-pagination-item>
  <bs-pagination-item>3</bs-pagination-item>
  <bs-pagination-item>Next</bs-pagination-item>
</bs-pagination>`,
  }),
  args: {
    size: '',
  },
};
