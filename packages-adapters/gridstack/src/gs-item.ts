import { bindable, customElement, ICustomElementViewModel, INode } from 'aurelia';
import { GridItemHTMLElement, GridStackWidget } from 'gridstack';

@customElement({
  name: 'gs-item',
  template:
    '<template class="grid-stack-item"><div class="grid-stack-item-content"><au-slot></au-slot></div></template>',
})
export class GsItem implements ICustomElementViewModel {
  @bindable()
  options: GridStackWidget = {};

  constructor(@INode public readonly element: GridItemHTMLElement) {}

  optionsChanged() {
    this.element.gridstackNode?.grid.update(this.element, this.options);
  }
}
