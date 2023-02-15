import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsButtonGroup } from '.';
import { BsButton } from '../button';

const meta: Meta = {
  title: 'Bootstrap / Components / Button group',
  component: BsButtonGroup,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  innerHtml: `
    <bs-button>Left</bs-button>
    <bs-button>Middle</bs-button>
    <bs-button>Right</bs-button>
  `,
  props: {
    ...args,
  },
});
