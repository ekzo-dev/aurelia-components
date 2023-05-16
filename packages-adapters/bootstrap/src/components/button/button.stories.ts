import { createComponentTemplate, Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsButton } from '.';
import { BUTTON_VARIANTS, SIZES } from '../../constants';
import { selectControl } from '../../../../../.storybook/helpers';

const meta: Meta = {
  title: 'Bootstrap / Components / Button',
  component: BsButton,
  argTypes: {
    variant: selectControl(BUTTON_VARIANTS),
    size: selectControl(['', ...SIZES]),
  },
};
export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  template: `<button ${createComponentTemplate(BsButton)}>Button content</button>`,
  props: args,
});

export { Overview };
