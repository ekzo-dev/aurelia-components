import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsInput } from '.';
import { SIZES } from '../../constants';
import { selectControl } from '../../../../../.storybook/helpers';

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
