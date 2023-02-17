import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsButtonGroup } from '.';
import { BsButton } from '../button';

const meta: Meta = {
  title: 'Bootstrap / Components / Button group',
  component: BsButtonGroup,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  props: {
    innerHtml: `
    <bs-button>Left</bs-button>
    <bs-button>Middle</bs-button>
    <bs-button>Right</bs-button>
  `,
    ...args,
  },
});

export const ActiveExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  props: {
    innerHtml: `
    <bs-button active.bind="true">Active link</bs-button>
    <bs-button>Link</bs-button>
    <bs-button>Link</bs-button>
  `,
    ...args,
  },
});

export const mixedStylesExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  props: {
    innerHtml: `
    <bs-button variant="danger">Left</bs-button>
    <bs-button variant="warning">Middle</bs-button>
    <bs-button variant="success">Right</bs-button>
  `,
    ...args,
  },
});

export const outlinedStylesExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  props: {
    innerHtml: `
      <bs-button outline.bind="true">Left</bs-button>
      <bs-button outline.bind="true">Middle</bs-button>
      <bs-button outline.bind="true">Right</bs-button>
  `,
    ...args,
  },
});

export const buttonToolbarExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton, BsButtonGroup],
  template: `
    <bs-button-group class="me-2">
      <bs-button>1</bs-button>
      <bs-button>2</bs-button>
      <bs-button>3</bs-button>
      <bs-button>4</bs-button>
      </bs-button-group>
    <bs-button-group class="me-2">
      <bs-button variant="secondary">5</bs-button>
      <bs-button variant="secondary">6</bs-button>
      <bs-button variant="secondary">7</bs-button>
      </bs-button-group>
    <bs-button-group>
      <bs-button variant="info">8</bs-button>
    </bs-button-group>
  `,
  props: {
    ...args,
  },
});
