import './popover.scss';

import { ICustomAttributeController } from '@aurelia/runtime-html';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import * as Popper from '@popperjs/core';
import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import { type Tooltip, Popover } from 'bootstrap';

export type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left';
export type PopoverTrigger =
  | 'click'
  | 'hover'
  | 'focus'
  | 'manual'
  | 'click hover'
  | 'click focus'
  | 'hover focus'
  | 'click hover focus';
export type PopoverOffset = [number, number];

@customAttribute('bs-popover')
export class BsPopover implements Popover.Options, ICustomAttributeViewModel {
  @bindable(coerceBoolean)
  animation: boolean = true;

  @bindable()
  allowList: Record<keyof HTMLElementTagNameMap | '*', Array<string | RegExp>> | undefined;

  @bindable()
  boundary: Popper.Boundary = 'clippingParents';

  @bindable()
  container: string | Element | false = false;

  @bindable()
  content: string | Element | ((this: HTMLElement) => string | Element) = '';

  @bindable()
  customClass?: string | (() => string) | undefined;

  @bindable()
  delay: number | { show: number; hide: number } = 0;

  @bindable()
  fallbackPlacements: string[] = ['top', 'right', 'bottom', 'left'];

  @bindable(coerceBoolean)
  html: boolean = false;

  @bindable()
  offset: PopoverOffset | string | (() => PopoverOffset) = [0, 8];

  @bindable()
  placement: PopoverPlacement | (() => PopoverPlacement) = 'right';

  @bindable()
  popperConfig: Partial<Popover.Options> | Popover.PopperConfigFunction | null = null;

  @bindable(coerceBoolean)
  sanitize: boolean = true;

  @bindable()
  sanitizeFn: () => void | null = null;

  @bindable()
  selector: string | false = false;

  @bindable()
  template: string = `<div class="popover" role="tooltip">
    <div class="popover-arrow"></div>
    <h3 class="popover-header"></h3>
    <div class="popover-body"></div>
  </div>`;

  @bindable({ primary: true })
  title: string | Element | ((this: HTMLElement) => string | Element) = '';

  @bindable()
  trigger: PopoverTrigger = 'click';

  readonly $controller: ICustomAttributeController<this>;

  #options: Partial<Popover.Options> = {};

  #popover?: Popover;

  constructor(protected element: Element) {}

  bound() {
    Object.keys(this.$controller.definition.bindables).forEach((name) => {
      if (this[name] !== undefined) {
        this.#options[name] = this[name];
      }
    });
  }

  attaching() {
    this.#createPopover();
  }

  detaching() {
    this.#destroyPopover();
  }

  propertyChanged(name: keyof Popover.Options, newValue: never) {
    this.#options[name] = newValue;

    if (name === 'title') {
      this.#popover?.setContent({
        '.popover-header': newValue,
      });
    } else if (name === 'content') {
      this.#popover?.setContent({
        '.popover-body': newValue,
      });
    } else {
      this.#destroyPopover();
      this.#createPopover();
    }
  }

  show() {
    return this.#popover?.show();
  }

  hide() {
    return this.#popover?.hide();
  }

  toggle() {
    return this.#popover?.toggle();
  }

  enable() {
    return this.#popover?.enable();
  }

  disable() {
    return this.#popover?.disable();
  }

  toggleEnabled() {
    return this.#popover?.toggleEnabled();
  }

  update() {
    return this.#popover?.update();
  }

  setContent(content?: Record<string, string | Element | Tooltip.SetContentFunction | null>) {
    return this.#popover.setContent(content);
  }

  #createPopover() {
    this.#popover = new Popover(this.element, this.#options);
  }

  #destroyPopover() {
    this.#popover?.dispose();
    this.#popover = undefined;
  }
}
