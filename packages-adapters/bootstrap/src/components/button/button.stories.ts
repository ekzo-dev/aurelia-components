import { createComponentTemplate, Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { SIZES, VARIANTS } from '../../constants';

import { BsButton } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Button',
  component: BsButton,
  argTypes: {
    variant: selectControl([...VARIANTS, 'link', ...VARIANTS.map((v) => `outline-${v}`)]),
    size: selectControl(['', ...SIZES]),
  },
};

export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  template: `<button ${createComponentTemplate(BsButton)}>Button content</button>`,
  props: args,
});

export { Overview };
