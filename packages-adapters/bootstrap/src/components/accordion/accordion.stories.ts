import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsAccordion, BsAccordionItem } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Accordion',
  component: BsAccordion,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsAccordionItem],
  innerHtml: `
    <bs-accordion-item header="Item 1" collapsed.bind="false">Lorem ipsum</bs-accordion-item>
    <bs-accordion-item header="Item 2">Lorem ipsum 2</bs-accordion-item>
  `,
  props: {
    ...args,
  },
});
