# @ekzo-dev/monaco-editor

Monaco Editor integration for Aurelia 2 applications.

This package provides an Aurelia 2 wrapper for [Monaco Editor](https://microsoft.github.io/monaco-editor/) - the code editor that powers VS Code. It enables seamless integration of the powerful Monaco Editor into your Aurelia applications with full support for two-way data binding and lifecycle management.

## Installation

```bash
npm install @ekzo-dev/monaco-editor
```

### Peer Dependencies

This package requires the following peer dependencies:

- `aurelia` ^2.0.0
- `monaco-editor` ~0.55.1

## Usage

Import and use the `monaco-editor` custom element in your Aurelia application:

```html
<monaco-editor
  value.bind="code"
  language="typescript"
  options.bind="editorOptions"
></monaco-editor>
```

```typescript
export class MyApp {
  code = `function hello() {
  console.log('Hello, World!');
}`;

  editorOptions = {
    theme: 'vs-dark',
    minimap: { enabled: false },
    automaticLayout: true,
  };
}
```

## Bindable Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | `undefined` | The editor content. Supports two-way binding (`.bind`). |
| `language` | `string` | `undefined` | Programming language mode (e.g., `'javascript'`, `'typescript'`, `'json'`, `'html'`, `'css'`). |
| `options` | `editor.IStandaloneEditorConstructionOptions` | `{}` | Monaco editor configuration options. See [Monaco Editor API](https://microsoft.github.io/monaco-editor/docs.html) for all available options. |

## Examples

### Basic JavaScript Editor

```html
<monaco-editor
  value.bind="code"
  language="javascript"
></monaco-editor>
```

### TypeScript with Dark Theme

```html
<monaco-editor
  value.bind="tsCode"
  language="typescript"
  options.bind="{ theme: 'vs-dark', fontSize: 14 }"
></monaco-editor>
```

### JSON Editor with Custom Options

```html
<monaco-editor
  value.bind="jsonData"
  language="json"
  options.bind="jsonOptions"
></monaco-editor>
```

```typescript
export class MyComponent {
  jsonData = '{\n  "name": "example"\n}';

  jsonOptions = {
    theme: 'vs-dark',
    minimap: { enabled: false },
    automaticLayout: true,
    scrollBeyondLastLine: false,
    wordWrap: 'on',
  };
}
```

### Read-Only Editor

```html
<monaco-editor
  value.bind="readOnlyCode"
  language="typescript"
  options.bind="{ readOnly: true }"
></monaco-editor>
```

## Supported Languages

Monaco Editor supports a wide range of programming languages out of the box, including:

- **Web**: `javascript`, `typescript`, `html`, `css`, `scss`, `less`, `json`
- **Backend**: `python`, `java`, `csharp`, `go`, `rust`, `php`, `ruby`
- **Markup**: `markdown`, `xml`, `yaml`
- **Other**: `sql`, `shell`, `powershell`, `dockerfile`, `graphql`

See the [Monaco Editor language documentation](https://github.com/microsoft/monaco-editor#monaco-editor) for a complete list.

## Editor Options

The `options` property accepts any valid Monaco Editor configuration. Common options include:

### Appearance
- `theme` - `'vs'` (light), `'vs-dark'` (dark), or `'hc-black'` (high contrast)
- `fontSize` - Font size in pixels
- `lineHeight` - Line height in pixels
- `fontFamily` - Font family string
- `fontWeight` - Font weight

### Behavior
- `readOnly` - Whether the editor is read-only
- `automaticLayout` - Automatically resize when container changes
- `wordWrap` - `'off'`, `'on'`, `'wordWrapColumn'`, or `'bounded'`
- `scrollBeyondLastLine` - Allow scrolling beyond the last line
- `cursorBlinking` - Cursor animation style
- `cursorStyle` - Cursor style (`'line'`, `'block'`, etc.)

### Features
- `minimap` - Minimap configuration object or `{ enabled: false }`
- `lineNumbers` - `'on'`, `'off'`, `'relative'`, or `'interval'`
- `folding` - Enable code folding
- `glyphMargin` - Show glyph margin for breakpoints/errors
- `contextmenu` - Enable context menu

For a complete list of options, see the [IStandaloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html) documentation.

## Accessing the Editor Instance

The component exposes the Monaco editor instance via the `editor` property:

```html
<monaco-editor
  value.bind="code"
  language="typescript"
  component.ref="monacoComponent"
></monaco-editor>
```

```typescript
import type { MonacoEditor } from '@ekzo-dev/monaco-editor';

export class MyComponent {
  monacoComponent!: MonacoEditor;

  attached() {
    // Access the editor instance
    const editor = this.monacoComponent.editor;

    // Use Monaco editor API
    editor?.revealLineInCenter(10);
    editor?.setPosition({ lineNumber: 5, column: 1 });
  }
}
```

## Monaco Loaded Event

The component dispatches a `monaco-loaded` custom event when the Monaco Editor module is loaded. This event bubbles and provides access to the entire Monaco Editor module:

```html
<monaco-editor
  value.bind="code"
  monaco-loaded.trigger="handleMonacoLoaded($event)"
></monaco-editor>
```

```typescript
import type { EditorModule } from '@ekzo-dev/monaco-editor';

export class MyComponent {
  handleMonacoLoaded(event: CustomEvent<EditorModule>) {
    const monaco = event.detail;

    // Register custom language
    monaco.languages.register({ id: 'myLang' });

    // Set custom theme
    monaco.editor.defineTheme('myTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {},
    });
  }
}
```

## Code Splitting

The Monaco Editor module is loaded dynamically using `import()`, which enables automatic code splitting. The editor bundle will be loaded only when the component is actually used, improving initial page load performance.

A `loading` property is available on the component to show loading state:

```html
<template>
  <div if.bind="!monacoComponent.loading">
    <monaco-editor
      value.bind="code"
      view-model.ref="monacoComponent"
    ></monaco-editor>
  </div>
  <div else>
    Loading editor...
  </div>
</template>
```

## Vite Configuration

When using Vite, you need to configure Monaco Editor workers. Add the following to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
  plugins: [
    monacoEditorPlugin({
      languageWorkers: ['editorWorkerService', 'typescript', 'json', 'css', 'html'],
    }),
  ],
});
```

Install the plugin:

```bash
npm install -D vite-plugin-monaco-editor
```

## TypeScript Support

The package includes full TypeScript definitions. Import types as needed:

```typescript
import type { MonacoEditor, EditorModule } from '@ekzo-dev/monaco-editor';
import type { editor } from 'monaco-editor';

export class MyComponent {
  monacoComponent!: MonacoEditor;

  editorOptions: editor.IStandaloneEditorConstructionOptions = {
    theme: 'vs-dark',
    fontSize: 14,
  };
}
```

## Browser Support

Monaco Editor requires a modern browser with ES2015+ support. See the [Monaco Editor browser support documentation](https://github.com/microsoft/monaco-editor#browser-support) for details.

## Performance Tips

1. **Use `automaticLayout: true`** - Ensures the editor resizes properly when container size changes
2. **Disable minimap for small editors** - Set `minimap: { enabled: false }` to improve performance
3. **Lazy load the component** - Only render when needed to avoid loading the large Monaco bundle unnecessarily
4. **Configure workers** - Properly configure web workers for language features in your build tool

## Contributing

Contributions are welcome! Please read the [contributing guidelines](https://github.com/ekzo-dev/aurelia-components/blob/main/CONTRIBUTING.md) first.

## License

MIT © [Ekzo](https://github.com/ekzo-dev)

## Links

- [GitHub Repository](https://github.com/ekzo-dev/aurelia-components)
- [Issue Tracker](https://github.com/ekzo-dev/aurelia-components/issues)
- [Monaco Editor Documentation](https://microsoft.github.io/monaco-editor/)
- [Monaco Editor API Reference](https://microsoft.github.io/monaco-editor/docs.html)
- [Aurelia 2 Documentation](https://docs.aurelia.io)
