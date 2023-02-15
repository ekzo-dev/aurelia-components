import { Meta, Story } from '@storybook/aurelia';

import { BsTable } from './table';

export default {
  title: 'Bootstrap / Content / Table',
  component: BsTable,
  args: {},
} as Meta;

export const Default: Story = (args) => ({
  innerHtml: `
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>A</th>
          <th>B</th>
        </tr>
      </thead>
      <tbody>
        <tr repeat.for="row of rows">
          <th>\${$index + 1}</th>
          <td>\${row.a}</td>
          <td>\${row.b}</td>
        </tr>
      </tbody>
    </table>
  `,
  props: {
    ...args,
    rows: [{ a: 'a', b: 'b' }],
  },
});
