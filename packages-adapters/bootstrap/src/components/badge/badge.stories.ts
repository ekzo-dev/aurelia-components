import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsBadge } from '.';
import { BsButton } from '../button';

const meta: Meta = {
  title: 'Bootstrap / Components / Badge',
  component: BsBadge,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  props: {
    ...args,
    innerHtml: 'NEW',
  },
});

export const PillExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsBadge],
  template: `
  <bs-badge pill.bind="true">Pill</bs-badge>
  `,
  props: {
    pill: true,
    ...args,
  },
});

export const ColorsExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsBadge],
  template: `
  <bs-badge>Primary</bs-badge>
  <bs-badge variant="secondary">Secondary</bs-badge>
  <bs-badge variant="success">Success</bs-badge>
  <bs-badge variant="danger">Danger</bs-badge>
  <bs-badge variant="warning">Warning</bs-badge>
  <bs-badge variant="info">Info</bs-badge>
  <bs-badge variant="light">Light</bs-badge>
  <bs-badge variant="dark">Dark</bs-badge>
  `,
  props: {
    pill: true,
    ...args,
  },
});

export const PositioningExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsBadge, BsButton],
  template: `
  <bs-button>INBOX</bs-button><bs-badge pill.bind="true" variant="danger" style="position: relative; top: -15px; left: -15px;">99+</bs-badge>
  <bs-button class="me-4">Notifications <bs-badge variant="secondary">4</bs-badge></bs-button>
  `,
  props: {
    pill: true,
    ...args,
  },
});
