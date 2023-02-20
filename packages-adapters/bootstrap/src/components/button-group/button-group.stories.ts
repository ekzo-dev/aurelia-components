import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsButtonGroup } from '.';
import { BsButton } from '../button';
import './button-group.stories.scss';
import { BsDropdownItem, BsDropdownMenu, BsDropdownToggle } from '../dropdown';

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

/*export const checkboxButtonGroup : Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCheckbox, BsButtonGroup],
  template: `
    <bs-button-group class="me-2">
      <bs-checkbox class="btn-check" label="123">1</bs-checkbox>
      <bs-checkbox label="123">1</bs-checkbox>
      <bs-checkbox label="123">1</bs-checkbox>
    </bs-button-group>
  `,
  props: {
    ...args,
  },
});*/

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

export const sizeExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton, BsButtonGroup],
  template: `
    <bs-button-group class="story-container" size="lg">
      <bs-button outline.bind="true" variant="dark">Left</bs-button>
      <bs-button outline.bind="true" variant="dark">Middle</bs-button>
      <bs-button outline.bind="true" variant="dark">Right</bs-button>
    </bs-button-group>
    <bs-button-group class="story-container">
      <bs-button outline.bind="true" variant="dark">Left</bs-button>
      <bs-button outline.bind="true" variant="dark">Middle</bs-button>
      <bs-button outline.bind="true" variant="dark">Right</bs-button>
    </bs-button-group>
    <bs-button-group class="story-container" size="sm">
      <bs-button outline.bind="true" variant="dark">Left</bs-button>
      <bs-button outline.bind="true" variant="dark">Middle</bs-button>
      <bs-button outline.bind="true" variant="dark">Right</bs-button>
    </bs-button-group>
  `,
  props: {
    ...args,
  },
});

export const nastingExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton, BsButtonGroup, BsDropdownMenu, BsDropdownToggle, BsDropdownItem],
  template: `
    <bs-button-group>
      <bs-button>1</bs-button>
      <bs-button>2</bs-button>
      <bs-button-group>
      <bs-button bs-dropdown-toggle>Dropdown</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
      </bs-dropdown-menu>
      </bs-button-group>
      <bs-button-group>
      <bs-button bs-dropdown-toggle>Dropdown</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
      </bs-dropdown-menu>
      </bs-button-group>
    </bs-button-group>
  `,
  props: {
    ...args,
  },
});

export const verticalExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton, BsButtonGroup, BsDropdownMenu, BsDropdownToggle, BsDropdownItem],
  template: `
    <div class="story-container">
    <bs-button-group vertical.bind="true">
      <bs-button variant="dark">Button</bs-button>
      <bs-button variant="dark">Button</bs-button>
      <bs-button variant="dark">Button</bs-button>
      <bs-button variant="dark">Button</bs-button>
      <bs-button variant="dark">Button</bs-button>
      <bs-button variant="dark">Button</bs-button>
    </bs-button-group>
    </div>

    <div class="story-container">
      <bs-button-group vertical.bind="true">
      <bs-button>Button</bs-button>
      <bs-button>Button</bs-button>
      <bs-button-group>
      <bs-button bs-dropdown-toggle>Dropdown</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
      </bs-dropdown-menu>
      </bs-button-group>
      <bs-button>Button</bs-button>
      <bs-button>Button</bs-button>
      <bs-button-group>
      <bs-button bs-dropdown-toggle>Dropdown</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
      </bs-dropdown-menu>
      </bs-button-group>
      <bs-button-group>
      <bs-button bs-dropdown-toggle>Dropdown</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
      </bs-dropdown-menu>
      </bs-button-group>
      <bs-button-group>
      <bs-button bs-dropdown-toggle>Dropdown</bs-button>
      <bs-dropdown-menu>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
        <bs-dropdown-item>Dropdown link</bs-dropdown-item>
      </bs-dropdown-menu>
      </bs-button-group>
    </bs-button-group>
    </div>
  `,
  props: {
    ...args,
  },
});
