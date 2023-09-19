import { ICustomAttributeViewModel, resolve } from 'aurelia';

export abstract class BaseAttribute implements ICustomAttributeViewModel {
  protected readonly element: HTMLElement = resolve(HTMLElement);

  attaching(): void {
    this.setClass(this.classes);

    // apply disabled to set initial attributes for button/input
    if (this['disabled'] !== undefined) {
      this.disabledChanged(this['disabled']);
    }
  }

  detaching(): void {
    this.setClass(this.classes, false);
  }

  disabledChanged(newValue: boolean) {
    const el = this.element;

    if (el.tagName === 'BUTTON' || el.tagName === 'INPUT') {
      newValue ? el.setAttribute('disabled', '') : el.removeAttribute('disabled');
    } else {
      this.setClass('disabled', newValue);
    }
  }

  activeChanged(newValue: boolean) {
    this.setClass('active', newValue);
  }

  protected abstract get classes(): string[];

  protected setClass(tokens: string | string[], add = true) {
    this.element.classList[add ? 'add' : 'remove'](...(Array.isArray(tokens) ? tokens : [tokens]));
  }
}
