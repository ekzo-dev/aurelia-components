import './common.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, ICustomElementViewModel, queueTask, resolve } from 'aurelia';

import { IBootstrapOptions } from '../configuration';
import { uniqueId } from '../utils';

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
  'accept',
  'inputmode',
  'rows',
]);
const booleanProperties = new Set<string>(['disabled', 'required', 'readonly', 'multiple']);
const allProperties = [...stringProperties, ...booleanProperties];

export class BaseField implements ICustomElementViewModel {
  @bindable()
  name?: string;

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
  get invalidFeedback(): string | undefined {
    return this._invalidFeedback ?? this._validationMessage;
  }
  set invalidFeedback(value: string) {
    this._invalidFeedback = value;
  }

  @bindable()
  form?: string;

  @bindable()
  text?: string | HTMLElement;

  readonly control!: HTMLInputElement;

  readonly host = resolve(HTMLElement);

  readonly id = uniqueId();

  protected readonly config = resolve(IBootstrapOptions);

  private _validationMessage?: string;
  private _invalidFeedback?: string;

  #textElement?: HTMLElement;

  bound() {
    allProperties.forEach((prop) => {
      if (this[prop as keyof this] != null) {
        this.propertyChanged(prop, this[prop as keyof this]);
      }
    });

    if (this.config.htmlValidationMessages && this.control) {
      this._validationMessage = this.control.validationMessage;
    }
  }

  attaching() {
    this.textChanged(this.text);
  }

  textChanged(value?: string | HTMLElement) {
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
      this.#textElement = undefined;
    }
  }

  propertyChanged(key: PropertyKey, newValue: unknown, oldValue?: unknown) {
    const { control } = this;
    const prop = key.toString();

    if (!control) return;

    if (prop === 'value') {
      if (this.config.htmlValidationMessages) {
        queueTask(() => {
          this._validationMessage = control.validationMessage;
        });
      }
    } else if (stringProperties.has(prop)) {
      const isEmpty = newValue == null || newValue === '';

      if (isEmpty && oldValue) {
        control.removeAttribute(prop);
      } else if (!isEmpty) {
        control.setAttribute(prop, newValue.toString());
      }
    } else if (booleanProperties.has(prop)) {
      if (newValue) {
        control.setAttribute(prop, '');
      } else {
        control.removeAttribute(prop);
      }
    }
  }

  /**
   * Set a custom validity message for the element
   * @param error
   */
  setCustomValidity(error: string) {
    this.control?.setCustomValidity(error);
    this._validationMessage = error;
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
