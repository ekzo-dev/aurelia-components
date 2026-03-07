import { Sortable } from '.';

const meta = {
  title: 'SortableJS / Sortable',
  component: Sortable,
  render: () => ({
    template: `<div sortable.bind="options">
      <div class="sortable-item">Item 1</div>
      <div class="sortable-item">Item 2</div>
      <div class="sortable-item">Item 3</div>
      <div class="sortable-item">Item 4</div>
      <div class="sortable-item">Item 5</div>
    </div>
    <style>
      .sortable-item {
        padding: 12px 16px;
        margin: 8px 0;
        background: #f0f0f0;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: move;
        user-select: none;
      }
      .sortable-item:hover {
        background: #e8e8e8;
      }
    </style>`,
  }),
  argTypes: {
    options: { control: 'object' },
  },
};

export default meta;

export const Overview = {
  args: {
    options: {},
  },
};
