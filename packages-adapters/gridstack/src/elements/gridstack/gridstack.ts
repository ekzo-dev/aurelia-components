import { bindable, children, CustomElement, customElement, inject } from 'aurelia';
import { coerceBoolean } from '../utils';
import { GridStack, GridStackOptions, GridStackNode } from 'gridstack';
// eslint-disable-next-line import/no-unassigned-import
import 'gridstack/dist/h5/gridstack-dd-native';
import { GridStackItem } from '../..';

@inject(Element)
@customElement('grid-stack')
export class GridStackCustomElement {
  constructor(public root: HTMLElement) {}

  grid: GridStack;

  @bindable()
  minRow: number;
  minRowChanged() {
    this.root.setAttribute('gs-min-row', this.minRow.toString());
  }

  @bindable(coerceBoolean)
  float: boolean;
  floatChanged() {
    this.grid?.float(this.float);
  }

  @bindable
  options: GridStackOptions;

  @children({
    filter: (el: HTMLElement) => {
      return el.tagName === 'GRID-STACK-ITEM';
    },
  })
  private items: GridStackItem[];
  itemsChanged() {
    if (!this.grid || !this.items) {
      return;
    }
    const newItems = this.items.map((x) => x.root).filter((x) => !x.gridstackNode);
    newItems.forEach((x) => {
      this.grid.addWidget(x);
      if (x.gridstackNode) {
        this.updateNodeVmAttributes(x.gridstackNode);
      }
    });
    const removed = this.grid.engine.nodes.filter(
      (x) => !x.el?.classList.contains('grid-stack-placeholder') && !this.items.find((y) => y.root === x.el)
    );
    removed.forEach((x) => this.grid.engine.removeNode(x, false, false));
  }

  attached() {
    const options = this.options ?? {};
    if (this.float !== undefined) {
      options.float = this.float;
    }
    this.grid = GridStack.init(options, this.root);
  }

  detached() {
    this.grid.destroy();
  }

  handleChange(nodes: GridStackNode[]) {
    nodes.forEach((x) => this.updateNodeVmAttributes(x));
  }

  updateNodeVmAttributes(node: GridStackNode) {
    if (node.el) {
      const itemVm = CustomElement.for<GridStackItem>(node.el).viewModel;
      itemVm.x = node.x;
      itemVm.y = node.y;
      itemVm.w = node.w;
      itemVm.h = node.h;
    }
  }
}
