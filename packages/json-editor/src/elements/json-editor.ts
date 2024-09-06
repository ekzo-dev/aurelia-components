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

  module: any;

  #schemaVersion?: string;

  schemaChanged() {
    void this.editor?.updateProps({
      validator: this.#getValidator(),
    });
  }

  jsonChanged(value: unknown) {
    const version: string = value === Object(value) ? (value['$schema'] as string) : undefined;

    if (this.#schemaVersion !== version) {
      this.schemaChanged();
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

    this.#schemaVersion = undefined;

    if (schema) {
      const ajv = this.#initValidator(schema.$schema as string);

      addFormats(ajv);
      const validate = ajv.compile(schema);

      if (validate.errors) {
        throw validate.errors[0];
      }

      return (json: unknown): ValidationError[] => {
        validate(json);

        return this.#formatErrors(validate.errors, json);
      };
    } else if (json === Object(json) && typeof json['$schema'] === 'string') {
      const ajv = this.#initValidator(json['$schema']);

      this.#schemaVersion = json['$schema'];

      return (json: unknown): ValidationError[] => {
        void ajv.validateSchema(json);

        return this.#formatErrors(ajv.errors, json);
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

  #formatErrors(errors: ErrorObject[], json: unknown): ValidationError[] {
    return (errors || []).map((error) => ({
      path: parsePath(json as JSONValue, error.instancePath),
      message: error.message || 'Unknown error',
      severity: this.module.ValidationSeverity.warning,
    }));
  }
}
