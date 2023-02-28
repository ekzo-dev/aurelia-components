import { Meta, Story } from '@storybook/aurelia';
import { BsSpinner } from '.';
import { BsButton } from '../button';

export default {
  title: 'Bootstrap / Components / Spinner',
  component: BsSpinner,
  args: {
    type: 'border',
    variant: '',
    size: '',
  },
} as Meta;

const Default: Story = (args) => ({
  props: args,
});
Default.args = {
  size: 'sm',
};

const onButtons: Story = (args) => ({
  components: [BsSpinner, BsButton],
  template: `
<div>
  <bs-button type="button" variant.bind="variant" disabled>
    <bs-spinner type.bind="type" size.bind="size"></bs-spinner>
  </bs-button>
  <bs-button type="button" variant.bind="variant" disabled>
    <bs-spinner type.bind="type" size.bind="size"></bs-spinner> Loading...
  </bs-button>
<div>
  `,
  props: args,
});
onButtons.args = {
  size: 'sm',
  variant: 'primary',
};

export { Default, onButtons };
