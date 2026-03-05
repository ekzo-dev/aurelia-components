# @ekzo-dev/vanilla-jsoneditor

Aurelia 2 adapter for [svelte-jsoneditor](https://github.com/josdejong/svelte-jsoneditor) - a powerful JSON editor with tree, text, and table viewing modes.

## Overview

This package provides a seamless integration of svelte-jsoneditor (vanilla-jsoneditor package) into Aurelia 2 applications. It wraps the editor as a native Aurelia custom element with full two-way data binding support.

## Features

- **Multiple Viewing Modes** - Tree, text, and table modes
- **Syntax Highlighting** - Beautiful syntax highlighting in text mode
- **Tree Navigation** - Interactive tree view with expand/collapse
- **Table View** - Tabular view for arrays of objects
- **Search & Replace** - Powerful search and replace functionality
- **JSON Schema Validation** - Built-in validation support
- **Query Languages** - Support for JMESPath, JSONPath, and more
- **Undo/Redo** - Full undo/redo support
- **Dark Theme** - Built-in dark theme support
- **Read-Only Mode** - Display JSON without editing
- **Two-Way Binding** - Aurelia two-way data binding for content

## Installation

```bash
npm install @ekzo-dev/vanilla-jsoneditor
```

### Peer Dependencies

This package requires:

- `aurelia` ^2.0.0
- `vanilla-jsoneditor` ~3.11.0
- `immutable-json-patch` ^6.0.1

## Basic Example

```html
<vanilla-jsoneditor
  content.bind="jsonContent"
  mode="tree"
></vanilla-jsoneditor>
```

```typescript
export class MyComponent {
  jsonContent = {
    json: {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com'
    }
  };
}
```

## Examples

### Tree Mode (Default)

```html
<vanilla-jsoneditor
  content.bind="content"
  mode="tree"
  theme="default"
></vanilla-jsoneditor>
```

```typescript
export class MyComponent {
  content = {
    json: {
      user: 'admin',
      settings: {
        theme: 'dark',
        notifications: true
      }
    }
  };
}
```

### Text Mode

```html
<vanilla-jsoneditor
  content.bind="content"
  mode="text"
></vanilla-jsoneditor>
```

```typescript
export class MyComponent {
  content = {
    text: JSON.stringify({ name: 'Jane' }, null, 2)
  };
}
```

### Table Mode

For arrays of objects, table mode provides a spreadsheet-like view:

```html
<vanilla-jsoneditor
  content.bind="content"
  mode="table"
></vanilla-jsoneditor>
```

```typescript
export class MyComponent {
  content = {
    json: [
      { id: 1, name: 'Alice', age: 28 },
      { id: 2, name: 'Bob', age: 35 },
      { id: 3, name: 'Charlie', age: 42 }
    ]
  };
}
```

### Dark Theme

```html
<vanilla-jsoneditor
  content.bind="content"
  theme="dark"
></vanilla-jsoneditor>
```

### Read-Only Mode

```html
<vanilla-jsoneditor
  content.bind="content"
  read-only
></vanilla-jsoneditor>
```

### With JSON Schema Validation

```html
<vanilla-jsoneditor
  content.bind="content"
  validator.bind="validator"
></vanilla-jsoneditor>
```

```typescript
import Ajv from 'ajv';

export class MyComponent {
  content = {
    json: {
      name: 'John',
      age: 30
    }
  };

  validator = {
    validate: (json) => {
      const ajv = new Ajv();
      const schema = {
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'number', minimum: 0 }
        },
        required: ['name', 'age']
      };

      const valid = ajv.validate(schema, json);

      if (!valid) {
        return ajv.errors.map(error => ({
          path: error.instancePath.split('/').filter(Boolean),
          message: error.message
        }));
      }

      return [];
    }
  };
}
```

### Custom Formatting

```html
<vanilla-jsoneditor
  content.bind="content"
  indentation.bind="4"
  tab-size.bind="4"
  escape-unicode-characters
></vanilla-jsoneditor>
```

### Minimal UI

```html
<vanilla-jsoneditor
  content.bind="content"
  main-menu-bar.bind="false"
  navigation-bar.bind="false"
  status-bar.bind="false"
></vanilla-jsoneditor>
```

## Bindable Properties

### Content and Selection

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `content` | `Content` | `{ text: '' }` | Two-way bound editor content (can be `{ json }` or `{ text }`) |
| `selection` | `JSONEditorSelection` | - | Current selection state |

### Display Mode

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mode` | `'tree' \| 'text' \| 'table'` | `'tree'` | Editor viewing mode |
| `theme` | `'default' \| 'dark'` | `'default'` | Color theme |

### UI Controls

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mainMenuBar` | `boolean` | `true` | Show/hide main menu bar |
| `navigationBar` | `boolean` | `true` | Show/hide navigation bar |
| `statusBar` | `boolean` | `true` | Show/hide status bar |
| `readOnly` | `boolean` | `false` | Enable read-only mode |
| `askToFormat` | `boolean` | `true` | Ask to format when pasting unformatted JSON |

### Formatting

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `indentation` | `number \| string` | `2` | Number of spaces for indentation |
| `tabSize` | `number` | `4` | Tab size in spaces |
| `escapeControlCharacters` | `boolean` | `false` | Escape control characters |
| `escapeUnicodeCharacters` | `boolean` | `false` | Escape unicode characters |
| `flattenColumns` | `boolean` | `true` | Flatten columns in table mode |

### Validation and Parsing

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `validator` | `Validator` | - | JSON Schema validator |
| `parser` | `JSON` | `JSON` | JSON parser instance |
| `validationParser` | `JSONParser` | `JSON` | Parser for validation |
| `pathParser` | `JSONPathParser` | - | Custom path parser |
| `queryLanguages` | `QueryLanguage[]` | - | Available query languages |
| `queryLanguageId` | `string` | - | Active query language ID |

### Event Callbacks

| Property | Type | Description |
|----------|------|-------------|
| `onError` | `(err: Error) => void` | Error handler |
| `onChange` | `(content, previousContent, changeStatus) => void` | Content change handler |
| `onChangeMode` | `(mode) => void` | Mode change handler |
| `onClassName` | `(path, value) => string \| undefined` | Custom CSS class for values |
| `onRenderValue` | `(props) => RenderValueComponentDescription[]` | Custom value renderer |
| `onSelect` | `(selection) => void` | Selection change handler |
| `onRenderMenu` | `(items, context) => MenuItem[]` | Custom menu renderer |
| `onChangeQueryLanguage` | `(queryLanguageId) => void` | Query language change handler |
| `onFocus` | `() => void` | Focus event handler |
| `onBlur` | `() => void` | Blur event handler |

## Content Format

The `content` property accepts two formats:

### JSON Content

```typescript
content = {
  json: {
    name: 'John',
    age: 30
  }
};
```

### Text Content

```typescript
content = {
  text: '{"name":"John","age":30}'
};
```

## Public Methods

The component exposes the following methods:

```typescript
// Get current content
const content = editor.get();

// Set content
editor.set({ json: { name: 'Jane' } });

// Apply JSON Patch
editor.patch([
  { op: 'replace', path: '/name', value: 'Jane' }
]);

// Expand path
editor.expand(['address', 'city']);

// Scroll to path
await editor.scrollTo(['address']);

// Find element by path
const element = editor.findElement(['name']);

// Validate content
const errors = editor.validate();

// Select content
editor.select({
  path: ['name'],
  type: 'value'
});

// Focus editor
editor.focus();

// Refresh editor
await editor.refresh();
```

## Keyboard Shortcuts

The editor supports standard keyboard shortcuts:

- `Ctrl+Z` / `Cmd+Z` - Undo
- `Ctrl+Shift+Z` / `Cmd+Shift+Z` - Redo
- `Ctrl+F` / `Cmd+F` - Search
- `Ctrl+H` / `Cmd+H` - Replace
- `Ctrl+D` / `Cmd+D` - Duplicate
- `Ctrl+C` / `Cmd+C` - Copy
- `Ctrl+V` / `Cmd+V` - Paste
- `Ctrl+X` / `Cmd+X` - Cut
- `Delete` / `Backspace` - Remove

## Styling

The component can be styled using CSS custom properties:

```css
vanilla-jsoneditor {
  --jse-theme-color: #4299e1;
  --jse-background-color: #ffffff;
  --jse-text-color: #1a202c;
  height: 600px;
  width: 100%;
}
```

## Performance

For large JSON documents:

- Use **text mode** for best performance
- Disable `navigationBar` and `statusBar` if not needed
- Use `flattenColumns: false` in table mode for wide objects
- Consider lazy loading for very large datasets

## Browser Support

Requires browsers that support:

- ES2015+
- Custom Elements
- Web Components
- ES Modules

## Links

- [svelte-jsoneditor GitHub](https://github.com/josdejong/svelte-jsoneditor)
- [svelte-jsoneditor Documentation](https://github.com/josdejong/svelte-jsoneditor#api)
- [Aurelia 2 Documentation](https://docs.aurelia.io)

## License

MIT © [Ekzo](https://github.com/ekzo-dev)
