import { createComponentTemplate, Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { BREAKPOINTS } from '../../constants';

import { BsListGroup, BsListGroupItem } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / List group',
  component: BsListGroup,
  argTypes: {
    horizontal: selectControl(['', 'always', ...BREAKPOINTS]),
  },
};

export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsListGroupItem],
  template: `<ul ${createComponentTemplate(BsListGroup)}>
  <li bs-list-group-item="active: true">An item</li>
  <li bs-list-group-item>A second item</li>
  <li bs-list-group-item>A third item</li>
  <li bs-list-group-item>A fourth item</li>
  <li bs-list-group-item="disabled: true">And a fifth one</li>
</ul>
  `,
  props: args,
});

const LinksAndButtons: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsListGroupItem],
  template: `<div ${createComponentTemplate(BsListGroup)}>
  <a bs-list-group-item="active: true; action: true" href="javascript: void(0)">An item</a>
  <a bs-list-group-item="action: true" href="javascript: void(0)">A second item</a>
  <button bs-list-group-item="action: true">A third item</button>
  <button bs-list-group-item="action: true">A fourth item</button>
  <button bs-list-group-item="disabled: true; action: true">And a fifth one</button>
</div>
  `,
  props: args,
});

// eslint-disable-next-line simple-import-sort/exports
export { Overview, LinksAndButtons };
