import { Meta, Story, createComponentTemplate } from '@storybook/aurelia';
import { BsNav, BsNavItem, BsNavLink } from '.';
import { selectControl } from '../../story';

import './nav.scss';
import '../dropdown/dropdown.scss';

import { InlinePosition } from '../../forms/checkbox/checkbox.stories';
import { BsDropdown, BsDropdownItem, BsDropdownMenu, BsDropdownToggle } from '../dropdown';
import { BsButton } from '../button';

const navTypeOptions = <const>['tabs', 'pills'];
const navFillOptions = <const>['fill', 'justified'];

const meta: Meta = {
  title: 'Bootstrap / Components / Nav',
  component: BsNav,
  argTypes: {
    type: selectControl(navTypeOptions, 'inline-radio'),
    fill: selectControl(navFillOptions, 'inline-radio'),
  },
} as Meta;
export default meta;

//todo dropdown-menu => move down (offset)
const Default: Story = (args) => ({
  components: [BsNavItem, BsNavLink, BsButton, BsDropdown, BsDropdownMenu, BsDropdownToggle, BsDropdownItem],
  innerHtml: `
<bs-nav-item>
    <bs-nav-link active><a href="#" target="_self">Active</a></bs-nav-link>
</bs-nav-item>
<bs-nav-item><bs-nav-link>
      <div bs-dropdown="center: false;">
        <bs-button bs-dropdown-toggle variant="">Dropdown</bs-button>
         <bs-dropdown-menu auto-close align="start">
          <bs-dropdown-item>Action</bs-dropdown-item>
          <bs-dropdown-item>Another action</bs-dropdown-item>
          <bs-dropdown-item disabled>Disabled action</bs-dropdown-item>
        </bs-dropdown-menu>
      </div></bs-nav-link>
</bs-nav-item>
        <bs-nav-item>
            <bs-nav-link><a href="#" target="_self">Much longer nav link</a></bs-nav-link>
        </bs-nav-item>
<bs-nav-item>
    <bs-nav-link><a href="#" target="_self">Link</a></bs-nav-link>
</bs-nav-item>
<bs-nav-item>
    <bs-nav-link disabled><a href="#" target="_self">Link</a></bs-nav-link>
</bs-nav-item>
`,
  props: args,
});

const FlexStyles: Story = (args) => ({
  components: [BsNav, BsNavItem, BsNavLink],
  template: `
<bs-nav type="pills"  class="mb-3">
    <bs-nav-item>
            <bs-nav-link active><a href="#" target="_self">Active</a></bs-nav-link>
        </bs-nav-item>
        <bs-nav-item>
            <bs-nav-link><a href="#" target="_self">Much longer nav link</a></bs-nav-link>
        </bs-nav-item>
        <bs-nav-item>
            <bs-nav-link><a href="#" target="_self">Link</a></bs-nav-link>
        </bs-nav-item>
        <bs-nav-item>
            <bs-nav-link disabled><a href="#" target="_self">Link</a></bs-nav-link>
        </bs-nav-item>
</bs-nav>
<bs-nav type="pills"  class="justify-content-end mb-3">
    <bs-nav-item>
            <bs-nav-link active><a href="#" target="_self">Active</a></bs-nav-link>
        </bs-nav-item>
        <bs-nav-item>
            <bs-nav-link><a href="#" target="_self">Much longer nav link</a></bs-nav-link>
        </bs-nav-item>
        <bs-nav-item>
            <bs-nav-link><a href="#" target="_self">Link</a></bs-nav-link>
        </bs-nav-item>
        <bs-nav-item>
            <bs-nav-link disabled><a href="#" target="_self">Link</a></bs-nav-link>
        </bs-nav-item>
</bs-nav>
<bs-nav type="pills" class="flex-column" style="width: 8em;">
    <bs-nav-item>
            <bs-nav-link active><a href="#" target="_self">Active</a></bs-nav-link>
        </bs-nav-item>
        <bs-nav-item>
            <bs-nav-link><a href="#" target="_self">Much longer nav link</a></bs-nav-link>
        </bs-nav-item>
        <bs-nav-item>
            <bs-nav-link><a href="#" target="_self">Link</a></bs-nav-link>
        </bs-nav-item>
        <bs-nav-item>
            <bs-nav-link disabled><a href="#" target="_self">Link</a></bs-nav-link>
        </bs-nav-item>
</bs-nav>`,

  props: args,
});
FlexStyles.argTypes = {
  fill: { table: { disable: true } },
  type: { table: { disable: true } },
};

export { Default, FlexStyles };
