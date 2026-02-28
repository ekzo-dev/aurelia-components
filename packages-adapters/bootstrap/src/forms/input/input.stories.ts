import { BsInput } from '.';

const meta = {
  title: 'Bootstrap / Forms / Input',
  component: BsInput,
  render: () => ({
    template: `<bs-input value.bind='value'></bs-input>`,
  }),
  argTypes: {
    value: { control: 'text' },
  },
};

export default meta;

export const Overview = {
  args: {
    value: 'Hello from Storybook!',
  },
};
