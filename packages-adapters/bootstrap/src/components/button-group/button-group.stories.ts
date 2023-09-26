import './button-group.stories.scss';

import { createComponentTemplate, Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { SIZES } from '../../constants';
import { BsButton } from '../button';
import { BsDropdown, BsDropdownItem, BsDropdownMenu, BsDropdownToggle } from '../dropdown';

import { BsButtonGroup } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Button group',
  component: BsButtonGroup,
  argTypes: {
    size: selectControl(['', ...SIZES]),
  },
};

export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  innerHtml: `
<button bs-button>Left</button>
<button bs-button>Middle</button>
<button bs-button>Right</button>
`,
  props: args,
});

const MixedStyles: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  innerHtml: `
  <button bs-button="danger">Left</button>
  <button bs-button="warning">Middle</button>
  <button bs-button="success">Right</button>
  `,
  props: args,
});

const ButtonToolbar: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
<bs-button-group class="me-2" vertical.bind="vertical" size.bind="size">
  <button bs-button>1</button>
  <button bs-button>2</button>
  <button bs-button>3</button>
  <button bs-button>4</button>
</bs-button-group>

<bs-button-group class="me-2" vertical.bind="vertical" size.bind="size">
  <button bs-button="secondary">5</button>
  <button bs-button="secondary">6</button>
  <button bs-button="secondary">7</button>
</bs-button-group>

${createComponentTemplate(
  BsButtonGroup,
  `
  <button bs-button="info">8</button>
  `
)}`,
  props: args,
});

const Nesting: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton, BsDropdownMenu, BsDropdownToggle, BsDropdownItem, BsDropdown],
  template: `
${createComponentTemplate(
  BsButtonGroup,
  `
  <button bs-button>1</button>
  <button bs-button>2</button>
  <bs-button-group size.bind="size" bs-dropdown>
    <button bs-button bs-dropdown-toggle>Dropdown</button>
    <bs-dropdown-menu>
      <a bs-dropdown-item>Dropdown link</a>
      <a bs-dropdown-item>Dropdown link</a>
    </bs-dropdown-menu>
  </bs-button-group>
  `
)}`,
  props: args,
});

export { ButtonToolbar, MixedStyles, Nesting, Overview };
