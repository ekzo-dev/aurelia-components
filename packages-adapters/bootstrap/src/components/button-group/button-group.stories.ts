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

const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  innerHtml: `
<bs-button>Left</bs-button>
<bs-button>Middle</bs-button>
<bs-button>Right</bs-button>
`,
  props: args,
});

const ActiveExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  innerHtml: `
<bs-button active.bind="true">Active link</bs-button>
<bs-button>Link</bs-button>
<bs-button>Link</bs-button>
`,
  props: args,
});

const mixedStylesExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  innerHtml: `
<bs-button variant="danger">Left</bs-button>
<bs-button variant="warning">Middle</bs-button>
<bs-button variant="success">Right</bs-button>
  `,
  props: args,
});

const outlinedStylesExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  innerHtml: `
<bs-button outline.bind="true">Left</bs-button>
<bs-button outline.bind="true">Middle</bs-button>
<bs-button outline.bind="true">Right</bs-button>
  `,
  props: args,
});

const buttonToolbarExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
<bs-button-group class="m-2" vertical.bind="vertical" size.bind="size">
  <bs-button>1</bs-button>
  <bs-button>2</bs-button>
  <bs-button>3</bs-button>
  <bs-button>4</bs-button>
</bs-button-group>

<bs-button-group class="m-2" vertical.bind="vertical" size.bind="size">
  <bs-button variant="secondary">5</bs-button>
  <bs-button variant="secondary">6</bs-button>
  <bs-button variant="secondary">7</bs-button>
</bs-button-group>

<bs-button-group vertical.bind="vertical" size.bind="size">
  <bs-button variant="info">8</bs-button>
</bs-button-group>
  `,
  props: args,
});

const nastingExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton, BsDropdownMenu, BsDropdownToggle, BsDropdownItem],
  template: `
<bs-button-group vertical.bind="vertical">
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
  props: args,
});

const verticalExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton, BsDropdownMenu, BsDropdownToggle, BsDropdownItem],
  template: `
<div class="story-container">
<bs-button-group vertical.bind="vertical">
  <bs-button variant="dark">Button</bs-button>
  <bs-button variant="dark">Button</bs-button>
  <bs-button variant="dark">Button</bs-button>
  <bs-button variant="dark">Button</bs-button>
  <bs-button variant="dark">Button</bs-button>
  <bs-button variant="dark">Button</bs-button>
</bs-button-group>
</div>

<div class="story-container">
  <bs-button-group vertical.bind="vertical">
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
  props: args,
});

export { Default, ActiveExample, mixedStylesExample, outlinedStylesExample, buttonToolbarExample, nastingExample };
