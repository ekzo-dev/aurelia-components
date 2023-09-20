import template from './accordion.html';

import './accordion.scss';

import type { BsAccordionItem } from '.';

import { watch } from '@aurelia/runtime-html';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, children, customElement, ICustomElementViewModel } from 'aurelia';

@customElement({
  name: 'bs-accordion',
  template,
})
export class BsAccordion implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  flush: boolean = false;

  @bindable(coerceBoolean)
  alwaysOpen: boolean = false;

  @children({
    filter: (el: HTMLElement) => el.tagName === 'BS-ACCORDION-ITEM',
  })
  items: BsAccordionItem[];

  @watch((self: BsAccordion) => self.items.map((item) => item.collapsed))
  itemExpanded(newValue: boolean[], oldValue: boolean[]) {
    if (this.alwaysOpen || oldValue.length === 0) return;

    const expanded = newValue.findIndex((v, i) => v === false && v !== oldValue[i]);

    if (expanded >= 0) {
      this.items.forEach((item, i) => {
        if (i !== expanded) item.collapsed = true;
      });
    }
  }
}
