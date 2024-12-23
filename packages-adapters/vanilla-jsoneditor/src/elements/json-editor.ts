import template from './json-editor.html';

import './json-editor.css';

import type { JSONPatchDocument, JSONPath } from 'immutable-json-patch';
import type {
  Content,
  ContentErrors,
  JSONEditor,
  JSONEditorPropsOptional,
  JSONEditorSelection,
  JSONParser,
  JSONPatchResult,
  JSONPathParser,
  MenuItem,
  OnChangeStatus,
  QueryLanguage,
  RenderMenuContext,
  RenderValueComponentDescription,
  RenderValueProps,
  TransformModalOptions,
  Validator,
} from 'vanilla-jsoneditor';

import { ICustomElementController } from '@aurelia/runtime-html';
import { bindable, BindingMode, customElement, ICustomElementViewModel, resolve } from 'aurelia';

import { coerceBoolean } from '../utils';

@customElement({
  name: 'json-editor',
  template,
})
export class JsonEditor implements ICustomElementViewModel, Omit<JSONEditorPropsOptional, 'mode'> {
  @bindable({ mode: BindingMode.twoWay })
  content: Content = { text: '' };

  @bindable()
  selection: JSONEditorSelection | null = null;

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
  onSelect?: (selection: JSONEditorSelection | null) => void;

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

  readonly $controller: ICustomElementController<this>;

  #contentCache?: Content;

  constructor(protected readonly host: HTMLElement = resolve(HTMLElement)) {}

  get(): Content {
    return this.editor?.get();
  }

  set(content: Content): Promise<void> {
    return this.editor?.set(content);
  }

  patch(operations: JSONPatchDocument): Promise<JSONPatchResult> {
    return this.editor?.patch(operations);
  }

  expand(callback: (path: JSONPath) => boolean): Promise<void> {
    return this.editor?.expand(callback);
  }

  transform(options: TransformModalOptions): void {
    return this.editor?.transform(options);
  }

  scrollTo(path: JSONPath): Promise<void> {
    return this.editor?.scrollTo(path);
  }

  findElement(path: JSONPath): Element {
    return this.editor?.findElement(path);
  }

  acceptAutoRepair(): Promise<Content> {
    return this.editor?.acceptAutoRepair();
  }

  refresh(): Promise<void> {
    return this.editor?.refresh();
  }

  validate(): ContentErrors | null {
    return this.editor?.validate();
  }

  select(newSelection: JSONEditorSelection | null): Promise<void> {
    return this.editor?.select(newSelection);
  }

  focus(): Promise<void> {
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

    Object.keys(this.$controller.definition.bindables).forEach((name) => {
      if (this[name] !== undefined) {
        props[name] = this[name];
      }
    });

    this.editor = new this.editorModule.JSONEditor({
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
