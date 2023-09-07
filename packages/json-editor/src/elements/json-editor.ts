import { bindable, customElement } from 'aurelia';
import { JsonEditor as VanillaJsonEditor } from '@ekzo-dev/vanilla-jsoneditor';
import type {
  RenderValueProps,
  RenderValueComponentDescription,
  AjvValidatorOptions,
  Validator,
  JSONSchema,
  JSONSchemaDefinitions,
} from 'vanilla-jsoneditor';
import addFormats from 'ajv-formats';
import template from './json-editor.html';

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
          formats: {},
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
