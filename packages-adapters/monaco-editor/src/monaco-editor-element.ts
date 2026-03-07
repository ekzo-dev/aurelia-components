import template from './monaco-editor.html';

import './monaco-editor.css';

import type { editor } from 'monaco-editor';

import { bindable, BindingMode, customElement, ICustomElementViewModel, resolve } from 'aurelia';

export type EditorModule = typeof import('monaco-editor');

@customElement({
  name: 'monaco-editor',
  template,
})
export class MonacoEditor implements ICustomElementViewModel, editor.IStandaloneEditorConstructionOptions {
  @bindable({ mode: BindingMode.twoWay })
  value?: string;

  @bindable()
  language?: string;

  @bindable()
  options: Omit<editor.IStandaloneEditorConstructionOptions, 'value' | 'language'> = {};

  editor?: editor.IStandaloneCodeEditor;

  loading: boolean = true;

  readonly #host = resolve(HTMLElement);

  #valueCache?: string;

  #editor?: typeof editor;

  attached() {
    void this.#createEditor();
  }

  detaching() {
    this.#destroyEditor();
  }

  propertyChanged(name: keyof this, value: unknown): void {
    switch (name) {
      case 'value':
        if (value !== this.#valueCache) {
          this.editor?.setValue(value as string);
        }

        break;

      case 'language':
        this.#editor?.setModelLanguage(this.editor!.getModel()!, value as string);

        break;

      case 'options':
        this.editor?.updateOptions(value as editor.IEditorOptions & editor.IGlobalEditorOptions);
    }
  }

  async #createEditor() {
    const module: EditorModule = await import('monaco-editor');

    this.#triggerLoadEvent(module);

    this.#editor = module.editor;
    this.editor = this.#editor.create(this.#host, {
      ...(this.options ?? {}),
      value: this.value,
      language: this.language,
    });
    this.editor.onDidChangeModelContent(() => {
      const val = this.editor?.getValue();

      this.#valueCache = val;
      this.value = val;
    });

    this.loading = false;
  }

  #destroyEditor() {
    this.editor?.dispose();
    this.editor = undefined;
  }

  #triggerLoadEvent(module: EditorModule) {
    this.#host.dispatchEvent(
      new CustomEvent<EditorModule>('monaco-loaded', {
        bubbles: true,
        cancelable: true,
        detail: module,
      })
    );
  }
}
