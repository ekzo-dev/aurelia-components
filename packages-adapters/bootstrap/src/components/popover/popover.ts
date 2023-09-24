import './popover.scss';

import { bindable, customAttribute } from 'aurelia';
import { type Tooltip, Popover } from 'bootstrap';

import { BsTooltip, TooltipTrigger } from '../tooltip';

@customAttribute('bs-popover')
export class BsPopover extends BsTooltip implements Popover.Options {
  @bindable()
  content: string | Element | ((this: HTMLElement) => string | Element) = '';

  @bindable()
  offset: Tooltip.Offset | string | Tooltip.OffsetFunction = [0, 8];

  @bindable()
  placement: Tooltip.PopoverPlacement | (() => Tooltip.PopoverPlacement) = 'right';

  @bindable()
  template: string = `<div class="popover" role="tooltip">
    <div class="popover-arrow"></div>
    <h3 class="popover-header"></h3>
    <div class="popover-body"></div>
  </div>`;

  @bindable()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  popperConfig: Partial<Popover.Options> | Tooltip.PopperConfigFunction | null = null;

  @bindable()
  trigger: TooltipTrigger = 'click';

  protected tooltip?: Popover;

  createTooltip() {
    this.tooltip = new Popover(this.element, this.options as Popover.Options);
  }
}
