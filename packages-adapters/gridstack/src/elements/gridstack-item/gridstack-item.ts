import { bindable, BindingMode, customElement, inject } from 'aurelia';
import { coerceBoolean } from '../utils';
import { GridItemHTMLElement } from 'gridstack';

@inject(Element)
@customElement('grid-stack-item')
export class GridStackItem {
  constructor(public root: IGridStackItemElement) {}

  @bindable({ mode: BindingMode.twoWay })
  x?: number;
  xChanged() {
    if (this.x !== undefined) {
      this.root.setAttribute('gs-x', this.x.toString());
    } else {
      this.root.removeAttribute('gs-x');
    }
  }

  @bindable({ mode: BindingMode.twoWay })
  y?: number;
  yChanged() {
    if (this.y !== undefined) {
      this.root.setAttribute('gs-y', this.y.toString());
    } else {
      this.root.removeAttribute('gs-y');
    }
  }

  @bindable({ mode: BindingMode.twoWay })
  w?: number;
  wChanged() {
    if (this.w !== undefined) {
      this.root.setAttribute('gs-w', this.w.toString());
    } else {
      this.root.removeAttribute('gs-w');
    }
  }

  @bindable({ mode: BindingMode.twoWay })
  h?: number;
  hChanged() {
    if (this.h !== undefined) {
      this.root.setAttribute('gs-h', this.h.toString());
    } else {
      this.root.removeAttribute('gs-h');
    }
  }

  @bindable(coerceBoolean)
  noMove: boolean;
  noMoveChanged() {
    if (this.noMove) {
      this.root.setAttribute('gs-no-move', 'true');
    } else {
      this.root.removeAttribute('gs-no-move');
    }
  }

  @bindable(coerceBoolean)
  noResize: boolean;
  noResizeChanged() {
    if (this.noResize) {
      this.root.setAttribute('gs-no-resize', 'true');
    } else {
      this.root.removeAttribute('gs-no-resize');
    }
  }

  @bindable(coerceBoolean)
  locked: boolean;
  lockedChanged() {
    if (this.locked) {
      this.root.setAttribute('gs-locked', 'true');
    } else {
      this.root.removeAttribute('gs-locked');
    }
  }

  attached() {
    if (this.x !== undefined) {
      this.xChanged();
    }
    if (this.y !== undefined) {
      this.yChanged();
    }
    if (this.w !== undefined) {
      this.wChanged();
    }
    if (this.h !== undefined) {
      this.hChanged();
    }
    if (this.noMove !== undefined) {
      this.noMoveChanged();
    }
    if (this.noResize !== undefined) {
      this.noResizeChanged();
    }
    if (this.locked !== undefined) {
      this.lockedChanged();
    }
  }
}

export interface IGridStackItemElement extends GridItemHTMLElement {
  $au: {
    'au:resource:custom-element': {
      viewModel: GridStackItem;
    };
  };
}
