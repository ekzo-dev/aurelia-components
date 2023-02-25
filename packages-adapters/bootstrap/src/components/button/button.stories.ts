import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsButton } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Button',
  component: BsButton,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    innerHtml: 'Button content',
    ...args,
  },
});

export const colorsExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
    <bs-button>Primary (default)</bs-button>
    <bs-button variant="secondary" class="m-2">Secondary</bs-button>
    <bs-button variant="success" class="m-2">Success</bs-button>
    <bs-button variant="danger" class="m-2">Danger</bs-button>
    <bs-button variant="warning" class="m-2">Warning</bs-button>
    <bs-button variant="info" class="m-2">Info</bs-button>
    <bs-button variant="light" class="m-2">Light</bs-button>
    <bs-button variant="dark" class="m-2">Dark</bs-button>
    `,
  props: {
    ...args,
  },
});

export const outlineExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
    <bs-button outline.bind="true">Primary (default)</bs-button>
    <bs-button outline.bind="true" variant="secondary" class="m-2">Secondary</bs-button>
    <bs-button outline.bind="true" variant="success" class="m-2">Success</bs-button>
    <bs-button outline.bind="true" variant="danger" class="m-2">Danger</bs-button>
    <bs-button outline.bind="true" variant="warning" class="m-2">Warning</bs-button>
    <bs-button outline.bind="true" variant="info" class="m-2">Info</bs-button>
    <bs-button outline.bind="true" variant="light" class="m-2">Light</bs-button>
    <bs-button outline.bind="true" variant="dark" class="m-2">Dark</bs-button>
    `,
  props: {
    ...args,
  },
});

export const sizeExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
    <bs-button size="lg" class="align-bottom">Large size</bs-button>
    <bs-button class="align-bottom">Default size</bs-button>
    <bs-button size="sm">Small size</bs-button>
    `,
  props: {
    ...args,
  },
});

export const toggleStateExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
    <bs-button>Normal</bs-button>
    <bs-button active.bind="true">Active</bs-button>
    <bs-button disabled.bind="true">Disabled</bs-button>
    `,
  props: {
    ...args,
  },
});

export const fullWidthExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
  <bs-button class="d-grid">Accept</bs-button>
    `,
  props: {
    ...args,
  },
});
