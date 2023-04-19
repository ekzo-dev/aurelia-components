import { valueConverter } from 'aurelia';
import { JSONSchema7 } from 'json-schema';
import { FormatBoolean } from './boolean';
import { FormatDatetime } from './datetime';
import { FormatPhone } from './phone';
import { FormatFilesize } from './filesize';

@valueConverter('formatJsonSchemaNode')
export class FormatJsonSchemaNode {
  toView(value: any, definition: JSONSchema7) {
    switch (definition.type) {
      case 'boolean':
        return new FormatBoolean().toView(value);
      case 'string':
      case 'integer':
        if (definition.enum && definition.description) {
          try {
            const labels = JSON.parse(definition.description);
            const label = labels[value.toString()];
            if (label) {
              return label;
            }
          } catch (e) {}
        }

        switch (definition.format) {
          case 'datetime':
          case 'date':
          case 'time':
            return new FormatDatetime().toView(value, definition.format);
          case 'tel':
            return new FormatPhone().toView(value);
          case 'filesize':
            return new FormatFilesize().toView(value);
        }
    }

    return value;
  }
}
