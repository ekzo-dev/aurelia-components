import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsBadge } from '.';

const meta: Meta = {
  title: 'Bootstrap / Components / Badge',
  component: BsBadge,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  innerHtml: 'Badge content',
  props: {
    ...args,
  },
});

export const BadgeNew: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsBadge],
  template: `
  <p>
  По-умолчанию variant="primary":<br>
  Example heading <bs-badge variant="primary">NEW</bs-badge></p>
  <p>Здесь можно менять настройки:<br>
  Example heading <bs-badge variant="\${variant}" bg="\${bg}" text="\${text}" pill="\${pill}">NEW</bs-badge></p>
  <p><i>* Изменяя значение variant можно влиять одновременно на цвет бэкграунда и цвет текста компонента (по-умолчанию "primary")<br>
  Также, при необходимости, можно изменить по-отдельности настройку цвета для бэкграунда (bg) и текста (text),<br>
  указав одно из значений "primary", "secondary", "success", "danger", "warning", "info", "light" или "dark".
  </i></p>
  `,
  props: {
    pill: true,
    ...args,
  },
});
