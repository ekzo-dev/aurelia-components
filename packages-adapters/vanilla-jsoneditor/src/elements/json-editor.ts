import template from './json-editor.html';

import './json-editor.css';

import type { JSONPatchDocument, JSONPath } from 'immutable-json-patch';
import type {
  Content,
  ContentErrors,
  JSONContent,
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
  TextContent,
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
  json: unknown = {};

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

  readonly $controller: ICustomElementController<this>;

  #contentCache?: unknown;

  constructor(private readonly host: HTMLElement = resolve(HTMLElement)) {}

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

  attaching() {
    this.createEditor();
  }

  detaching() {
    this.destroyEditor();
  }

  propertyChanged(name: keyof this, value: any): void {
    if (name === 'json') {
      if (value !== this.#contentCache) {
        void this.editor?.update({
          json: value ?? {},
        });
      }
    } else {
      void this.editor?.updateProps({
        [name]: value,
      });
    }
  }

  protected async createEditor(): Promise<any> {
    const module = await import('vanilla-jsoneditor');

    // prepare props from bindables
    const props: Record<string, any> = {};

    Object.keys(this.$controller.definition.bindables).forEach((name) => {
      if (this[name] !== undefined) {
        props[name] = this[name];
      }
    });

    this.editor = new module.JSONEditor({
      target: this.host,
      props: {
        ...props,
        content: {
          json: this.json ?? {},
        },
        onChange: (content: Content, previousContent: Content, changeStatus: OnChangeStatus) => {
          try {
            if ((content as JSONContent).json) {
              this.#contentCache = (content as JSONContent).json;
            } else {
              this.#contentCache = this.parser.parse((content as TextContent).text);
            }

            this.json = this.#contentCache;
          } catch (e) {
            // ignore partially invalid JSON output
          }

          this.onChange && this.onChange(content, previousContent, changeStatus);
        },
      },
    });

    return module;
  }

  private destroyEditor(): void {
    this.editor?.destroy();
    this.editor = undefined;
  }
}
