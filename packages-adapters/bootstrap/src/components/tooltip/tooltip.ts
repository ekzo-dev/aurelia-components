import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import { ICustomAttributeController } from '@aurelia/runtime-html';
import { Tooltip } from 'bootstrap';
import '../../transitions.scss';
import './tooltip.scss';

export type Placements = 'top' | 'right' | 'bottom' | 'left';

/**
 * Tooltip Bootstrap component
 * https://getbootstrap.com/docs/5.1/components/tooltips/
 * TODO: доработать опции
 */
@customAttribute('bs-tooltip')
export class BsTooltip implements Partial<Tooltip.Options>, ICustomAttributeViewModel {
  @bindable()
  readonly animation: boolean = true;

  @bindable()
  readonly container?: any;

  @bindable()
  readonly delay?: any;

  @bindable()
  readonly html: boolean = false;

  @bindable()
  readonly placement: Placements = 'top';

  @bindable()
  readonly selector: any;

  @bindable()
  readonly template: any;

  @bindable({ primary: true })
  readonly title: string | Element | ((this: HTMLElement) => string | Element) = '';

  @bindable()
  readonly trigger = 'hover focus';

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

  toggleEnabled() {
    this.tooltip?.toggleEnabled();
  }

  private createTooltip() {
    this.tooltip = new Tooltip(this.element, this.options);
  }

  private destroyTooltip() {
    this.tooltip?.dispose();
    this.tooltip = undefined;
  }
}
