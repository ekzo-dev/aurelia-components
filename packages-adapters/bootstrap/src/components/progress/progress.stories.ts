import { VARIANTS } from '../../constants';

import { BsProgress } from '.';

const meta = {
  title: 'Bootstrap / Components / Progress',
  component: BsProgress,
  render: () => ({
    template: `<bs-progress
      value.bind="value"
      label.bind="label"
      background.bind="background"
      striped.bind="striped"
      animated.bind="animated"
    ></bs-progress>`,
  }),
  argTypes: {
    value: { control: 'number' },
    label: { control: 'text' },
    background: {
      control: 'select',
      options: VARIANTS,
    },
    striped: { control: 'boolean' },
    animated: { control: 'boolean' },
  },
};

export default meta;

export const Overview = {
  args: {
    value: 30,
    label: 'Label',
    background: undefined,
    striped: false,
    animated: false,
  },
};
