import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import { ICustomAttributeController } from '@aurelia/runtime-html';
import { Popover } from 'bootstrap';
import './popover.scss';
import * as Popper from '@popperjs/core';

export type Placements = 'top' | 'right' | 'bottom' | 'left';
export type Triggers =
  | 'click'
  | 'hover'
  | 'focus'
  | 'manual'
  | 'click hover'
  | 'click focus'
  | 'hover focus'
  | 'click hover focus';

@customAttribute('bs-popover')
export class BsPopover implements Partial<Popover.Options>, ICustomAttributeViewModel {
  @bindable()
  animation: boolean = true;

  @bindable()
  allowList?: Record<keyof HTMLElementTagNameMap | '*', Array<string | RegExp>>;

  @bindable()
  boundary: Popper.Boundary = 'clippingParents';

  @bindable()
  container?: any;

  @bindable()
  content: string | Element | ((this: HTMLElement) => string | Element) = '';

  @bindable()
  customClass?: string | (() => string) | undefined;

  @bindable()
  delay?: any;

  @bindable()
  fallbackPlacements?: string[];

  @bindable()
  html: boolean = false;

  @bindable() // todo check validity
  offset: any = [0, 0];

  @bindable()
  placement: Placements | (() => Placements) = 'top';

  @bindable()
  popperConfig: Partial<Popover.Options> | Popover.PopperConfigFunction | null;

  @bindable()
  sanitize: boolean = true;

  @bindable()
  sanitizeFn: () => void | null = null;

  @bindable()
  selector: any;

  @bindable()
  template: any;

  @bindable({ primary: true })
  title: string | Element | ((this: HTMLElement) => string | Element) = '';

  @bindable()
  trigger: Triggers = 'hover focus';

  readonly $controller: ICustomAttributeController<this>;

  private options: Partial<Popover.Options> = {};

  private popover?: Popover;

  constructor(private element: Element) {
    console.log('constructor');
    //this.processTrigger();
  }

  /*  private addEventListener() {
    this.element.addEventListener('click', () => {
      this.toggle();
    });
  }

  private removeEventListener() {
    this.element.removeEventListener('click', () => {
      this.toggle();
    });
  }

  private processTrigger() {
    console.log('processTrigger');
      if (this.trigger === 'manual') this.addEventListener();
      else this.removeEventListener();
    }*/

  bound() {
    Object.keys(this.$controller.definition.bindables).forEach((name) => {
      if (this[name] !== undefined) {
        this.options[name] = this[name];
      }
    });
  }

  attaching() {
    this.createPopover();
  }

  detaching() {
    this.destroyPopover();
  }

  propertyChanged(name: keyof Popover.Options, newValue: never) {
    this.options[name] = newValue;

    if (name === 'title') {
      this.popover?.setContent({
        '.popover-inner': newValue,
      });
      /*    } else if (name === 'trigger') {
      this.processTrigger();*/
    } else {
      this.destroyPopover();
      this.createPopover();
    }
  }

  show() {
    this.popover?.show();
  }

  hide() {
    this.popover?.hide();
  }

  toggle() {
    this.popover?.toggle();
  }

  enable() {
    this.popover?.enable();
  }

  disable() {
    this.popover?.disable();
  }

  toggleEnabled() {
    this.popover?.toggleEnabled();
  }

  update() {
    this.popover?.update();
  }

  // todo
  // setContent(content?: Record<string, string | Element | Tooltip.SetContentFunction | null>): void;

  private createPopover() {
    this.popover = new Popover(this.element, this.options);
    // this.processTrigger();
  }

  private destroyPopover() {
    this.popover?.dispose();
    this.popover = undefined;
  }
}
