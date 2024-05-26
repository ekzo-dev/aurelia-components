import { customAttribute, ICustomAttributeViewModel, resolve } from 'aurelia';

@customAttribute('auto-resize')
export class AutoResizeCustomAttribute implements ICustomAttributeViewModel {
  private isAttached = false;

  private textarea: HTMLTextAreaElement;

  constructor(private readonly element: HTMLElement = resolve(HTMLElement)) {}

  attaching() {
    this.textarea = this.element instanceof HTMLTextAreaElement ? this.element : this.element.querySelector('textarea');
    this.textarea.style.resize = 'none';
    this.fitTextContent();
  }

  detaching() {
    this.isAttached = false;
    this.textarea.style.resize = 'both';
  }

  valueChanged() {
    this.fitTextContent();
  }

  private fitTextContent() {
    if (this.isAttached) {
      setTimeout(() => {
        // нужно для сброса высоты после уменьшения кол-ва строк в тексте
        this.textarea.style.height = '';
        this.textarea.style.height = `${this.textarea.scrollHeight + 2}px`;
      }, 0);
    }
  }
}
