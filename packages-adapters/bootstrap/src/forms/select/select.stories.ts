import { extractArgTypes, Meta, Story } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { SIZES } from '../../constants';

import { BsSelect } from '.';

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
    options: [
      { value: '1', text: 'One' },
      { value: '2', text: 'Two' },
      { value: '3', text: 'Three' },
    ],
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
