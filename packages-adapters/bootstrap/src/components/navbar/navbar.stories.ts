import { Meta, Story, createComponentTemplate } from '@storybook/aurelia';
import { BsNavbar, BsNavbarNav, BsNavbarBrand, BsNavbarText } from '.';
import { BsNavItem, BsNavLink } from '../nav';
import { BsDropdown, BsDropdownItem, BsDropdownMenu, BsDropdownToggle } from '../dropdown';

import './navbar.scss';
import '../nav/nav.scss';
import '../dropdown/dropdown.scss';

import { selectControl, variantOptions } from '../../story';

const expandOptions = <const>['sm', 'md', 'lg', 'xl', 'xxl'];

const meta: Meta = {
  title: 'Bootstrap / Components / Navbar',
  component: BsNavbar,
  argTypes: {
    expand: selectControl(expandOptions),
    variant: selectControl(variantOptions),
  },
  args: {
    variant: 'light',
  },
} as Meta;
export default meta;

const Default: Story = (args) => ({
  components: [
    BsNavbarBrand,
    BsNavbarNav,
    BsNavbarText,
    BsNavItem,
    BsNavLink,
    BsDropdown,
    BsDropdownMenu,
    BsDropdownToggle,
    BsDropdownItem,
  ],
  template: createComponentTemplate(
    BsNavbar,
    `
<div class="container-fluid">
${createComponentTemplate(BsNavbarBrand, '<a href="#" target="_self">Navbar</a>')}
${createComponentTemplate(
  BsNavbarNav,
  `
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
    </bs-nav-item>`
)}
${createComponentTemplate(BsNavbarText, 'Navbar text with an inline element ')}
</div>
`
  ),
  props: args,
});

export { Default };
