import { createComponentTemplate, Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { disableControl, selectControl } from '../../../../../.storybook/helpers';

import { BsRadio, BsRadioGroup } from '.';

const meta: Meta = {
  title: 'Bootstrap / Forms / Radio',
  component: BsRadio,
  parameters: {
    actions: {
      handles: ['change', 'input'],
    },
  },
  argTypes: {
    mode: selectControl(['', 'button']),
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
};

export { Overview, RadioGroup };
