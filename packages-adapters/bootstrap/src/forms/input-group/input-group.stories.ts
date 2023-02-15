import { Meta, Story } from '@storybook/aurelia';
import { BsInputGroup, BsInputGroupText } from '.';
import { BsInput } from '../input';
import { BsButton } from '../../components/button';

export default {
  title: 'Bootstrap / Forms / Input group',
  component: BsInputGroup,
} as Meta;

export const Default: Story = (args) => ({
  components: [BsInputGroupText, BsInput, BsButton],
  template: `
    <bs-input-group>
      <bs-input-group-text>Text</bs-input-group-text>
      <bs-button outline variant="secondary">Button</bs-button>
      <bs-input></bs-input>
      <bs-input></bs-input>
    </bs-input-group>
  `,
  props: {
    ...args,
  },
});
