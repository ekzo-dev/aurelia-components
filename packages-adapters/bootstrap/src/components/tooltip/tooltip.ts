import '../../transitions.scss';
import './tooltip.scss';

import type * as Popper from '@popperjs/core';

import { ICustomAttributeController } from '@aurelia/runtime-html';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import { Tooltip } from 'bootstrap';

export type TooltipTrigger =
  | 'click'
  | 'hover'
  | 'focus'
  | 'manual'
  | 'click hover'
  | 'click focus'
  | 'hover focus'
  | 'click hover focus';

@customAttribute('bs-tooltip')
export class BsTooltip implements Tooltip.Options, ICustomAttributeViewModel {
  @bindable(coerceBoolean)
  animation: boolean = true;

  @bindable()
  allowList: Record<keyof HTMLElementTagNameMap | '*', Array<string | RegExp>> | undefined;

  @bindable()
  boundary: Popper.Boundary = 'clippingParents';

  @bindable()
  container: string | Element | false = false;

  @bindable()
  customClass?: string | (() => string) | undefined;

  @bindable()
  delay: number | { show: number; hide: number } = 0;

  @bindable()
  fallbackPlacements: string[] = ['top', 'right', 'bottom', 'left'];

  @bindable(coerceBoolean)
  html: boolean = false;

  @bindable()
  offset: Tooltip.Offset | string | Tooltip.OffsetFunction = [0, 6];

  @bindable()
  placement: Tooltip.PopoverPlacement | (() => Tooltip.PopoverPlacement) = 'top';

  @bindable()
  popperConfig: Partial<Popper.Options> | Tooltip.PopperConfigFunction | null = null;

  @bindable(coerceBoolean)
  sanitize: boolean = true;

  @bindable()
  sanitizeFn: () => void | null = null;

  @bindable()
  selector: string | false = false;

  @bindable()
  template: string = `<div class="tooltip" role="tooltip">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-inner"></div>
  </div>`;

  @bindable({ primary: true })
  title: string | Element | ((this: HTMLElement) => string | Element) = '';

  @bindable()
  trigger: TooltipTrigger = 'hover focus';

  readonly $controller: ICustomAttributeController<this>;

  protected tooltip?: Tooltip;

  protected options: Partial<Tooltip.Options> = {};

  constructor(protected element: HTMLElement) {}

  bound() {
    Object.keys(this.$controller.definition.bindables).forEach((name) => {
      if (this[name] !== undefined) {
        this.options[name] = this[name];
      }
    });
  }

  attaching() {
    this.createTooltip();
  }

  detaching() {
    this.destroyTooltip();
  }

  propertyChanged(name: keyof Tooltip.Options, value: never) {
    this.options[name] = value;

    if (name === 'title') {
      this.tooltip?.setContent({
        '.tooltip-inner': value,
      });
    } else {
      this.destroyTooltip();
      this.createTooltip();
    }
  }

  toggle() {
    this.tooltip?.toggle();
  }

  show() {
    this.tooltip?.show();
  }

  hide() {
    this.tooltip?.hide();
  }

  enable() {
    this.tooltip?.enable();
  }

  disable() {
    this.tooltip?.disable();
  }

  toggleEnabled() {
    this.tooltip?.toggleEnabled();
  }

  update() {
    this.tooltip?.update();
  }

  setContent(content?: Record<string, string | Element | Tooltip.SetContentFunction | null>) {
    return this.tooltip.setContent(content);
  }

  createTooltip() {
    this.tooltip = new Tooltip(this.element, this.options);
  }

  destroyTooltip() {
    this.tooltip?.dispose();
    this.tooltip = undefined;
  }
}
