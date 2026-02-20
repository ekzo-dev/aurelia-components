import './common.scss';

import { coerceBoolean, uniqueId } from '@ekzo-dev/toolkit';
import { bindable, ICustomElementViewModel, queueTask, resolve } from 'aurelia';

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
  id: string = uniqueId();

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

  @bindable()
  text?: string | HTMLElement;

  readonly control?: HTMLInputElement;

  readonly host = resolve(HTMLElement);

  #textElement?: HTMLElement;

  #useInvalidEvent: boolean = true;

  bound() {
    allProperties.forEach((prop) => {
      if (this[prop] != null) {
        this.propertyChanged(prop, this[prop]);
      }
    });

    if (this.#useInvalidEvent && this.control) {
      this.invalidFeedback = this.control.validationMessage;
    }
  }

  attaching() {
    this.textChanged(this.text);
  }

  textChanged(value: string | HTMLElement) {
    const element = this.#textElement;

    if (value && !element) {
      const id = uniqueId();

      this.#textElement = this.#createElement('div', { class: 'form-text', id }, value);
      this.control?.setAttribute('aria-describedby', id);
    } else if (value && element) {
      this.#setElementContent(element, value);
    } else if (!value && element) {
      this.control?.removeAttribute('aria-describedby');
      element.remove();
      this.#textElement = null;
    }
  }

  propertyChanged(key: PropertyKey, newValue: unknown, oldValue?: unknown) {
    const { control } = this;
    const prop = key.toString();

    if (!control) return;

    if (prop === 'value') {
      if (this.#useInvalidEvent) {
        queueTask(() => {
          this.invalidFeedback = control.validationMessage;
        });
      }
    } else if (stringProperties.has(prop)) {
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

  #createElement(name: string, attributes: Record<string, string>, content: string | HTMLElement) {
    const elem = document.createElement(name);

    Object.entries(attributes).forEach(([key, value]) => {
      elem.setAttribute(key, value);
    });

    this.#setElementContent(elem, content);

    return this.host.appendChild(elem);
  }

  #setElementContent(elem: HTMLElement, content: string | HTMLElement) {
    if (typeof content === 'string') {
      elem.innerText = content;
    } else {
      elem.appendChild(content);
    }
  }
}
