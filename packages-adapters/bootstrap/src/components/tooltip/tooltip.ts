import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import { ICustomAttributeController } from '@aurelia/runtime-html';
import { Tooltip } from 'bootstrap';
import '../../transitions.scss';
import './tooltip.scss';

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

/**
 * Tooltip Bootstrap component
 * https://getbootstrap.com/docs/5.1/components/tooltips/
 * TODO: доработать опции
 */
@customAttribute('bs-tooltip')
export class BsTooltip implements Partial<Tooltip.Options>, ICustomAttributeViewModel {
  @bindable()
  animation: boolean = true;

  @bindable()
  container?: any;

  @bindable()
  delay?: any;

  @bindable()
  html: boolean = false;

  @bindable()
  placement: Placements = 'top';

  @bindable()
  selector: any;

  @bindable()
  template: any;

  @bindable({ primary: true })
  title: string | Element | ((this: HTMLElement) => string | Element) = '';

  @bindable()
  trigger: Triggers = 'hover focus';

  readonly $controller: ICustomAttributeController<this>;

  private options: Partial<Tooltip.Options> = {};

  private tooltip?: Tooltip;

  constructor(private element: Element) {}

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

  // todo
  // setContent(content?: Record<string, string | Element | Tooltip.SetContentFunction | null>): void;

  private createTooltip() {
    this.tooltip = new Tooltip(this.element, this.options);
  }

  private destroyTooltip() {
    this.tooltip?.dispose();
    this.tooltip = undefined;
  }
}
