import template from './table.html';

import './table.scss';

import { ICustomElementController } from '@aurelia/runtime-html';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, customElement, ICustomElementViewModel, resolve } from 'aurelia';

import { VARIANTS } from '../../constants';
import { Breakpoint, Variant } from '../../types';

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

  constructor(private readonly element: HTMLElement = resolve(HTMLElement)) {}

  attached() {
    this.table = this.element.querySelector('table')!;

    this.table.classList.add('table');
    Object.keys(this.$controller.definition.bindables).forEach((name) => {
      this.propertyChanged(name as keyof this, this[name]);
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
