import { bindable, Constructable, CustomElement, customElement, INode, slotted } from 'aurelia';
import {
  GridStack as GridStackBase,
  GridStackOptions,
  GridStackWidget,
  GridItemHTMLElement,
  GridHTMLElement,
} from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.min.css';
import { type GridStackItem } from '..';
import template from './grid-stack.html';
import './grid-stack.scss';

export interface GridStackDynamicWidget extends GridStackWidget {
  component?: Constructable;
  model?: Record<string, any>;
}

@customElement({
  name: 'grid-stack',
  template,
})
export class GridStack {
  @bindable()
  items: GridStackDynamicWidget[] = [];

  @bindable()
  options: GridStackOptions = {};

  public grid?: GridStackBase;

  @slotted('.grid-stack-item')
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

    this.grid = GridStackBase.init(options, this.element);
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
    const hasItems = elements?.[0].nodeName === 'GRID-STACK-ITEM';
    elements.forEach((element, index) => {
      if (element.gridstackNode) return;

      const options: GridStackWidget = hasItems
        ? CustomElement.for<GridStackItem>(element).viewModel.options
        : this.items[index];
      delete options['model'];
      delete options['component'];
      grid.addWidget(element, options);

      if (element.dataset.hasSubgrid) {
        const subgrid = element.querySelector('grid-stack');
        const component = CustomElement.for<GridStack>(subgrid).viewModel;
        component.createGrid(element);
      }
    });

    // commit changes
    grid.engine.removedNodes = removed;
    this.grid.batchUpdate(false);
  }

  private findParentItem(el: HTMLElement): GridItemHTMLElement | null {
    while (el) {
      if (el.classList.contains('grid-stack-item')) return el;
      el = el.parentElement;
    }
    return null;
  }
}
