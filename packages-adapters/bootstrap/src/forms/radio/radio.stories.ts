import { createComponentTemplate, Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsRadio, BsRadioGroup } from '.';
import { disableControl } from '../../../../../.storybook/helpers';

const meta: Meta = {
  title: 'Bootstrap / Forms / Radio',
  component: BsRadio,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
};
export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  props: args,
});
Overview.args = {
  label: 'Default radio',
};

const RadioGroup: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsRadioGroup],
  template: createComponentTemplate(BsRadioGroup),
  props: args,
});

RadioGroup.args = {
  options: { '0': 'Default radio', '1': 'Default checked radio' },
  checked: '1',
};
RadioGroup.argTypes = {
  id: disableControl,
  title: disableControl,
  model: disableControl,
  value: disableControl,
};

export { Overview, RadioGroup };
