import { createComponentTemplate, Meta, Story } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { BsButton } from '../../components/button';
import { SIZES } from '../../constants';
import { BsInput } from '../input';

import { BsInputGroup, BsInputGroupText } from '.';

export default {
  title: 'Bootstrap / Forms / Input group',
  component: BsInputGroup,
  argTypes: {
    size: selectControl(['', ...SIZES]),
  },
} as Meta;

export const Overview: Story = (args) => ({
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
