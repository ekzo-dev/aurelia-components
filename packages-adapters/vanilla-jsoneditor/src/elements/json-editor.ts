import template from './json-editor.html';

import './json-editor.css';

import type { JSONPatchDocument, JSONPath } from 'immutable-json-patch';
import type {
  Content,
  ContentErrors,
  JsonEditor as JSONEditor,
  JSONEditorPropsOptional,
  JSONEditorSelection,
  JSONParser,
  JSONPatchResult,
  JSONPathParser,
  MenuItem,
  OnChangeStatus,
  OnExpand,
  QueryLanguage,
  RenderMenuContext,
  RenderValueComponentDescription,
  RenderValueProps,
  TransformModalOptions,
  Validator,
} from 'vanilla-jsoneditor';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement, ICustomElementViewModel, resolve } from 'aurelia';

@customElement({
  name: 'json-editor',
  template,
})
export class JsonEditor implements ICustomElementViewModel, Omit<JSONEditorPropsOptional, 'mode'> {
  @bindable({ mode: BindingMode.twoWay })
  content: Content = { text: '' };

  @bindable()
  selection?: JSONEditorSelection;

  @bindable()
  mode: 'text' | 'tree' | 'table' = 'tree';

  @bindable(coerceBoolean)
  mainMenuBar: boolean = true;

  @bindable(coerceBoolean)
  navigationBar: boolean = true;

  @bindable(coerceBoolean)
  statusBar: boolean = true;

  @bindable(coerceBoolean)
  askToFormat: boolean = true;

  @bindable(coerceBoolean)
  readOnly: boolean = false;

  @bindable()
  indentation: number | string = 2;

  @bindable()
  tabSize: number = 4;

  @bindable(coerceBoolean)
  escapeControlCharacters: boolean = false;

  @bindable(coerceBoolean)
  escapeUnicodeCharacters: boolean = false;

  @bindable()
  flattenColumns: boolean = true;

  @bindable()
  validator?: Validator;

  @bindable()
  parser: JSON = JSON;

  @bindable()
  validationParser: JSONParser = JSON;

  @bindable()
  pathParser?: JSONPathParser;

  @bindable()
  queryLanguages?: QueryLanguage[];

  @bindable()
  queryLanguageId?: string;

  @bindable()
  theme: 'default' | 'dark' = 'default';

  @bindable()
  onError?: (err: Error) => void;

  @bindable()
  onChange?: (content: Content, previousContent: Content, changeStatus: OnChangeStatus) => void;

  @bindable()
  onChangeMode?: (mode: 'tree' | 'text' | 'table') => void;

  @bindable()
  onClassName?: (path: JSONPath, value: unknown) => string | undefined;

  @bindable()
  onRenderValue?: (props: RenderValueProps) => RenderValueComponentDescription[];

  @bindable()
  onSelect?: (selection: JSONEditorSelection | undefined) => void;

  @bindable()
  onRenderMenu?: (items: MenuItem[], context: RenderMenuContext) => MenuItem[] | undefined;

  @bindable()
  onChangeQueryLanguage?: (queryLanguageId: string) => void;

  @bindable()
  onFocus?: () => void;

  @bindable()
  onBlur?: () => void;

  editor?: JSONEditor;

  editorModule?: typeof import('vanilla-jsoneditor');

  protected readonly host = resolve(HTMLElement);

  #contentCache?: Content;

  get(): Content | undefined {
    return this.editor?.get();
  }

  set(content: Content): void {
    return this.editor?.set(content);
  }

  patch(operations: JSONPatchDocument): JSONPatchResult | undefined {
    return this.editor?.patch(operations);
  }

  expand(path: JSONPath, callback?: OnExpand): void {
    return this.editor?.expand(path, callback);
  }

  transform(options: TransformModalOptions): void {
    return this.editor?.transform(options);
  }

  scrollTo(path: JSONPath): Promise<void> | undefined {
    return this.editor?.scrollTo(path);
  }

  findElement(path: JSONPath): Element | undefined {
    return this.editor?.findElement(path);
  }

  acceptAutoRepair(): Content | undefined {
    return this.editor?.acceptAutoRepair();
  }

  refresh(): Promise<void> | undefined {
    return this.editor?.refresh();
  }

  validate(): ContentErrors | undefined {
    return this.editor?.validate();
  }

  select(newSelection?: JSONEditorSelection): void {
    return this.editor?.select(newSelection);
  }

  focus(): void {
    return this.editor?.focus();
  }

  async attaching() {
    return this.#createEditor();
  }

  detaching() {
    this.#destroyEditor();
  }

  propertyChanged(name: keyof this, value: unknown): void {
    if (name === 'content') {
      if (value !== this.#contentCache) {
        void this.editor?.update(value as Content);
      }
    } else {
      void this.editor?.updateProps({
        [name]: value,
      });
    }
  }

  async #createEditor() {
    this.editorModule = await import('vanilla-jsoneditor');

    // prepare props from bindables
    const props: Record<string, unknown> = {};

    Object.keys((this as ICustomElementViewModel).$controller!.definition.bindables).forEach((name) => {
      if (this[name as keyof this] !== undefined) {
        props[name] = this[name as keyof this];
      }
    });

    this.editor = this.editorModule.createJSONEditor({
      target: this.host,
      props: {
        ...props,
        onChange: (content: Content, previousContent: Content, changeStatus: OnChangeStatus) => {
          this.#contentCache = content;
          this.content = this.#contentCache;

          this.onChange && this.onChange(content, previousContent, changeStatus);
        },
      },
    });
  }

  #destroyEditor() {
    void this.editor?.destroy();
    this.editor = undefined;
  }
}
