import { Meta, Story, createComponentTemplate } from '@storybook/aurelia';
import { BsInputGroup, BsInputGroupText } from '.';
import { BsInput } from '../input';
import { BsButton } from '../../components/button';
import { inputSizeOptions } from '../../story';
import { selectControl } from '../../../../../.storybook/helpers';

export default {
  title: 'Bootstrap / Forms / Input group',
  component: BsInputGroup,
  argTypes: {
    size: selectControl(inputSizeOptions, 'inline-radio'),
  },
} as Meta;

export const Default: Story = (args) => ({
  components: [BsInputGroupText, BsInput, BsButton],
  innerHtml: `
      <bs-input-group-text>Text</bs-input-group-text>
      <bs-button outline variant="secondary" size.bind="size">Button</bs-button>
      ${createComponentTemplate(BsInput)}
      ${createComponentTemplate(BsInput)}
  `,
  props: {
    ...args,
  },
});
