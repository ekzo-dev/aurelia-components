import { BREAKPOINTS } from '../../constants';

import { BsListGroup } from '.';

const meta = {
  title: 'Bootstrap / Components / List group',
  component: BsListGroup,
  render: () => ({
    template: `<ul bs-list-group="horizontal.bind: horizontal; flush.bind: flush; numbered.bind: numbered">
  <li bs-list-group-item="active: true">An item</li>
  <li bs-list-group-item>A second item</li>
  <li bs-list-group-item>A third item</li>
  <li bs-list-group-item>A fourth item</li>
  <li bs-list-group-item="disabled: true">And a fifth one</li>
</ul>`,
  }),
  argTypes: {
    horizontal: {
      control: 'select',
      options: ['', 'always', ...BREAKPOINTS],
    },
    flush: { control: 'boolean' },
    numbered: { control: 'boolean' },
  },
};

export default meta;

export const Overview = {
  args: {
    horizontal: '',
    flush: false,
    numbered: false,
  },
};

export const LinksAndButtons = {
  render: () => ({
    template: `<div bs-list-group="horizontal.bind: horizontal; flush.bind: flush; numbered.bind: numbered">
  <a bs-list-group-item="active: true; action: true" href="javascript: void(0)">An item</a>
  <a bs-list-group-item="action: true" href="javascript: void(0)">A second item</a>
  <button bs-list-group-item="action: true">A third item</button>
  <button bs-list-group-item="action: true">A fourth item</button>
  <button bs-list-group-item="disabled: true; action: true">And a fifth one</button>
</div>`,
  }),
  args: {
    horizontal: '',
    flush: false,
    numbered: false,
  },
};
