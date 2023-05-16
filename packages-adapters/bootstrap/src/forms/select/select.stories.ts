import { Meta, Story, extractArgTypes } from '@storybook/aurelia';
import { BsSelect } from '.';
import { SIZES } from '../../constants';
import { selectControl } from '../../../../../.storybook/helpers';

const meta: Meta = {
  title: 'Bootstrap / Forms / Select',
  component: BsSelect,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  args: {
    label: 'Label',
    options: { '1': 'One', '2': 'Two', '3': 'Three' },
  },
  argTypes: {
    bsSize: {
      ...extractArgTypes(BsSelect).bsSize,
      ...selectControl(['', ...SIZES]),
    },
  },
};
export default meta;

export const Overview: Story = (args) => ({
  props: args,
});
