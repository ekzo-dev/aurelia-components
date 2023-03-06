import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsAccordion, BsAccordionItem } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Accordion',
  component: BsAccordion,
};
export default meta;

const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsAccordionItem],
  innerHtml: `
<bs-accordion-item header="Accordion Item #1">
  This is the first item's accordion body.
</bs-accordion-item>
<bs-accordion-item header="Accordion Item #2">
  This is the second item's accordion body.
</bs-accordion-item>
<bs-accordion-item header="Accordion Item #3">
  This is the third item's accordion body.
</bs-accordion-item>
  `,
  props: args,
});

export { Default };
