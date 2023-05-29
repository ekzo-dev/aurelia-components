import { bindable, customElement, ICustomElementViewModel, INode } from 'aurelia';
import { GridItemHTMLElement, GridStackWidget } from 'gridstack';
import template from './grid-stack-item.html';

@customElement({
  name: 'grid-stack-item',
  template,
})
export class GridStackItem implements ICustomElementViewModel {
  @bindable()
  options: GridStackWidget = {};

  constructor(@INode public element: GridItemHTMLElement) {}

  optionsChanged() {
    this.element.gridstackNode?.grid.update(this.element, this.options);
  }
}
