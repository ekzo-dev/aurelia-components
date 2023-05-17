import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsListGroup, BsListGroupItem } from '.';
import { BREAKPOINTS, VARIANTS } from '../../constants';
import { selectControl } from '../../../../../.storybook/helpers';

const meta: Meta = {
  title: 'Bootstrap / Components / List group',
  component: BsListGroup,
  argTypes: {
    horizontal: selectControl(['', 'always', ...BREAKPOINTS]),
    // variant: selectControl(['', ...VARIANTS]),
  },
};
export default meta;

const Overview: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsListGroupItem],
  innerHtml: `
  <div bs-list-group-item="active: true">An item</div>
  <div bs-list-group-item>A second item</div>
  <div bs-list-group-item>A third item</div>
  <div bs-list-group-item>A fourth item</div>
  <div bs-list-group-item="disabled: true">And a fifth one</div>
  `,
  props: args,
});

const LinksAndButtons: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsListGroupItem],
  innerHtml: `
  <a bs-list-group-item="active: true; action: true" href="#">An item</a>
  <a bs-list-group-item="action: true">A second item</a>
  <button bs-list-group-item="action: true">A third item</button>
  <button bs-list-group-item="action: true">A fourth item</button>
  <button bs-list-group-item="disabled: true; action: true">And a fifth one</button>
  `,
  props: args,
});

export { Overview, LinksAndButtons };
