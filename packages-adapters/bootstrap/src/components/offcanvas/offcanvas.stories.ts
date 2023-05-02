import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsOffcanvas } from './offcanvas';
import { BsButton } from '../button';
import { BsCloseButton } from '../close-button';
import { BsDropdown, BsDropdownItem, BsDropdownMenu, BsDropdownToggle } from '../dropdown';
import { selectControl } from '../../../../../.storybook/helpers';
import { BREAKPOINTS, PLACEMENTS } from '../../constants';

const meta: Meta = {
  title: 'Bootstrap / Components / Offcanvas',
  component: BsOffcanvas,
  parameters: {
    actions: {
      handles: ['hide.bs.offcanvas', 'hidden.bs.offcanvas', 'show.bs.offcanvas', 'shown.bs.offcanvas'],
    },
  },
  args: {
    title: 'Offcanvas title',
  },
  argTypes: {
    responsive: selectControl(['', ...BREAKPOINTS]),
    placement: selectControl(PLACEMENTS),
  },
};
export default meta;

export const Overview: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsButton, BsCloseButton, BsDropdown, BsDropdownToggle, BsDropdownMenu, BsDropdownItem],
  template: `
    <bs-button click.trigger="offcanvas.toggle()">Open offcanvas</bs-button>
    <bs-offcanvas view-model.ref="offcanvas"
      title.bind="title"
      scroll.bind="scroll"
      static.bind="static"
      responsive.bind="responsive"
      backdrop.bind="backdrop"
      placement.bind="placement"
      keyboard.bind="keyboard"
      opened.bind="opened"
    >
        <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
          <bs-button variant="secondary" bs-dropdown-toggle>Hide this way</bs-button>
          <bs-dropdown-menu dark.bind="true">
            <bs-dropdown-item click.trigger="offcanvas.toggle()">Hide</bs-dropdown-item>
            <bs-dropdown-item disabled>Disabled action</bs-dropdown-item>
        </bs-dropdown-menu>

    </bs-offcanvas>
  `,
  props: args,
});
