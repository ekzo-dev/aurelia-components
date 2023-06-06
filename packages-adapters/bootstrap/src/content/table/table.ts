import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import { ICustomElementController } from '@aurelia/runtime-html';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import { Variant, Breakpoint } from '../../types';
import { VARIANTS } from '../../constants';
import template from './table.html';
import './table.scss';

@customElement({
  name: 'bs-table',
  template,
})
export class BsTable implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  bordered: boolean = false;

  @bindable(coerceBoolean)
  striped: boolean = false;

  @bindable(coerceBoolean)
  stripedColumns: boolean = false;

  @bindable(coerceBoolean)
  hover: boolean = false;

  @bindable(coerceBoolean)
  borderless: boolean = false;

  @bindable()
  size?: 'sm';

  @bindable()
  variant?: Variant;

  @bindable()
  responsive?: Breakpoint;

  table!: HTMLTableElement;

  readonly $controller: ICustomElementController<this>;

  constructor(private element: HTMLElement) {}

  attached() {
    this.table = this.element.querySelector('table')!;

    this.table.classList.add('table');
    Object.values(this.$controller.definition.bindables).forEach(({ property }) => {
      this.propertyChanged(property as keyof this, this[property]);
    });
  }

  propertyChanged(name: keyof this, value: any): void {
    switch (name) {
      case 'size':
        this.toggleClass('sm', value === 'sm');
        break;
      case 'variant':
        VARIANTS.forEach((variant) => {
          this.toggleClass(variant, value === variant);
        });
        break;
      case 'responsive':
        break;
      default:
        this.toggleClass(name === 'stripedColumns' ? 'striped-columns' : name.toString(), value);
    }
  }

  private toggleClass(name: string, force?: boolean): void {
    this.table.classList.toggle(`table-${name}`, force);
  }
}
