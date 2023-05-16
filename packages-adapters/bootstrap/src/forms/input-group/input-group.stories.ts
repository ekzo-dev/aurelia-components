import { Meta, Story, createComponentTemplate } from '@storybook/aurelia';
import { BsInputGroup, BsInputGroupText } from '.';
import { BsInput } from '../input';
import { BsButton } from '../../components/button';
import { SIZES } from '../../constants';
import { selectControl } from '../../../../../.storybook/helpers';

export default {
  title: 'Bootstrap / Forms / Input group',
  component: BsInputGroup,
  argTypes: {
    size: selectControl(['', ...SIZES]),
  },
} as Meta;

export const Default: Story = (args) => ({
  components: [BsInputGroupText, BsInput, BsButton],
  innerHtml: `
      <bs-input-group-text>Text</bs-input-group-text>
      <button bs-button="outline-secondary">Button</button>
      ${createComponentTemplate(BsInput)}
      ${createComponentTemplate(BsInput)}
  `,
  props: {
    ...args,
  },
});
