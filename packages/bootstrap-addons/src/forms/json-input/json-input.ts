import template from './json-input.html';

import './json-input.scss';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { JsonEditor } from '@ekzo-dev/vanilla-jsoneditor';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons/faUpRightAndDownLeftFromCenter';
import Ajv, { ErrorObject, Options } from 'ajv';
import Ajv2019 from 'ajv/dist/2019';
import Ajv2020 from 'ajv/dist/2020';
import addFormats from 'ajv-formats';
import { bindable, BindingMode, customElement } from 'aurelia';
import { JSONValue, parsePath } from 'immutable-json-patch';
import {
  JSONEditorPropsOptional,
  JSONSchema,
  JSONSchemaDefinitions,
  MenuItem,
  RenderValueComponentDescription,
  RenderValueProps,
  ValidationError,
  ValidationSeverity,
  Validator,
} from 'vanilla-jsoneditor';

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

  @bindable({ set: (v) => (v === '' || v === true || v === 'true' ? true : v) })
  jsonSchema?: JSONSchema | boolean;

  @bindable()
  ajvOptions: Options = {};

  @bindable()
  jsonEditorOptions: JSONEditorPropsOptional = {};

  editorModule?: typeof import('vanilla-jsoneditor');

  schemaVersion?: string;

  readonly input!: HTMLInputElement;

  readonly editor!: HTMLElement;

  async binding() {
    this.schemaVersion = this.#getSchemaVersion(this.value);
    this.editorModule = await import('vanilla-jsoneditor');
  }

  valueChanged(value: unknown) {
    this.schemaVersion = this.jsonSchema === true ? this.#getSchemaVersion(value) : undefined;

    if (value == null || value === '') {
      this.input.setCustomValidity('');
    }
  }

  onRenderValue = (props: RenderValueProps): RenderValueComponentDescription[] => {
    let result: RenderValueComponentDescription[] | null;
    const { jsonSchema } = this;

    if (jsonSchema && typeof jsonSchema === 'object') {
      result = this.editorModule.renderJSONSchemaEnum(props, jsonSchema, this.#getSchemaDefinitions(jsonSchema));
    }

    return result ?? this.editorModule.renderValue(props);
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
            void this.editor.requestFullscreen();
          }
        },
        icon: faUpRightAndDownLeftFromCenter,
        title: 'Toggle full screen',
      },
    ];
  };

  get inputRequired(): boolean {
    return this.required && (this.value == null || this.value === '');
  }

  get validator(): Validator | undefined {
    const { jsonSchema, schemaVersion, disabled } = this;
    const rawThis = this['__raw__'] as BsJsonInput;

    if (jsonSchema && typeof jsonSchema === 'object' && !disabled) {
      const ajv = rawThis.#initAjv(jsonSchema.$schema as string);

      addFormats(ajv);
      const validate = ajv.compile(jsonSchema);

      if (validate.errors) {
        throw validate.errors[0];
      }

      return (json: unknown): ValidationError[] => {
        validate(json);

        return rawThis.#processErrors(validate.errors, json);
      };
    } else if (schemaVersion != null && !disabled) {
      const ajv = rawThis.#initAjv(schemaVersion);

      return (json: unknown): ValidationError[] => {
        void ajv.validateSchema(json);

        return rawThis.#processErrors(ajv.errors, json);
      };
    }
  }

  #initAjv($schema: string): Ajv {
    const options: Options = {
      strict: false,
      multipleOfPrecision: 2,
      ...this.ajvOptions,
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

    return ajv;
  }

  #getSchemaDefinitions(schema: JSONSchema): JSONSchemaDefinitions {
    return (schema.$defs ?? schema.definitions) as JSONSchemaDefinitions;
  }

  #getSchemaVersion(value: unknown): string {
    return value === Object(value) && value['$schema'] ? (value['$schema'] as string) : '';
  }

  #processErrors(errors: ErrorObject[] | null, json: unknown): ValidationError[] {
    const message = this.jsonSchema === true ? 'JSON is not a valid JSONSchema' : 'JSON does not match schema';

    this.input.setCustomValidity(errors?.length ? message : '');

    return (errors || []).map((error) => ({
      path: parsePath(json as JSONValue, error.instancePath),
      message: error.message || 'Unknown error',
      severity: 'warning' as ValidationSeverity,
    }));
  }
}
