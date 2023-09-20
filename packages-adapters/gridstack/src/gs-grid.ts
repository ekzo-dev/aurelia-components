import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.min.css';
import './gs-grid.css';

import { bindable, CustomElement, customElement, INode, slotted } from 'aurelia';
import { GridHTMLElement, GridItemHTMLElement, GridStack, GridStackOptions } from 'gridstack';

import { type GsItem } from './gs-item';

@customElement({
  name: 'gs-grid',
  template: '<template class="grid-stack"><au-slot></au-slot></template>',
})
export class GsGrid {
  @bindable()
  options: GridStackOptions = {};

  public grid?: GridStack;

  @slotted('gs-item')
  private slottedItems: GridItemHTMLElement[];

  constructor(@INode public element: GridHTMLElement) {}

  attached() {
    const parentItem = this.findParentItem(this.element);

    if (!parentItem) {
      this.createGrid();
    } else if (parentItem.gridstackNode) {
      this.createGrid(parentItem);
    } else {
      parentItem.dataset.hasSubgrid = '1';
    }
  }

  detached() {
    this.destroyGrid();
  }

  public createGrid(parentItem?: GridItemHTMLElement) {
    const options = {
      ...this.options,
      auto: false,
    };

    // support for column: auto in nested grids
    let autoColumn: boolean;

    if (options.column === 'auto' && parentItem) {
      autoColumn = true;
      options.column = parentItem.gridstackNode.w || 1;
      options.disableOneColumnMode = true;
    }

    this.grid = GridStack.init(options, this.element);
    this.grid['_autoColumn'] = autoColumn;

    // init items
    this.slottedItemsChanged(this.slottedItems);
  }

  private destroyGrid() {
    this.grid?.destroy(false);
  }

  private slottedItemsChanged(elements: GridItemHTMLElement[]) {
    const { grid } = this;

    if (!grid || !elements) return;

    // start update transaction
    this.grid.batchUpdate();

    // remove missing widgets
    const removed = grid.engine.nodes.filter((x) => !elements.find((el) => el === x.el));

    removed.forEach((x) => grid.removeWidget(x.el, false));

    // add new widgets
    elements.forEach((element) => {
      if (element.gridstackNode) return;

      const item: GsItem = CustomElement.for<GsItem>(element).viewModel;

      grid.addWidget(element, item.options);

      if (element.dataset.hasSubgrid) {
        const subgrid = element.querySelector('gs-grid');
        const component = CustomElement.for<GsGrid>(subgrid).viewModel;

        component.createGrid(element);
      }
    });

    // commit changes
    grid.engine.removedNodes = removed;
    this.grid.batchUpdate(false);
  }

  private findParentItem(el: HTMLElement): GridItemHTMLElement | null {
    while (el) {
      if (el.nodeName === 'GS-ITEM') return el;
      el = el.parentElement;
    }

    return null;
  }
}
