import { BsInputGroup } from '.';

const meta = {
  title: 'Bootstrap / Forms / Input group',
  component: BsInputGroup,
  render: () => ({
    template: `<bs-input-group size.bind='size'>
      <bs-input-group-text>Text</bs-input-group-text>
      <button bs-button="outline-secondary">Button</button>
      <bs-input></bs-input>
    </bs-input-group>`,
  }),
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'lg'],
    },
  },
};

export default meta;

export const Overview = {
  args: {},
};
