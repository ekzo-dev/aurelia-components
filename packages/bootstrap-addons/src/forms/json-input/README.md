# JSON Input

A powerful JSON editor with schema validation support, powered by [vanilla-jsoneditor](https://github.com/josdejong/svelte-jsoneditor).

## Overview

The JSON Input component provides a rich editing experience for JSON data with support for JSON Schema validation, syntax highlighting, and multiple editing modes.

## Features

- JSON Schema validation
- Tree and text editing modes
- Syntax highlighting
- Error highlighting and validation messages
- Auto-completion based on schema
- Search and replace functionality
- Undo/redo support
- Copy/paste/cut operations
- Keyboard shortcuts
- Dark mode support

## Basic Usage

```html
<bs-json-input
  value.bind="jsonData"
></bs-json-input>
```

```typescript
export class MyComponent {
  jsonData = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
  };
}
```

## Examples

### With JSON Schema Validation

```html
<bs-json-input
  value.bind="userData"
  json-schema.bind="userSchema"
></bs-json-input>
```

```typescript
export class MyComponent {
  userData = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
  };

  userSchema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 1
      },
      age: {
        type: 'number',
        minimum: 0,
        maximum: 120
      },
      email: {
        type: 'string',
        format: 'email'
      }
    },
    required: ['name', 'email']
  };
}
```

### JSON Schema Editor Mode

Use `json-schema.bind="true"` to enable JSON Schema editor mode:

```html
<bs-json-input
  value.bind="schema"
  json-schema.bind="true"
></bs-json-input>
```

```typescript
export class MyComponent {
  schema = {
    type: 'object',
    properties: {
      name: { type: 'string' }
    }
  };
}
```

### With Custom Editor Options

```html
<bs-json-input
  value.bind="jsonData"
  json-editor-options.bind="editorOptions"
></bs-json-input>
```

```typescript
export class MyComponent {
  jsonData = { /* ... */ };

  editorOptions = {
    mode: 'tree', // or 'text'
    mainMenuBar: true,
    navigationBar: true,
    statusBar: true,
    readOnly: false
  };
}
```

### Disabled State

```html
<bs-json-input
  value.bind="jsonData"
  disabled.bind="true"
></bs-json-input>
```

### Required Field

```html
<bs-json-input
  value.bind="jsonData"
  required.bind="true"
></bs-json-input>
```

## Bindable Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `any` | - | Two-way bound JSON value |
| `jsonSchema` | `object \| SchemaNode \| boolean` | - | JSON Schema for validation. Use `true` for schema editor mode |
| `required` | `boolean` | `false` | Mark as required field |
| `disabled` | `boolean` | `false` | Disable the editor (read-only mode) |
| `validatorOptions` | `object` | - | Options for json-schema-library validator |
| `jsonEditorOptions` | `object` | - | Options for vanilla-jsoneditor (see [docs](https://github.com/josdejong/svelte-jsoneditor#api)) |

## JSON Editor Options

The `jsonEditorOptions` property accepts all options from vanilla-jsoneditor:

```typescript
interface JSONEditorOptions {
  mode?: 'tree' | 'text';
  mainMenuBar?: boolean;
  navigationBar?: boolean;
  statusBar?: boolean;
  readOnly?: boolean;
  indentation?: number | string;
  tabSize?: number;
  escapeControlCharacters?: boolean;
  escapeUnicodeCharacters?: boolean;
  flattenColumns?: boolean;
  // ... and more
}
```

See [vanilla-jsoneditor API documentation](https://github.com/josdejong/svelte-jsoneditor#api) for full list of options.

## Validator Options

The `validatorOptions` property accepts options for json-schema-library validator:

```typescript
export class MyComponent {
  validatorOptions = {
    // Custom format validators
    formats: {
      phone: /^\+?[0-9]{10,15}$/
    }
  };
}
```

## JSON Schema Support

The component uses [json-schema-library](https://github.com/sagold/json-schema-library) for validation, which supports:

- Draft-04, Draft-06, Draft-07, Draft 2019-09
- All standard validation keywords
- Custom formats
- `$ref` resolution
- `allOf`, `anyOf`, `oneOf`
- Conditional schemas (`if`, `then`, `else`)

### Schema Example

```typescript
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 100
    },
    age: {
      type: 'integer',
      minimum: 0,
      maximum: 120
    },
    email: {
      type: 'string',
      format: 'email'
    },
    address: {
      type: 'object',
      properties: {
        street: { type: 'string' },
        city: { type: 'string' },
        zipCode: { type: 'string', pattern: '^[0-9]{5}$' }
      },
      required: ['street', 'city']
    },
    tags: {
      type: 'array',
      items: { type: 'string' },
      minItems: 1,
      uniqueItems: true
    }
  },
  required: ['name', 'email']
};
```

## Keyboard Shortcuts

The editor supports standard keyboard shortcuts:

- `Ctrl+Z` / `Cmd+Z` - Undo
- `Ctrl+Shift+Z` / `Cmd+Shift+Z` - Redo
- `Ctrl+F` / `Cmd+F` - Search
- `Ctrl+H` / `Cmd+H` - Replace
- `Ctrl+C` / `Cmd+C` - Copy
- `Ctrl+V` / `Cmd+V` - Paste
- `Ctrl+X` / `Cmd+X` - Cut

## Styling

The component can be styled using CSS custom properties:

```css
bs-json-input {
  --jse-theme-color: #4299e1;
  --jse-background-color: #ffffff;
  --jse-text-color: #1a202c;
}
```

## Events

The component emits standard change events that can be handled in Aurelia:

```html
<bs-json-input
  value.bind="jsonData"
  change.trigger="handleChange($event)"
></bs-json-input>
```

## Accessibility

The component follows accessibility best practices:

- Keyboard navigation support
- Screen reader friendly
- ARIA labels and roles
- Focus management

## Performance

For large JSON documents:

- Use text mode for better performance
- Consider limiting depth in tree mode
- Use `flattenColumns` option for wide objects

## Browser Support

Requires browsers that support:

- ES2015+
- Custom Elements
- Web Components
