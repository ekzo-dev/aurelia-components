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

export const Default: Story = (args) => ({
  props: {
    ...args,
  },
});

export const typesExample: Story = (args) => ({
  components: [BsSpinner],
  template: `
    <bs-spinner></bs-spinner>
    <bs-spinner type="grow"></bs-spinner>
  `,
  props: {
    ...args,
  },
});

export const colorsExample: Story = (args) => ({
  components: [BsSpinner],
  template: `
    <div>
    <bs-spinner variant="primary"></bs-spinner>
    <bs-spinner variant="secondary"></bs-spinner>
    <bs-spinner variant="success"></bs-spinner>
    <bs-spinner variant="danger"></bs-spinner>
    <bs-spinner variant="warning"></bs-spinner>
    <bs-spinner variant="info"></bs-spinner>
    <bs-spinner variant="light"></bs-spinner>
    <bs-spinner variant="dark"></bs-spinner>
    </div>

    <div>
    <bs-spinner type="grow" variant="primary"></bs-spinner>
    <bs-spinner type="grow" variant="secondary"></bs-spinner>
    <bs-spinner type="grow" variant="success"></bs-spinner>
    <bs-spinner type="grow" variant="danger"></bs-spinner>
    <bs-spinner type="grow" variant="warning"></bs-spinner>
    <bs-spinner type="grow" variant="info"></bs-spinner>
    <bs-spinner type="grow" variant="light"></bs-spinner>
    <bs-spinner type="grow" variant="dark"></bs-spinner>
    </div>

  `,
  props: {
    ...args,
  },
});

export const sizeExample: Story = (args) => ({
  components: [BsSpinner],
  template: `
    <div>
    <bs-spinner size="sm"></bs-spinner>
    <bs-spinner></bs-spinner>
    </div>
  `,
  props: {
    ...args,
  },
});

export const onButtonsExample: Story = (args) => ({
  components: [BsSpinner, BsButton],
  template: `
    <div>
      <bs-button type="button" disabled>
        <bs-spinner size="sm"></bs-spinner>
      </bs-button>
      <bs-button type="button" disabled>
        <bs-spinner size="sm"></bs-spinner> Loading...
      </bs-button>
    <div>

    <div class="mt-2">
      <bs-button type="button" variant="secondary" disabled>
        <bs-spinner type="grow" size="sm"></bs-spinner>
      </bs-button>
      <bs-button type="button" variant="secondary" disabled>
        <bs-spinner type="grow" size="sm"></bs-spinner> Loading...
      </bs-button>
    <div>
  `,
  props: {
    ...args,
  },
});
