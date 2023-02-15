import { valueConverter } from 'aurelia';
import { JSONSchema7 } from 'json-schema';

import { FormatBooleanValueConverter } from './boolean';
import { FormatDatetimeValueConverter } from './datetime';
import { FormatPhoneValueConverter } from './phone';
import { FormatFilesizeValueConverter } from './filesize';

@valueConverter('formatScalar')
export class FormatScalarValueConverter {
  toView(value: any, definition: JSONSchema7) {
    switch (definition.type) {
      case 'boolean':
        return new FormatBooleanValueConverter().toView(value);
      case 'string':
      case 'integer':
        switch (definition.format) {
          case 'datetime':
          case 'date':
          case 'time':
            return new FormatDatetimeValueConverter().toView(value, definition.format);
          case 'tel':
            return new FormatPhoneValueConverter().toView(value);
          case 'filesize':
            return new FormatFilesizeValueConverter().toView(value);
        }
    }

    return value;
  }
}
