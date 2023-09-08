import { valueConverter } from 'aurelia';
import type { JSONSchema7 } from 'json-schema';
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
        if (
          definition.enum &&
          definition.oneOf?.every((item: JSONSchema7) => item.title != null && item.const != null)
        ) {
          try {
            const label = definition.oneOf.find((item: JSONSchema7) => item.const === value);
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
