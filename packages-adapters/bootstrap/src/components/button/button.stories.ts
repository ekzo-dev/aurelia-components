import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsButton } from '.';
import { selectControl, defaultVariants, defaultButtonSizes, defaultButtonTypes } from '../../story';

const meta: Meta = {
  title: 'Bootstrap / Components / Button',
  component: BsButton,
  argTypes: {
    variant: selectControl(defaultVariants),
    size: selectControl(defaultButtonSizes, 'inline-radio'),
    type: selectControl(defaultButtonTypes, 'inline-radio'),
  },
};
export default meta;

const Default: Story = (args): StoryFnAureliaReturnType => ({
  innerHtml: 'Button content',
  props: args,
});

const FullWidth: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
<bs-button
    variant.bind="variant"
    outline.bind="outline"
    disabled.bind="disabled"
    active.bind="active"
    size.bind="size"
    toggle-state.bind="toggleState"
    type.bind="type"
    form.bind="form"
    class="d-grid"
>
Accept
</bs-button>
`,
  props: args,
});

export { Default, FullWidth };
