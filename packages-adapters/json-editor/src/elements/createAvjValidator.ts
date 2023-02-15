import { parsePath, JSONValue } from 'immutable-json-patch';
import type { ValidationError, Validator, ValidationSeverity } from 'vanilla-jsoneditor';
import Ajv, { Options } from 'ajv';
import addFormats from 'ajv-formats';

/**
 * Create a JSON Schema validator powered by Ajv.
 * @param schema
 * @param [schemaDefinitions=undefined]
 *                    An object containing JSON Schema definitions
 *                    which can be referenced using $ref
 * @param [ajvOptions=undefined] Optional extra options for Ajv
 * @return Returns a validation function
 */
export function createAjvValidator(schema: JSONValue, schemaDefinitions?: JSONValue, ajvOptions?: Options): Validator {
  const ajv = new Ajv({
    allErrors: true,
    verbose: true,
    $data: true,
    ...ajvOptions,
  });
  addFormats(ajv);

  if (schemaDefinitions) {
    Object.keys(schemaDefinitions).forEach((ref) => {
      ajv.addSchema(schemaDefinitions[ref], ref);
    });
  }

  const validateAjv = ajv.compile(schema as any);

  return function validate(json: JSONValue): ValidationError[] {
    validateAjv(json);
    const ajvErrors = validateAjv.errors || [];

    return ajvErrors.map(improveAjvError).map((error) => normalizeAjvError(json, error));
  };
}

function normalizeAjvError(json: JSONValue, ajvError): ValidationError {
  return {
    path: parsePath(json, ajvError.instancePath),
    message: ajvError.message,
    severity: 'warning' as ValidationSeverity,
  };
}

/**
 * Improve the error message of a JSON schema error,
 * for example list the available values of an enum.
 *
 * @param {Object} ajvError
 * @return {Object} Returns the error with improved message
 */
function improveAjvError(ajvError) {
  if (ajvError.keyword === 'enum' && Array.isArray(ajvError.schema)) {
    let enums = ajvError.schema;
    if (enums) {
      enums = enums.map((value) => JSON.stringify(value));

      if (enums.length > 5) {
        const more = ['(' + (enums.length - 5) + ' more...)'];
        enums = enums.slice(0, 5);
        enums.push(more);
      }
      ajvError.message = 'should be equal to one of: ' + enums.join(', ');
    }
  }

  if (ajvError.keyword === 'additionalProperties') {
    ajvError.message = 'should NOT have additional property: ' + ajvError.params.additionalProperty;
  }

  return ajvError;
}
