import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsAccordion, BsAccordionItem } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Accordion',
  component: BsAccordion,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsAccordionItem],
  props: {
    innerHtml: `
    <bs-accordion-item header="Accordion Item #1" collapsed.bind="false">
        <strong>This is the first item's accordion body.</strong>
        It is shown by default.
    </bs-accordion-item>
    <bs-accordion-item header="Accordion Item #2">
        <strong>This is the second item's accordion body.</strong>
        It is hidden by default.
    </bs-accordion-item>
    <bs-accordion-item header="Accordion Item #3">
        <strong>This is the third item's accordion body.</strong>
        It is hidden by default
    </bs-accordion-item>
  `,
    ...args,
  },
});

export const FlushExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsAccordionItem],
  template: `
    <bs-accordion flush.bind="true">
      <bs-accordion-item header="Accordion Item #1" collapsed.bind="false">
          <strong>This is the first item's accordion body.</strong>
          It is shown by default.
      </bs-accordion-item>
      <bs-accordion-item header="Accordion Item #2">
          <strong>This is the second item's accordion body.</strong>
          It is hidden by default.
      </bs-accordion-item>
      <bs-accordion-item header="Accordion Item #3">
          <strong>This is the third item's accordion body.</strong>
          It is hidden by default
      </bs-accordion-item>
    </bs-accordion>
  `,
  props: {
    ...args,
  },
});

export const AlwaysOpenExample: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsAccordionItem],
  template: `
    <bs-accordion always-open.bind="true">
      <bs-accordion-item header="Accordion Item #1" collapsed.bind="false">
          <strong>This is the first item's accordion body.</strong>
          It is shown by default.
      </bs-accordion-item>
      <bs-accordion-item header="Accordion Item #2">
          <strong>This is the second item's accordion body.</strong>
          It is hidden by default.
      </bs-accordion-item>
      <bs-accordion-item header="Accordion Item #3">
          <strong>This is the third item's accordion body.</strong>
          It is hidden by default
      </bs-accordion-item>
    </bs-accordion>
  `,
  props: {
    ...args,
  },
});
