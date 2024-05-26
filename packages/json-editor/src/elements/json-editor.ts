import template from './json-editor.html';

import type {
  JSONSchema,
  JSONSchemaDefinitions,
  RenderValueComponentDescription,
  RenderValueProps,
  ValidationError,
  Validator,
} from 'vanilla-jsoneditor';

import { JsonEditor as VanillaJsonEditor } from '@ekzo-dev/vanilla-jsoneditor';
import Ajv, { Options } from 'ajv';
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

  schemaChanged() {
    void this.editor?.updateProps({
      validator: this.#getValidator(),
    });
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
    });

    return module;
  }

  #getValidator(): Validator | undefined {
    const { schema } = this;
    let validator = this.validator;

    if (!validator && schema) {
      const options: Options = {
        strict: false,
        multipleOfPrecision: 2,
        ...this.ajvOptions,
      };
      let ajv: Ajv;

      switch (schema.$schema) {
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
      const validate = ajv.compile(schema);

      if (validate.errors) {
        throw validate.errors[0];
      }

      validator = (json: JSONValue): ValidationError[] => {
        validate(json);

        return (validate.errors || []).map((error) => ({
          path: parsePath(json, error.instancePath),
          message: error.message || 'Unknown error',
          severity: this.module.ValidationSeverity.warning,
        }));
      };
    }

    return validator;
  }

  #schemaDefinitions(schema: JSONSchema): JSONSchemaDefinitions {
    return (schema.$defs ?? schema.definitions) as JSONSchemaDefinitions;
  }
}
