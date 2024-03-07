import type { JSONSchema7 } from 'json-schema';

import { valueConverter } from 'aurelia';

import { FormatBoolean } from './boolean';
import { FormatDatetime } from './datetime';
import { FormatFilesize } from './filesize';
import { FormatPhone } from './phone';

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
          definition.anyOf?.every((item: JSONSchema7) => item.title != null && item.const != null)
        ) {
          const node = definition.anyOf.find((item: JSONSchema7) => item.const === value);

          if (node) {
            return (node as JSONSchema7).title;
          }
        }

        switch (definition.format) {
          case 'date-time':

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
