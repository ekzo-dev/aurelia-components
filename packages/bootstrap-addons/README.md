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

| Component | Description | Documentation |
|-----------|-------------|---------------|
| **Duration Input** | Form control for entering time durations in ISO 8601 format | [View docs](./src/forms/duration-input/README.md) |
| **JSON Input** | Powerful JSON editor with schema validation support | [View docs](./src/forms/json-input/README.md) |
| **Select Dropdown** | Enhanced select component with improved styling and functionality | [View docs](./src/forms/select-dropdown/README.md) |

## Quick Examples

### Duration Input

```html
<bs-duration-input
  value.bind="duration"
  label="Duration"
  required.bind="true"
></bs-duration-input>
```

### JSON Input

```html
<bs-json-input
  value.bind="jsonData"
  json-schema.bind="schema"
></bs-json-input>
```

### Select Dropdown

```html
<bs-select-dropdown
  value.bind="selectedValue"
  options.bind="countries"
  label="Country"
></bs-select-dropdown>
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
