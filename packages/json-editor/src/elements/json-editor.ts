import template from './json-editor.html';

import type {
  JSONSchema,
  JSONSchemaDefinitions,
  MenuItem,
  RenderMenuContext,
  RenderValueComponentDescription,
  RenderValueProps,
  ValidationError,
  Validator,
} from 'vanilla-jsoneditor';

import { coerceBoolean } from '@ekzo-dev/toolkit';
import { JsonEditor as VanillaJsonEditor } from '@ekzo-dev/vanilla-jsoneditor';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons/faUpRightAndDownLeftFromCenter';
import Ajv, { ErrorObject, Options } from 'ajv';
import Ajv2019 from 'ajv/dist/2019';
import Ajv2020 from 'ajv/dist/2020';
import addFormats from 'ajv-formats';
import { bindable, customElement } from 'aurelia';
import { JSONValue, parsePath } from 'immutable-json-patch';

@customElement({
  name: 'json-editor',
  template,
})
export class JsonEditor extends VanillaJsonEditor {
  @bindable()
  schema?: JSONSchema;

  @bindable()
  ajvOptions: Options = {};

  @bindable(coerceBoolean)
  validateAsSchema: boolean = false;

  module: any;

  #schemaVersion?: string;

  #jsonValid?: boolean;

  schemaChanged() {
    this.#updateValidator();
  }

  validateAsSchemaChanged() {
    this.#updateValidator();
  }

  jsonChanged(value: unknown) {
    if (!this.validateAsSchema) return;

    const version = this.#getSchemaVersion(value);

    if (this.#schemaVersion !== version) {
      this.#schemaVersion = version;
      this.#updateValidator();
    }
  }

  protected async createEditor(): Promise<any> {
    const module = await super.createEditor();

    this.module = module;

    await this.editor.updateProps({
      onRenderValue: (props: RenderValueProps): RenderValueComponentDescription[] => {
        let result;

        if (this.onRenderValue) {
          result = this.onRenderValue(props);
        } else if (this.schema) {
          result = module.renderJSONSchemaEnum(props, this.schema, this.#schemaDefinitions(this.schema));
        }

        return result || module.renderValue(props);
      },
      validator: this.#getValidator(),
      onRenderMenu: (items: MenuItem[], context: RenderMenuContext): MenuItem[] | undefined => {
        if (this.onRenderMenu) {
          return this.onRenderMenu(items, context);
        }

        return [
          ...items,
          {
            type: 'space',
          },
          {
            type: 'button',
            onClick: () => {
              if (document.fullscreenElement) {
                document.exitFullscreen();
              } else {
                this.host.requestFullscreen();
              }
            },
            icon: faUpRightAndDownLeftFromCenter,
            title: 'Toggle full screen',
          },
        ];
      },
    });

    return module;
  }

  #getValidator(): Validator | undefined {
    if (this.validator) return this.validator;

    const { schema, json } = this;

    if (schema) {
      const ajv = this.#initValidator(schema.$schema as string);

      addFormats(ajv);
      const validate = ajv.compile(schema);

      if (validate.errors) {
        throw validate.errors[0];
      }

      return (json: unknown): ValidationError[] => {
        validate(json);

        return this.#processErrors(validate.errors, json);
      };
    } else if (this.validateAsSchema) {
      const ajv = this.#initValidator(this.#getSchemaVersion(json));

      return (json: unknown): ValidationError[] => {
        void ajv.validateSchema(json);

        return this.#processErrors(ajv.errors, json);
      };
    }
  }

  #schemaDefinitions(schema: JSONSchema): JSONSchemaDefinitions {
    return (schema.$defs ?? schema.definitions) as JSONSchemaDefinitions;
  }

  #initValidator($schema: string): Ajv {
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

  #processErrors(errors: ErrorObject[] | null, json: unknown): ValidationError[] {
    const valid = !errors?.length;

    if (this.#jsonValid !== valid) {
      const event = new CustomEvent('validation-change', { bubbles: true, detail: { errors, valid } });

      this.#jsonValid = valid;
      this.host.dispatchEvent(event);
    }

    return (errors || []).map((error) => ({
      path: parsePath(json as JSONValue, error.instancePath),
      message: error.message || 'Unknown error',
      severity: this.module.ValidationSeverity.warning,
    }));
  }

  #updateValidator() {
    void this.editor?.updateProps({
      validator: this.#getValidator(),
    });
  }

  #getSchemaVersion(json: unknown): string {
    return json === Object(json) && json['$schema'] ? (json['$schema'] as string) : '';
  }
}
