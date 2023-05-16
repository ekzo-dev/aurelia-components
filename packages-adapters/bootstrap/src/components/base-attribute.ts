import { ICustomAttributeViewModel, resolve } from 'aurelia';

export abstract class BaseAttribute implements ICustomAttributeViewModel {
  protected readonly element: HTMLElement = resolve(HTMLElement);

  attaching(): void {
    this.setClass(this.classes);
  }

  detaching(): void {
    this.setClass(this.classes, false);
  }

  protected abstract get classes(): string[];

  protected setClass(tokens: string | string[], add: boolean = true) {
    this.element.classList[add ? 'add' : 'remove'](...(Array.isArray(tokens) ? tokens : [tokens]));
  }
}
