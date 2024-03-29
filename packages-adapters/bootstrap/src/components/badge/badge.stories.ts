import 'bootstrap/dist/css/bootstrap-utilities.min.css';

import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { VARIANTS } from '../../constants';
import { BsButton } from '../button';

import { BsBadge } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Badge',
  component: BsBadge,
  argTypes: {
    variant: selectControl(VARIANTS),
  },
};

export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  innerHtml: 'NEW',
  props: args,
});

const Positioned: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton],
  template: `
<button bs-button class="position-relative">
  INBOX
  <bs-badge pill.bind="pill" variant.bind="variant" class="position-absolute top-0 start-100 translate-middle">99+</bs-badge>
</button>
  `,
  props: args,
});

Positioned.args = {
  variant: 'danger',
  pill: false,
};

export { Overview, Positioned };
