import { Meta, Story } from '@storybook/aurelia';
import { BsNav, BsNavItem, BsNavLink } from '.';

import './nav.scss';

const meta: Meta = {
  title: 'Bootstrap / Components / Nav',
  component: BsNav,
} as Meta;
export default meta;

export const Default: Story = (args) => ({
  components: [BsNavItem, BsNavLink],
  props: {
    innerHtml: `
    <bs-nav-item>Item 1</bs-nav-item>
    <bs-nav-item>Item 2</bs-nav-item>
  `,
    type: 'pills',
    ...args,
  },
});

export const s2: Story = (args) => ({
  components: [BsNav, BsNavItem, BsNavLink],
  template: `
    <bs-nav width="w-50">
        <bs-nav-item>
            <bs-nav-link active.bind="true"><a href="#">Link</a></bs-nav-link>
        </bs-nav-item>
        <bs-nav-item>
            <bs-nav-link><a href="#">Link</a></bs-nav-link>
        </bs-nav-item>
    </bs-nav>
  `,
  props: {
    ...args,
  },
});
