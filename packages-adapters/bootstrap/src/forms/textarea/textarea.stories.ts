import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsTextarea } from '.';
import { selectControl } from '../../../../../.storybook/helpers';
import { SIZES } from '../../constants';

const meta: Meta = {
  title: 'Bootstrap / Forms / Textarea',
  component: BsTextarea,
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
