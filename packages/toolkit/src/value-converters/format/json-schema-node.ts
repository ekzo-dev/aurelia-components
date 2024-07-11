import type { JSONSchema7, JSONSchema7Type } from 'json-schema';

import { valueConverter } from 'aurelia';

import { FormatBoolean } from './boolean';
import { FormatDatetime } from './datetime';
import { FormatFilesize } from './filesize';
import { FormatPhone } from './phone';

@valueConverter('formatJsonSchemaNode')
export class FormatJsonSchemaNode {
  toView(value: JSONSchema7Type, definition: JSONSchema7) {
    switch (definition.type) {
      case 'boolean':
        return new FormatBoolean().toView(value as boolean);

      case 'string':

      case 'integer':
        if (definition.enum && definition.anyOf) {
          const node = definition.anyOf[definition.enum.indexOf(value)];

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
            return new FormatPhone().toView(value as string);

          case 'filesize':
            return new FormatFilesize().toView(value as number);
        }
    }

    return value;
  }
}
