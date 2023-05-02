import { bindable, BindingMode, customElement, ICustomElementViewModel } from 'aurelia';
import { ICustomElementController } from '@aurelia/runtime-html';
import type {
  JSONEditor,
  JSONContent,
  TextContent,
  JSONValue,
  ValidationError,
  Content,
  ContentErrors,
  JSONPatchResult,
  RenderValueProps,
  RenderValueComponentDescription,
  MenuItem,
  QueryLanguage,
  JSONPath,
  JSONPatchDocument,
  TransformModalOptions,
} from 'vanilla-jsoneditor';
import type { JSONSchema7 } from 'json-schema';

import { coerceBoolean } from '../utils';
import { createAjvValidator } from './createAvjValidator';

import template from './json-editor.html';
import './json-editor.scss';

@customElement({
  name: 'json-editor',
  template,
})
export class JsonEditor implements ICustomElementViewModel {
  @bindable({ mode: BindingMode.twoWay })
  content: JSONValue = {};

  @bindable()
  mode: 'text' | 'tree' = 'tree';

  @bindable(coerceBoolean)
  mainMenuBar: boolean = true;

  @bindable(coerceBoolean)
  navigationBar: boolean = true;

  @bindable(coerceBoolean)
  statusBar: boolean = true;

  @bindable(coerceBoolean)
  readOnly: boolean = false;

  @bindable()
  indentation: number | string = '\t';

  @bindable()
  tabSize: number = 4;

  @bindable(coerceBoolean)
  escapeControlCharacters: boolean = false;

  @bindable(coerceBoolean)
  escapeUnicodeCharacters: boolean = false;

  @bindable()
  validator?: (json: JSONValue) => ValidationError[];

  @bindable()
  onError?: (err: Error) => void;

  @bindable()
  onChange?: (
    content: Content,
    previousContent: Content,
    changeStatus: { contentErrors: ContentErrors; patchResult: JSONPatchResult | null }
  ) => void;

  @bindable()
  onChangeMode?: (mode: 'tree' | 'text') => void;

  @bindable()
  onClassName?: (path: JSONPath, value: JSONValue) => string | undefined;

  @bindable()
  onRenderValue?: (props: RenderValueProps) => RenderValueComponentDescription[];

  @bindable()
  onRenderMenu?: (mode: 'tree' | 'text', items: MenuItem[]) => MenuItem[] | undefined;

  // TODO: use strings
  @bindable()
  queryLanguages?: QueryLanguage[];

  @bindable()
  queryLanguageId?: string;

  @bindable()
  onChangeQueryLanguage?: (queryLanguageId: string) => void;

  @bindable()
  onFocus?: () => void;

  @bindable()
  onBlur?: () => void;

  @bindable()
  schema?: JSONSchema7;

  @bindable()
  theme: 'default' | 'dark' = 'default';

  editor?: JSONEditor;

  editorModule?: any;

  readonly $controller: ICustomElementController<this>;

  private contentCache?: JSONValue;

  constructor(private element: Element) {}

  patch(operations: JSONPatchDocument): JSONPatchResult {
    return this.editor?.patch(operations);
  }

  expand(callback: (path: JSONPath) => boolean): void {
    return this.editor?.expand(callback);
  }

  transform(options: TransformModalOptions): void {
    return this.editor?.transform(options);
  }

  scrollTo(path: JSONPath): void {
    return this.editor?.scrollTo(path);
  }

  findElement(path: JSONPath): Element {
    return this.editor?.findElement(path);
  }

  acceptAutoRepair(): Content {
    return this.editor?.acceptAutoRepair();
  }

  refresh(): void {
    return this.editor?.refresh();
  }

  validate(): ContentErrors {
    return this.editor?.validate();
  }

  focus(): void {
    return this.editor?.focus();
  }

  attaching() {
    this.createEditor();
  }

  detaching() {
    this.destroyEditor();
  }

  propertyChanged(name: keyof this, value: any): void {
    switch (name) {
      case 'content':
        if (value !== this.contentCache) {
          this.editor?.update({
            text: undefined,
            json: value ?? {},
          });
        }
        break;
      case 'theme':
        this.importTheme();
        break;
      case 'validator':
      case 'schema':
        this.editor?.updateProps({
          validator: this.getValidator(),
        });
        break;
      default:
        this.editor?.updateProps({
          [name]: value,
        });
    }
  }

  private async createEditor(): Promise<void> {
    this.importTheme();

    const editor = await import('vanilla-jsoneditor');
    this.editorModule = editor;

    // TODO: maybe not use internal apis?
    const props: Record<string, any> = {};
    Object.keys(this.$controller.definition.bindables).forEach((name) => {
      if (this[name] !== undefined) {
        props[name] = this[name];
      }
    });

    this.editor = new editor.JSONEditor({
      target: this.element,
      props: {
        ...props,
        content: {
          text: undefined,
          json: this.content ?? {},
        },
        validator: this.getValidator(),
        onChange: (content: Content, previousContent: Content, changeStatus) => {
          try {
            if ((content as JSONContent).json) {
              this.contentCache = (content as JSONContent).json;
            } else {
              this.contentCache = JSON.parse((content as TextContent).text);
            }
            this.content = this.contentCache;
          } catch (e) {}

          this.onChange && this.onChange(content, previousContent, changeStatus);
        },
        onRenderValue: (props: RenderValueProps): RenderValueComponentDescription[] => {
          let result;
          if (this.onRenderValue) {
            result = this.onRenderValue(props);
          } else if (this.schema) {
            result = editor.renderJSONSchemaEnum(props, this.schema as JSONValue, this.schemaDefinitions(this.schema));
          }

          return result || editor.renderValue(props);
        },
      },
    });
  }

  private destroyEditor(): void {
    this.editor?.destroy();
    this.editor = undefined;
  }

  // TODO: strict type editorModule
  private getValidator(): undefined | ((json: JSONValue) => ValidationError[]) {
    let validator = this.validator;
    if (!validator && this.schema) {
      // validator = this.editorModule.createAjvValidator(this.schema as JSONValue, this.schemaDefinitions(this.schema));
      validator = createAjvValidator(this.schema as JSONValue, this.schemaDefinitions(this.schema));
    }

    return validator;
  }

  private importTheme(): void {
    if (this.theme === 'dark') {
      import('vanilla-jsoneditor/themes/jse-theme-dark.css');
    } else {
      import('vanilla-jsoneditor/themes/jse-theme-default.css');
    }
  }

  private schemaDefinitions(schema: JSONSchema7): JSONValue {
    return (schema.definitions || schema.$defs) as JSONValue;
  }
}
