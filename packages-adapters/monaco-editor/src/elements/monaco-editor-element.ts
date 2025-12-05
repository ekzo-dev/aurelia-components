import template from './monaco-editor.html';

import './monaco-editor.css';

import type { editor } from 'monaco-editor';

import { bindable, BindingMode, customElement, ICustomElementViewModel, resolve } from 'aurelia';

import { coerceBoolean } from '../utils';

export type EditorModule = typeof import('monaco-editor');

@customElement({
  name: 'monaco-editor',
  template,
})
export class MonacoEditor implements ICustomElementViewModel, editor.IStandaloneEditorConstructionOptions {
  @bindable({ mode: BindingMode.twoWay })
  value: string;

  @bindable()
  language?: string;

  @bindable(coerceBoolean)
  readOnly: boolean = false;

  readonly host = resolve(HTMLElement);

  loading: boolean = true;

  #editorInstance: editor.IStandaloneCodeEditor;

  #valueCache?: string;

  #editor: typeof editor;

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
          this.#editorInstance?.setValue(value as string);
        }

        break;

      case 'language':
        this.#editor.setModelLanguage(this.#editorInstance.getModel(), value as string);

        break;
    }
  }

  async #createEditor() {
    const module: EditorModule = await import('monaco-editor');

    this.#triggerLoadEvent(module);

    this.#editor = module.editor;
    this.#editorInstance = this.#editor.create(this.host, {
      value: this.value,
      language: this.language,
      automaticLayout: true,
      readOnly: this.readOnly,
    });
    this.#editorInstance.onDidChangeModelContent(() => {
      const val = this.#editorInstance.getValue();

      this.#valueCache = val;
      this.value = val;
    });

    this.loading = false;
  }

  #destroyEditor() {
    this.#editorInstance?.dispose();
    this.#editorInstance = undefined;
  }

  #triggerLoadEvent(module: EditorModule) {
    const event = new CustomEvent<EditorModule>('monaco-loaded', { bubbles: true, cancelable: true, detail: module });

    this.host.dispatchEvent(event);
  }
}
