import { Meta, Story } from '@storybook/aurelia';

import { BsPagination } from './pagination';

export default {
  title: 'Bootstrap / Components / Pagination',
  component: BsPagination,
  args: {
    currentPage: 1,
    totalItems: 100,
    pageSize: 1,
  },
} as Meta;

export const Default: Story = (args) => ({
  props: args,
});
