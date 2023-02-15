import { bindable, customElement, ICustomElementViewModel } from 'aurelia';
import template from './list-group-item.html';
import { Variants } from '../../interfaces';
import { coerceBoolean } from '../../utils';
import './list-group.scss';

@customElement({
  name: 'bs-list-group-item',
  template,
})
export class BsListGroupItem implements ICustomElementViewModel {
  @bindable()
  variant?: Variants;

  @bindable(coerceBoolean)
  action: boolean = false;

  @bindable(coerceBoolean)
  disabled: boolean = false;

  @bindable(coerceBoolean)
  active: boolean = false;

  get classes() {
    return [
      'list-group-item',
      this.disabled ? 'disabled' : null,
      this.active ? 'active' : null,
      this.action ? 'list-group-item-action' : null,
      this.variant ? `list-group-item-${this.variant}` : null,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
