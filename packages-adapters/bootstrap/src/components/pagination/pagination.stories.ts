import { Meta, Story } from '@storybook/aurelia';

import { BsPagination, BsPaginationItem } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Pagination',
  component: BsPagination,
};

export default meta;

const Overview: Story = (args) => ({
  props: args,
  components: [BsPaginationItem],
  innerHtml: `
  <bs-pagination-item>Previous</bs-pagination-item>
  <bs-pagination-item>1</bs-pagination-item>
  <bs-pagination-item>2</bs-pagination-item>
  <bs-pagination-item>3</bs-pagination-item>
  <bs-pagination-item>Next</bs-pagination-item>
  `,
});

const DisabledAndActiveStates: Story = (args) => ({
  props: args,
  components: [BsPaginationItem],
  innerHtml: `
  <bs-pagination-item disabled>Previous</bs-pagination-item>
  <bs-pagination-item>1</bs-pagination-item>
  <bs-pagination-item active>2</bs-pagination-item>
  <bs-pagination-item>3</bs-pagination-item>
  <bs-pagination-item>Next</bs-pagination-item>
  `,
});

export { DisabledAndActiveStates, Overview };
