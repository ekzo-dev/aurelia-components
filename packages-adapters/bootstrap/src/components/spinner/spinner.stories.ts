import { Meta, Story } from '@storybook/aurelia';
import { BsSpinner } from '.';
import { BsButton } from '../button';
import { VARIANTS } from '../../constants';
import { selectControl } from '../../../../../.storybook/helpers';

const typeOptions = <const>['border', 'grow'];
const sizeOptions = <const>['sm'];

export default {
  title: 'Bootstrap / Components / Spinner',
  component: BsSpinner,
  argTypes: {
    variant: selectControl(VARIANTS),
    type: selectControl(typeOptions, 'inline-radio'),
    size: selectControl(sizeOptions),
  },
} as Meta;

const Default: Story = (args) => ({
  props: args,
});

const onButtons: Story = (args) => ({
  components: [BsSpinner, BsButton],
  template: `
<div>
  <bs-button type="button" disabled>
    <bs-spinner type.bind="type" size.bind="size"></bs-spinner>
  </bs-button>
  <bs-button type="button" disabled>
    <bs-spinner type.bind="type" size.bind="size"></bs-spinner> Loading...
  </bs-button>
<div>
  `,
  props: args,
});
onButtons.args = {
  variant: 'primary',
};

export { Default, onButtons };
