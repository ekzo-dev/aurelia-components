import template from './json-input.html';

import './json-input.scss';

import type {
  Content,
  JSONContent,
  JSONEditorPropsOptional,
  JSONSchema,
  JSONSchemaDefinitions,
  MenuItem,
  RenderValueComponentDescription,
  RenderValueProps,
  TextContent,
  ValidationError,
  ValidationSeverity,
  Validator,
} from 'vanilla-jsoneditor';

import { ProxyObservable } from '@aurelia/runtime';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import { JsonEditor } from '@ekzo-dev/vanilla-jsoneditor';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons/faUpRightAndDownLeftFromCenter';
import Ajv, { ErrorObject, Options } from 'ajv';
import Ajv2019 from 'ajv/dist/2019';
import Ajv2020 from 'ajv/dist/2020';
import addFormats from 'ajv-formats';
import { bindable, BindingMode, customElement } from 'aurelia';
import { parsePath } from 'immutable-json-patch';
import { CompileOptions, compileSchema, JsonError, SchemaNode } from 'json-schema-library';

const patternMap: Record<string, string> = {
  '^[A-Za-z_][-A-Za-z0-9._]*$': '^[A-Za-z_][\\-A-Za-z0-9._]*$',
  '^[A-Za-z][-A-Za-z0-9.:_]*$': '^[A-Za-z][\\-A-Za-z0-9.:_]*$',
};

@customElement({
  name: 'bs-json-input',
  template,
  dependencies: [JsonEditor],
})
export class BsJsonInput {
  @bindable({ mode: BindingMode.twoWay })
  value: unknown;

  @bindable(coerceBoolean)
  required: boolean = false;

  @bindable(coerceBoolean)
  disabled: boolean = false;

  @bindable({ set: (v: BsJsonInput['jsonSchema'] | string) => (v === '' || v === true || v === 'true' ? true : v) })
  jsonSchema?: JSONSchema | SchemaNode | boolean;

  @bindable()
  validatorOptions?: CompileOptions;

  @bindable()
  jsonEditorOptions: JSONEditorPropsOptional = {};

  valueCache?: unknown;

  content?: JSONContent;

  readonly input!: HTMLInputElement;

  readonly editorElement!: HTMLElement;

  readonly editorComponent!: JsonEditor;

  binding() {
    this.#setContent(this.value);
  }

  valueChanged(value: unknown) {
    this.#setContent(value);
  }

  onRenderValue = (props: RenderValueProps): RenderValueComponentDescription[] => {
    let result: RenderValueComponentDescription[] | null;
    // const { jsonSchema } = this;
    const { editorModule } = this.editorComponent;

    // TODO: this does not support bundled schemas and complex refs. So need to make own implementation later
    // if (jsonSchema && typeof jsonSchema === 'object') {
    //   result = editorModule.renderJSONSchemaEnum(props, jsonSchema, this.#getSchemaDefinitions(jsonSchema));
    // }

    return result ?? editorModule.renderValue(props);
  };

  onRenderMenu = (items: MenuItem[]): MenuItem[] | undefined => {
    return [
      ...items,
      {
        type: 'space',
      },
      {
        type: 'button',
        onClick: () => {
          if (document.fullscreenElement) {
            void document.exitFullscreen();
          } else {
            void this.editorElement.requestFullscreen();
          }
        },
        icon: faUpRightAndDownLeftFromCenter,
        title: 'Toggle full screen',
      },
    ];
  };

  onChange = (content: Content): void => {
    const { json, text } = content as JSONContent & TextContent;

    if (json !== undefined) {
      this.valueCache = json;
    } else {
      const message = 'Please enter a valid JSON string';

      try {
        this.valueCache = text === '' ? '' : (this.jsonEditorOptions?.parser ?? JSON).parse(text);

        if (this.input.validationMessage === message || text === '') {
          this.input.setCustomValidity('');
        }
      } catch (e) {
        if (e instanceof SyntaxError) {
          this.input.setCustomValidity(message);
        } else {
          throw e;
        }
      }
    }

    this.value = this.valueCache;
  };

  get inputRequired(): boolean {
    return this.required && (this.value == null || this.value === '');
  }

  get schemaVersion(): string {
    if (this.jsonSchema !== true) return undefined;

    const { value } = this;

    return value == null || value['$schema'] == null ? '' : (value['$schema'] as string);
  }

  get validator(): Validator | undefined {
    const { schemaVersion, disabled, jsonSchema } = this;
    const rawThis = ProxyObservable.getRaw<BsJsonInput>(this);

    if (disabled) return;

    if (jsonSchema && typeof jsonSchema === 'object') {
      const schema = rawThis.#initJsonSchemaLibrary();

      return (json: unknown): ValidationError[] => {
        // do not validate empty documents
        if (json === undefined || !schema) return [];

        const { errors } = schema.validate(json);

        return rawThis.#processErrors(errors, json);
      };
    } else if (schemaVersion != null) {
      const ajv = rawThis.#initAjv(schemaVersion);

      return (json: unknown): ValidationError[] => {
        // do not validate empty documents
        if (json === undefined) return [];

        void ajv.validateSchema(json);

        return rawThis.#processErrorsAjv(ajv.errors, json);
      };
    }
  }

  #setContent(value: unknown): void {
    if (value !== this.valueCache) {
      // reset validation state before assigning new content
      this.input?.setCustomValidity('');

      this.content = { json: value };
      this.valueCache = value;
    }
  }

  #initAjv($schema: string): Ajv {
    // some regexp's in 2019-09/2020-12 meta-schemas are not compatible with 'v' flag, so update them
    const regExp = (pattern: string) => new RegExp(patternMap[pattern] ?? pattern, 'v');

    regExp.code = 'regexp';

    const options: Options = {
      strict: false,
      multipleOfPrecision: 2,
      code: {
        regExp,
      },
      allErrors: true,
    };
    let ajv: Ajv;

    switch ($schema) {
      case 'https://json-schema.org/draft/2019-09/schema':
        ajv = new Ajv2019(options);
        break;

      case 'https://json-schema.org/draft/2020-12/schema':
        ajv = new Ajv2020(options);
        break;

      default:
        ajv = new Ajv(options);
    }

    addFormats(ajv);

    return ajv;
  }

  #initJsonSchemaLibrary(): SchemaNode | undefined {
    const { jsonSchema } = this;

    // already a SchemaNode
    if ((jsonSchema as SchemaNode).evaluationPath) {
      return jsonSchema as SchemaNode;
    }

    try {
      return compileSchema(jsonSchema as JSONSchema, this.validatorOptions);
    } catch (e) {
      console.error('json-schema-library validator compilation error', e);

      return;
    }
  }

  #getSchemaDefinitions(schema: JSONSchema): JSONSchemaDefinitions {
    return (schema.$defs ?? schema.definitions) as JSONSchemaDefinitions;
  }

  #processErrorsAjv(errors: ErrorObject[] | null, json: unknown): ValidationError[] {
    const message = this.jsonSchema === true ? 'JSON is not a valid JSONSchema' : 'JSON does not match schema';

    this.input.setCustomValidity(errors?.length ? message : '');

    return (errors || []).map((error) => ({
      path: parsePath(json, error.instancePath),
      message: error.message || 'Unknown error',
      severity: 'warning' as ValidationSeverity,
    }));
  }

  #processErrors(errors: JsonError[] | null, json: unknown): ValidationError[] {
    const message = this.jsonSchema === true ? 'JSON is not a valid JSONSchema' : 'JSON does not match schema';

    this.input.setCustomValidity(errors?.length ? message : '');

    return (errors || []).map((error) => ({
      path: parsePath(json, error.data.pointer),
      message: error.message || 'Unknown error',
      severity: 'warning' as ValidationSeverity,
    }));
  }
}
