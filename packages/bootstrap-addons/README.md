# @ekzo-dev/bootstrap-addons

Additional Bootstrap form components for Aurelia 2 applications.

This package extends [@ekzo-dev/bootstrap](https://github.com/ekzo-dev/aurelia-components/tree/main/packages-adapters/bootstrap) with advanced form components that provide enhanced functionality beyond the standard Bootstrap form controls.

## Installation

```bash
npm install @ekzo-dev/bootstrap-addons
```

### Peer Dependencies

This package requires the following peer dependencies:

- `aurelia` ^2.0.0
- `bootstrap` ~5.3.7
- `@popperjs/core` ^2.11.8
- `vanilla-jsoneditor` ~3.11.0
- `immutable-json-patch` ^6.0.1

## Usage

Register the plugin in your Aurelia application:

```typescript
import Aurelia from 'aurelia';
import { BootstrapAddonsConfiguration } from '@ekzo-dev/bootstrap-addons';

Aurelia
  .register(BootstrapAddonsConfiguration)
  .app(MyApp)
  .start();
```

## Components

### Duration Input

A form control for entering time durations in ISO 8601 format (e.g., `P5DT1H` for 5 days and 1 hour).

**Features:**
- ISO 8601 duration format support
- Separate inputs for days, hours, minutes, seconds
- Integration with Bootstrap form validation
- Floating label support
- Size variants (sm, lg)

**Example:**

```html
<bs-duration-input
  value.bind="duration"
  label="Duration"
  required.bind="true"
  floating-label.bind="true"
  bs-size="lg"
></bs-duration-input>
```

**Bindable Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | - | Two-way bound ISO 8601 duration string |
| `bsSize` | `'sm' \| 'lg'` | - | Bootstrap size variant |
| `floatingLabel` | `boolean` | `false` | Enable floating label style |
| `name` | `string` | - | Input name attribute |
| `label` | `string` | - | Label text |
| `disabled` | `boolean` | `false` | Disable the input |
| `required` | `boolean` | `false` | Mark as required |
| `valid` | `boolean` | - | Validation state |
| `validFeedback` | `string` | - | Valid feedback message |
| `invalidFeedback` | `string` | - | Invalid feedback message |

### JSON Input

A powerful JSON editor with schema validation support, powered by [vanilla-jsoneditor](https://github.com/josdejong/svelte-jsoneditor).

**Features:**
- JSON Schema validation
- Tree and text editing modes
- Syntax highlighting
- Error highlighting
- Auto-completion
- Search and replace
- Undo/redo support

**Example:**

```html
<bs-json-input
  value.bind="jsonData"
  json-schema.bind="schema"
  required.bind="true"
  disabled.bind="false"
></bs-json-input>
```

**With JSON Schema:**

```typescript
export class MyComponent {
  jsonData = { name: 'John', age: 30 };

  schema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'number', minimum: 0 }
    },
    required: ['name', 'age']
  };
}
```

**Bindable Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `any` | - | Two-way bound JSON value |
| `jsonSchema` | `object \| boolean` | - | JSON Schema for validation. Use `true` for schema editor mode |
| `required` | `boolean` | `false` | Mark as required |
| `disabled` | `boolean` | `false` | Disable the editor |
| `validatorOptions` | `object` | - | Options for json-schema-library validator |
| `jsonEditorOptions` | `object` | - | Options for vanilla-jsoneditor |

### Select Dropdown

An enhanced select component with improved styling and functionality, extending the base `BsSelect` component.

**Features:**
- Single and multi-select support
- Custom option rendering
- Empty value handling
- Bootstrap styling
- Floating label support
- Size variants (sm, lg)
- Performance optimized for large datasets

**Example:**

```html
<bs-select-dropdown
  value.bind="selectedValue"
  options.bind="countries"
  label="Country"
  multiple.bind="false"
  floating-label.bind="true"
  bs-size="sm"
></bs-select-dropdown>
```

**With Options Array:**

```typescript
export class MyComponent {
  countries = [
    { value: 'us', text: 'United States' },
    { value: 'uk', text: 'United Kingdom' },
    { value: 'ca', text: 'Canada' }
  ];

  selectedValue = 'us';
}
```

**With Key-Value Object:**

```typescript
export class MyComponent {
  countries = {
    'us': 'United States',
    'uk': 'United Kingdom',
    'ca': 'Canada'
  };
}
```

**Bindable Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `any \| any[]` | - | Selected value(s), array for multiple mode |
| `options` | `ISelectOption[] \| [any, string][] \| Record<string, string>` | `[]` | Options as array or object |
| `multiple` | `boolean` | `false` | Enable multi-select mode |
| `floatingLabel` | `boolean` | `false` | Enable floating label style |
| `size` | `number` | - | Number of visible options |
| `bsSize` | `'sm' \| 'lg'` | - | Bootstrap size variant |
| `autocomplete` | `string` | - | Autocomplete attribute |
| `matcher` | `function` | - | Custom value matching function |
| `emptyValue` | `any` | - | Value to use for empty selection |
| `name` | `string` | - | Input name attribute |
| `label` | `string` | - | Label text |
| `disabled` | `boolean` | `false` | Disable the select |
| `required` | `boolean` | `false` | Mark as required |
| `valid` | `boolean` | - | Validation state |

## Types

### ISelectOption

```typescript
interface ISelectOption<T = unknown> {
  value: T;
  text: string;
  disabled?: boolean;
  group?: string;
}
```

## Dependencies

This package uses:

- **@ekzo-dev/bootstrap** - Core Bootstrap components for Aurelia 2
- **@ekzo-dev/vanilla-jsoneditor** - Aurelia 2 adapter for vanilla-jsoneditor
- **@ekzo-dev/toolkit** - Utility functions and helpers
- **vanilla-jsoneditor** - JSON editor component
- **json-schema-library** - JSON Schema validation
- **ajv** - Another JSON Schema validator
- **@js-temporal/polyfill** - Temporal API polyfill for date/time handling

## Browser Support

This package supports all modern browsers that support ES2015+ and the following features:

- Custom Elements (Web Components)
- ES Modules
- Temporal API (polyfilled)

## Contributing

Contributions are welcome! Please read the [contributing guidelines](https://github.com/ekzo-dev/aurelia-components/blob/main/CONTRIBUTING.md) first.

## License

MIT © [Ekzo](https://github.com/ekzo-dev)

## Links

- [GitHub Repository](https://github.com/ekzo-dev/aurelia-components)
- [Issue Tracker](https://github.com/ekzo-dev/aurelia-components/issues)
- [Aurelia 2 Documentation](https://docs.aurelia.io)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
