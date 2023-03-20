import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsButton } from '.';
import { selectControl, variantOptions, buttonSizesOptions, buttonTypesOptions } from '../../story';

const meta: Meta = {
  title: 'Bootstrap / Components / Button',
  component: BsButton,
  argTypes: {
    variant: selectControl(variantOptions),
    size: selectControl(buttonSizesOptions, 'inline-radio'),
    type: selectControl(buttonTypesOptions, 'inline-radio'),
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
