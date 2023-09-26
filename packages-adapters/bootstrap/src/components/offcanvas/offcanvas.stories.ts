import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';

import { selectControl } from '../../../../../.storybook/helpers';
import { BREAKPOINTS, PLACEMENTS } from '../../constants';
import { BsButton } from '../button';
import { BsCloseButton } from '../close-button';
import { BsDropdown, BsDropdownItem, BsDropdownMenu, BsDropdownToggle } from '../dropdown';

import { BsOffcanvas } from './offcanvas';

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
    <button bs-button click.trigger="offcanvas.toggle()">Open offcanvas</button>
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
          <button bs-button="secondary" bs-dropdown-toggle>Hide this way</button>
          <bs-dropdown-menu dark>
            <a bs-dropdown-item click.trigger="offcanvas.toggle()">Hide</a>
            <a bs-dropdown-item="disabled.bind: true">Disabled action</a>
        </bs-dropdown-menu>

    </bs-offcanvas>
  `,
  props: args,
});
