import { BREAKPOINTS, PLACEMENTS } from '../../constants';

import { BsOffcanvas } from './offcanvas';

const meta = {
  title: 'Bootstrap / Components / Offcanvas',
  component: BsOffcanvas,
  render: () => ({
    template: `<div>
    <button bs-button click.trigger="offcanvas.toggle()">Open offcanvas</button>
    <bs-offcanvas view-model.ref="offcanvas"
      title.bind="title"
      scroll.bind="scroll"
      responsive.bind="responsive"
      backdrop.bind="backdrop"
      placement.bind="placement"
      keyboard.bind="keyboard"
    >
        <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
          <button bs-button="secondary" bs-dropdown-toggle>Hide this way</button>
          <bs-dropdown-menu dark>
            <a bs-dropdown-item click.trigger="offcanvas.toggle()">Hide</a>
            <a bs-dropdown-item="disabled.bind: true">Disabled action</a>
        </bs-dropdown-menu>
    </bs-offcanvas>
</div>`,
  }),
  parameters: {
    actions: {
      handles: ['hide.bs.offcanvas', 'hidden.bs.offcanvas', 'show.bs.offcanvas', 'shown.bs.offcanvas'],
    },
  },
  argTypes: {
    title: { control: 'text' },
    scroll: { control: 'boolean' },
    responsive: {
      control: 'select',
      options: ['', ...BREAKPOINTS],
    },
    backdrop: {
      control: 'select',
      options: [true, false, 'static'],
    },
    placement: {
      control: 'select',
      options: PLACEMENTS,
    },
    keyboard: { control: 'boolean' },
  },
};

export default meta;

export const Overview = {
  args: {
    title: 'Offcanvas title',
    scroll: false,
    responsive: '',
    backdrop: true,
    placement: 'start',
    keyboard: true,
  },
};
