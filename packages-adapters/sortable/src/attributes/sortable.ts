import type { GroupOptions, Options } from 'sortablejs';

import { bindable, customAttribute, ICustomAttributeViewModel, resolve } from 'aurelia';
import SortableLib from 'sortablejs';

@customAttribute('sortable')
export class Sortable implements ICustomAttributeViewModel, Options {
  // Group options
  @bindable group?: string | GroupOptions;

  // Sorting options
  @bindable sort?: boolean;
  @bindable delay?: number;
  @bindable delayOnTouchOnly?: boolean;
  @bindable touchStartThreshold?: number;
  @bindable disabled?: boolean;

  // Storage
  @bindable store?: Options['store'];

  // Animation
  @bindable animation?: number;
  @bindable easing?: string;

  // Selectors
  @bindable handle?: string;
  @bindable filter?: string | ((evt: Event, target: HTMLElement, sortable: SortableLib) => boolean);
  @bindable preventOnFilter?: boolean;
  @bindable draggable?: string;
  @bindable dataIdAttr?: string;

  // CSS classes
  @bindable ghostClass?: string;
  @bindable chosenClass?: string;
  @bindable dragClass?: string;

  // Swap options
  @bindable swapThreshold?: number;
  @bindable invertSwap?: boolean;
  @bindable invertedSwapThreshold?: number;
  @bindable direction?:
    | 'vertical'
    | 'horizontal'
    | ((evt: Event, target: HTMLElement, dragEl: HTMLElement) => 'vertical' | 'horizontal');

  // Advanced options
  @bindable scrollSensitivity?: number;
  @bindable scrollSpeed?: number;
  @bindable bubbleScroll?: boolean;

  // Dragging behavior
  @bindable dragoverBubble?: boolean;
  @bindable removeCloneOnHide?: boolean;
  @bindable emptyInsertThreshold?: number;

  // Clone options
  @bindable setData?: (dataTransfer: DataTransfer, dragEl: HTMLElement) => void;

  // Force fallback
  @bindable forceFallback?: boolean;
  @bindable fallbackClass?: string;
  @bindable fallbackOnBody?: boolean;
  @bindable fallbackTolerance?: number;

  // Event callbacks
  @bindable onChoose?: Options['onChoose'];
  @bindable onUnchoose?: Options['onUnchoose'];
  @bindable onStart?: Options['onStart'];
  @bindable onEnd?: Options['onEnd'];
  @bindable onAdd?: Options['onAdd'];
  @bindable onUpdate?: Options['onUpdate'];
  @bindable onSort?: Options['onSort'];
  @bindable onRemove?: Options['onRemove'];
  @bindable onFilter?: Options['onFilter'];
  @bindable onMove?: Options['onMove'];
  @bindable onClone?: Options['onClone'];
  @bindable onChange?: Options['onChange'];

  sortable?: SortableLib;

  readonly host = resolve(HTMLElement);

  attached() {
    this.#createSortable();
  }

  detaching() {
    this.#destroySortable();
  }

  propertyChanged(name: keyof Options, value: Options[keyof Options]): void {
    this.sortable?.option(name, value);
  }

  #createSortable() {
    // prepare options from bindables
    const options: Options = {};

    Object.keys((this as ICustomAttributeViewModel).$controller!.definition.bindables).forEach((name) => {
      if (this[name as keyof this] !== undefined) {
        // @ts-ignore
        options[name] = this[name as keyof this];
      }
    });

    this.sortable = SortableLib.create(this.host, options);
  }

  #destroySortable() {
    void this.sortable?.destroy();
    this.sortable = undefined;
  }
}
