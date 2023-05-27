import { bindable, customElement, INode } from 'aurelia';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import { GridItemHTMLElement, GridStackWidget, GridStackOptions, numberOrString } from 'gridstack';
import template from './grid-stack-item.html';

@customElement({
  name: 'grid-stack-item',
  template,
})
export class GridStackItem implements GridStackWidget {
  @bindable()
  x?: number;

  @bindable()
  y?: number;

  @bindable()
  w?: number;

  @bindable()
  h?: number;

  @bindable(coerceBoolean)
  autoPosition?: boolean;

  @bindable()
  minW?: number;

  @bindable()
  maxW?: number;

  @bindable()
  minH?: number;

  @bindable()
  maxH?: number;

  @bindable(coerceBoolean)
  noResize?: boolean;

  @bindable(coerceBoolean)
  noMove?: boolean;

  @bindable(coerceBoolean)
  locked?: boolean;

  @bindable()
  id?: numberOrString;

  @bindable()
  subGridOpts?: GridStackOptions;

  constructor(@INode public element: GridItemHTMLElement) {}

  // propertyChanged(name: keyof this, newValue) {
  //   const { element } = this;
  //   const attribute = `gs-${name.toString()}`;
  //
  //   switch (name) {
  //     case 'x':
  //     case 'y':
  //     case 'w':
  //     case 'h':
  //       if (newValue !== undefined) {
  //         element.setAttribute(attribute, newValue.toString());
  //       } else {
  //         element.removeAttribute(attribute);
  //       }
  //       break;
  //     case 'noMove':
  //     case 'noResize':
  //     case 'locked':
  //       if (newValue) {
  //         element.setAttribute(attribute, 'true');
  //       } else {
  //         element.removeAttribute(attribute);
  //       }
  //   }
  // }
}
