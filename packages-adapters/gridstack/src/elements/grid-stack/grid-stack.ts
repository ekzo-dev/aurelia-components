import { bindable, Constructable, CustomElement, customElement, slotted } from 'aurelia';
import {
  GridStack as GridStackBase,
  GridStackOptions,
  GridStackNode,
  GridStackWidget,
  GridItemHTMLElement,
} from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import { GridStackItem } from '../..';
import template from './grid-stack.html';
import './grid-stack.scss';

export interface GridStackDynamicWidget extends GridStackWidget {
  component: Constructable;
  model: Record<string, any>;
}

const WIDGET_OPTS: Array<keyof GridStackWidget> = [
  'x',
  'y',
  'h',
  'w',
  'minW',
  'minH',
  'maxW',
  'maxH',
  'autoPosition',
  'noResize',
  'noMove',
  'locked',
  'id',
  'subGridOpts',
];

@customElement({
  name: 'grid-stack',
  template,
})
export class GridStack {
  @bindable()
  items: GridStackDynamicWidget[] = [];

  @bindable()
  options: GridStackOptions = {};

  private grid?: GridStackBase;

  @slotted('.grid-stack-item')
  private slottedItems: GridStackItem[];

  constructor(public element: HTMLElement) {}

  attaching() {
    this.grid = GridStackBase.init(this.options, this.element);
  }

  detached() {
    this.grid?.destroy(false);
  }

  private slottedItemsChanged(elements: GridItemHTMLElement[]) {
    const { grid } = this;
    if (!grid || !elements) return;

    console.log('slottedItems', elements);

    // start update transaction
    this.grid.batchUpdate();

    // remove missing widgets
    const removed = grid.engine.nodes.filter(
      (x) => !x.el?.classList.contains('grid-stack-placeholder') && !elements.find((el) => el === x.el)
    );
    removed.forEach((x) => grid.removeWidget(x.el, false));

    // add new widgets
    const hasItems = elements?.[0].nodeName === 'GRID-STACK-ITEM';
    elements.forEach((element, index) => {
      if (element.gridstackNode) return;

      const widget: GridStackWidget = hasItems
        ? CustomElement.for<GridStackItem>(element).viewModel
        : this.items[index];
      grid.addWidget(element, Object.fromEntries(WIDGET_OPTS.map((o) => [o, widget[o]])));
    });

    // commit changes
    grid.engine.removedNodes = removed;
    this.grid.batchUpdate(false);
  }
}
