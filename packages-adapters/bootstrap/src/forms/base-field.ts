import { bindable, ICustomElementViewModel } from 'aurelia';
import { coerceBoolean, uniqueId } from '../utils';
import './common.scss';

export class BaseField implements ICustomElementViewModel {
  @bindable()
  name?: string;

  @bindable()
  id?: string;

  @bindable()
  label?: string;

  @bindable()
  title?: string;

  @bindable(coerceBoolean)
  disabled: boolean = false;

  @bindable(coerceBoolean)
  required: boolean = false;

  @bindable(coerceBoolean)
  valid?: boolean;

  @bindable()
  validFeedback?: string;

  @bindable()
  invalidFeedback?: string;

  @bindable()
  form?: string;

  binding() {
    if (!this.id) {
      this.id = uniqueId();
    }
  }

  /**
   * Пустой метод для работы обработчика в дочерних классах, не удалять!
   * Без него дочерние обработчики почему-то не срабатывают
   * @param value
   */
  valueChanged(value: any): void {}
}
