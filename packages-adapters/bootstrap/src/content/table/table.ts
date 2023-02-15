import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import { ICustomElementController } from '@aurelia/runtime-html';

import { coerceBoolean } from '../../utils';
import { Size, Variant } from '../../types';

import template from './table.html';
import './table.scss';

@customElement({
  name: 'bs-table',
  template,
})
export class BsTable implements ICustomElementViewModel {
  @bindable(coerceBoolean)
  readonly bordered: boolean = false;

  @bindable(coerceBoolean)
  readonly striped: boolean = false;

  @bindable(coerceBoolean)
  readonly stripedColumns: boolean = false;

  @bindable(coerceBoolean)
  readonly hover: boolean = false;

  @bindable(coerceBoolean)
  readonly borderless: boolean = false;

  @bindable(coerceBoolean)
  readonly dark: boolean = false;

  @bindable()
  readonly size?: Size;

  @bindable()
  readonly variant?: Variant;

  table!: HTMLTableElement;

  readonly $controller: ICustomElementController<this>;

  constructor(private element: Element) {}

  // binding() {
  //   // заглушка, чтобы при первом присвоении значений propertyChanged хуки не срабатывали
  // }

  attached() {
    this.table = this.element.querySelector('table')!;

    this.toggleClass('table', true);
    Object.values(this.$controller.definition.bindables).forEach(({ property, attribute }) => {
      if (property === 'size') {
        this.sizeChanged(this.size);
      } else {
        // @ts-ignore
        this.toggleClass(`table-${attribute}`, this[property]);
      }
    });
  }

  borderedChanged(value: boolean) {
    this.toggleClass('table-bordered', value);
  }

  stripedChanged(value: boolean) {
    this.toggleClass('table-striped', value);
  }

  stripedColumnsChanged(value: boolean) {
    this.toggleClass('table-striped-columns', value);
  }

  hoverChanged(value: boolean) {
    this.toggleClass('table-hover', value);
  }

  borderlessChanged(value: boolean) {
    this.toggleClass('table-borderless', value);
  }

  darkChanged(value: boolean) {
    this.toggleClass('table-dark', value);
  }

  sizeChanged(value?: string) {
    this.toggleClass('table-sm', value === 'sm');
    this.toggleClass('table-lg', value === 'lg');
  }

  private toggleClass(className: string, force?: boolean): void {
    this.table.classList.toggle(className, force);
  }
}
