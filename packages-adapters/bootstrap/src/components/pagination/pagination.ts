import { customElement, bindable, BindingMode, ICustomElementViewModel } from 'aurelia';

import { BsIcon } from '../../icon/icon';
import { Align } from '../../types';
import template from './pagination.html';

import './pagination.scss';

@customElement({
  name: 'bs-pagination',
  template,
  dependencies: [BsIcon],
})
export class BsPagination implements ICustomElementViewModel {
  @bindable({ mode: BindingMode.twoWay })
  currentPage: number = 1;

  @bindable()
  readonly pageSize: number = 25;

  @bindable()
  readonly totalItems!: number;

  @bindable()
  readonly pageRequested?: ({ value }: { value: number }) => void;

  @bindable()
  readonly align: Align = Align.Left;

  totalPages!: number;

  binding() {
    this.calcPages();
  }

  totalItemsChanged() {
    this.calcPages();
  }

  pageSizeChanged() {
    this.calcPages();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  firstPage() {
    this.setPage(1);
  }

  lastPage() {
    this.setPage(this.totalPages);
  }

  private setPage(page: number): void {
    if (this.currentPage === page) return;

    // проверить значение
    page = page < 1 ? 1 : page > this.totalPages ? this.totalPages : page;

    // установить новое значение
    if (this.pageRequested) {
      this.pageRequested({ value: page });
    } else {
      this.currentPage = page;
    }
  }

  private calcPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);

    // если текущая страница меньше чем кол-во страниц - сбросить на первую
    if (this.currentPage > this.totalPages) {
      this.setPage(1);
    }
  }
}
