import template from './json-editor.html';

import type {
  AjvValidatorOptions,
  JSONSchema,
  JSONSchemaDefinitions,
  RenderValueComponentDescription,
  RenderValueProps,
  Validator,
} from 'vanilla-jsoneditor';

import { JsonEditor as VanillaJsonEditor } from '@ekzo-dev/vanilla-jsoneditor';
import addFormats from 'ajv-formats';
import { bindable, customElement } from 'aurelia';

@customElement({
  name: 'json-editor',
  template,
})
export class JsonEditor extends VanillaJsonEditor {
  @bindable()
  schema?: JSONSchema;

  module: any;

  schemaChanged() {
    this.editor.updateProps({
      validator: this.getValidator(this.module),
    });
  }

  protected async createEditor(): Promise<any> {
    const module = await super.createEditor();

    await this.editor.updateProps({
      onRenderValue: (props: RenderValueProps): RenderValueComponentDescription[] => {
        let result;

        if (this.onRenderValue) {
          result = this.onRenderValue(props);
        } else if (this.schema) {
          result = module.renderJSONSchemaEnum(props, this.schema, this.schemaDefinitions(this.schema));
        }

        return result || module.renderValue(props);
      },
      validator: this.getValidator(module),
    });

    this.module = module;

    return module;
  }

  private getValidator(module: {
    createAjvValidator: (options: AjvValidatorOptions) => Validator;
  }): Validator | undefined {
    let validator = this.validator;

    if (!validator && this.schema) {
      validator = module.createAjvValidator({
        schema: this.schema as any,
        schemaDefinitions: this.schemaDefinitions(this.schema),
        ajvOptions: {
          // https://ajv.js.org/options.html#multipleofprecision
          multipleOfPrecision: 2,
        },
        onCreateAjv: (ajv) => {
          addFormats(ajv);
        },
      });
    }

    return validator;
  }

  private schemaDefinitions(schema: JSONSchema): JSONSchemaDefinitions {
    return (schema.definitions || schema.$defs) as JSONSchemaDefinitions;
  }
}
