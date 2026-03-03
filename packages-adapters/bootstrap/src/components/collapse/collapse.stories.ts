import 'bootstrap/dist/css/bootstrap-utilities.min.css';

import { BsCollapse } from './collapse';

const meta = {
  title: 'Bootstrap / Components / Collapse',
  component: BsCollapse,
  render: () => ({
    template: `<div>
<button bs-button click.trigger="collapsed = !collapsed" class="mb-3">Toggle content</button>
<div bs-collapse="collapsed.bind: collapsed; horizontal.bind: horizontal">
  <bs-card>
    <bs-card-body>
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </bs-card-body>
  </bs-card>
</div>
</div>`,
  }),
  parameters: {
    actions: {
      handles: ['hide.bs.collapse', 'hidden.bs.collapse', 'show.bs.collapse', 'shown.bs.collapse'],
    },
  },
  argTypes: {
    collapsed: { control: 'boolean' },
    horizontal: { control: 'boolean' },
  },
};

export default meta;

export const Overview = {
  args: {
    collapsed: true,
    horizontal: false,
  },
};
