import { BsTable } from '.';

const meta = {
  title: 'Bootstrap / Content / Table',
  component: BsTable,
  render: () => ({
    template: `<bs-table
      bordered.bind='bordered'
      striped.bind='striped'
      striped-columns.bind='stripedColumns'
      hover.bind='hover'
      borderless.bind='borderless'
      size.bind='size'
      variant.bind='variant'
      responsive.bind='responsive'
    >
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </bs-table>`,
  }),
  argTypes: {
    bordered: { control: 'boolean' },
    striped: { control: 'boolean' },
    stripedColumns: { control: 'boolean' },
    hover: { control: 'boolean' },
    borderless: { control: 'boolean' },
    size: {
      control: 'select',
      options: [undefined, 'sm'],
    },
    variant: {
      control: 'select',
      options: [undefined, 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    responsive: {
      control: 'select',
      options: [undefined, 'always', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
  },
};

export default meta;

export const Overview = {
  args: {},
};
