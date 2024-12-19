import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { BREAKPOINTS, VARIANTS } from '../../constants';

import { BsTable } from '.';

const meta: Meta = {
  title: 'Bootstrap / Content / Table',
  component: BsTable,
  argTypes: {
    responsive: selectControl(['', 'always', ...BREAKPOINTS]),
    variant: selectControl(['', ...VARIANTS]),
    size: selectControl(['', 'sm']),
  },
};

export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  innerHtml: `
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
  `,
  props: args,
});

export { Overview };
