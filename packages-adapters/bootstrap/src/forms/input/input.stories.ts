import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { SIZES } from '../../constants';

import { BsInput } from '.';

const meta: Meta = {
  title: 'Bootstrap / Forms / Input',
  component: BsInput,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  args: {
    label: 'Label',
  },
  argTypes: {
    size: selectControl(['', ...SIZES]),
  },
};

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  props: args,
});

export default meta;
export { Overview };
