import { VanillaJsoneditor } from './vanilla-jsoneditor';

const meta = {
  title: 'Svelte Jsoneditor / Vanilla Jsoneditor',
  component: VanillaJsoneditor,
  render: () => ({
    template: `<vanilla-jsoneditor
      theme.bind='theme'
      mode.bind='mode'
    ></vanilla-jsoneditor>`,
  }),
  argTypes: {
    theme: {
      control: 'select',
      options: ['default', 'dark'],
    },
    mode: {
      control: 'select',
      options: ['tree', 'text', 'table'],
    },
  },
};

export default meta;

export const Overview = {
  args: {
    onRenderValue: undefined, // must be reset here, otherwise editor breaks because callback required a return value
  },
};
