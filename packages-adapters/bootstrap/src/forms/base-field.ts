import './common.scss';

import { coerceBoolean, uniqueId } from '@ekzo-dev/toolkit';
import { bindable, ICustomElementViewModel } from 'aurelia';

const stringProperties = new Set<string>([
  'name',
  'form',
  'title',
  'autocomplete',
  'placeholder',
  'type',
  'step',
  'min',
  'max',
  'size',
  'minlength',
  'maxlength',
  'pattern',
  'fileAccept',
  'inputmode',
  'rows',
]);
const booleanProperties = new Set<string>(['disabled', 'required', 'readonly', 'multiple']);
const allProperties = [...stringProperties, ...booleanProperties];

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

  readonly control!: HTMLInputElement;

  binding() {
    if (!this.id) {
      this.id = uniqueId();
    }
  }

  bound() {
    allProperties.forEach((prop) => {
      if (this[prop] != null) {
        this.propertyChanged(prop, this[prop]);
      }
    });
  }

  propertyChanged(key: PropertyKey, newValue: unknown, oldValue?: unknown) {
    const { control } = this;
    const prop = key.toString();

    if (!control || prop === 'value') return;

    if (stringProperties.has(prop)) {
      const isEmpty = newValue == null || newValue === '';
      // TODO: remove after https://github.com/aurelia/aurelia/issues/2383
      const attr = prop === 'fileAccept' ? 'accept' : prop;

      if (isEmpty && oldValue) {
        control.removeAttribute(attr);
      } else if (!isEmpty) {
        control.setAttribute(attr, newValue.toString());
      }
    } else if (booleanProperties.has(prop)) {
      control[prop] = newValue;
    }
  }
}
