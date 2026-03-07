import { bindable, customAttribute, ICustomAttributeViewModel, resolve } from 'aurelia';
import SortableLib, { type Options } from 'sortablejs';

@customAttribute({
  name: 'sortable',
  defaultProperty: 'options',
})
export class Sortable implements ICustomAttributeViewModel {
  @bindable()
  options: Options = {};

  sortable?: SortableLib;

  readonly #host = resolve(HTMLElement);

  attached() {
    this.#createSortable();
  }

  detaching() {
    this.#destroySortable();
  }

  optionsChanged(newVal: Options): void {
    Object.entries(newVal).forEach(([name, value]) => {
      this.sortable?.option(name as keyof Options, value);
    });
  }

  #createSortable() {
    this.sortable = SortableLib.create(this.#host, this.options);
  }

  #destroySortable() {
    void this.sortable?.destroy();
    this.sortable = undefined;
  }
}
