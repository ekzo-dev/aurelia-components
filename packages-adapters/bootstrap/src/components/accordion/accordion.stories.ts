import { BsAccordion } from '.';

const meta = {
  title: 'Bootstrap / Components / Accordion',
  component: BsAccordion,
  render: () => ({
    template: `<bs-accordion
      flush.bind='flush'
      always-open.bind='alwaysOpen'
    >
      <bs-accordion-item header="Accordion Item #1" lazy>
        This is the first item's accordion body.
      </bs-accordion-item>
      <bs-accordion-item header="Accordion Item #2">
        This is the second item's accordion body.
      </bs-accordion-item>
      <bs-accordion-item header="Accordion Item #3" collapsed.bind="false">
        This is the third item's accordion body.
      </bs-accordion-item>
    </bs-accordion>`,
  }),
  argTypes: {
    flush: { control: 'boolean' },
    alwaysOpen: { control: 'boolean' },
  },
};

export default meta;

export const Overview = {
  args: {
    flush: false,
    alwaysOpen: false,
  },
};
