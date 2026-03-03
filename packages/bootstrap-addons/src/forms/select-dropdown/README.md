# Select Dropdown

An enhanced select component with improved styling and functionality, extending the base `BsSelect` component.

## Overview

The Select Dropdown component provides a feature-rich alternative to native select elements with Bootstrap styling, multi-select support, and performance optimization for large datasets.

## Features

- Single and multi-select support
- Multiple option formats (array, object, entries)
- Empty value handling
- Bootstrap form styling
- Floating label support
- Size variants (sm, lg)
- Performance optimized for large datasets
- Custom value matching
- Keyboard navigation
- Full Bootstrap form integration
- Inherits all BaseField functionality

## Basic Usage

```html
<bs-select-dropdown
  value.bind="selectedValue"
  options.bind="countries"
  label="Country"
></bs-select-dropdown>
```

```typescript
export class MyComponent {
  selectedValue = 'us';

  countries = [
    { value: 'us', text: 'United States' },
    { value: 'uk', text: 'United Kingdom' },
    { value: 'ca', text: 'Canada' }
  ];
}
```

## Examples

### Options as Array

```typescript
export class MyComponent {
  options = [
    { value: 1, text: 'Option 1' },
    { value: 2, text: 'Option 2', disabled: true },
    { value: 3, text: 'Option 3' }
  ];
}
```

### Options as Object

```typescript
export class MyComponent {
  options = {
    '1': 'Option 1',
    '2': 'Option 2',
    '3': 'Option 3'
  };
}
```

### Options as Entries

```typescript
export class MyComponent {
  options = [
    ['us', 'United States'],
    ['uk', 'United Kingdom'],
    ['ca', 'Canada']
  ];
}
```

### Multi-Select

```html
<bs-select-dropdown
  value.bind="selectedValues"
  options.bind="colors"
  label="Favorite Colors"
  multiple.bind="true"
></bs-select-dropdown>
```

```typescript
export class MyComponent {
  selectedValues = ['red', 'blue'];

  colors = [
    { value: 'red', text: 'Red' },
    { value: 'blue', text: 'Blue' },
    { value: 'green', text: 'Green' }
  ];
}
```

### With Floating Label

```html
<bs-select-dropdown
  value.bind="selectedValue"
  options.bind="options"
  label="Select Option"
  floating-label.bind="true"
  bs-size="lg"
></bs-select-dropdown>
```

### With Validation

```html
<bs-select-dropdown
  value.bind="selectedCountry"
  options.bind="countries"
  label="Country"
  required.bind="true"
  valid.bind="isValid"
  invalid-feedback="Please select a country"
></bs-select-dropdown>
```

### With Grouped Options

```typescript
export class MyComponent {
  options = [
    { value: 'usa', text: 'United States', group: 'North America' },
    { value: 'can', text: 'Canada', group: 'North America' },
    { value: 'mex', text: 'Mexico', group: 'North America' },
    { value: 'uk', text: 'United Kingdom', group: 'Europe' },
    { value: 'de', text: 'Germany', group: 'Europe' }
  ];
}
```

### Large Dataset (Performance)

```html
<bs-select-dropdown
  value.bind="selectedId"
  options.bind="largeDataset"
  label="Select Item"
  size.bind="10"
></bs-select-dropdown>
```

```typescript
export class MyComponent {
  largeDataset = Array.from({ length: 1000 }, (_, i) => ({
    value: i,
    text: `Item ${i + 1}`
  }));
}
```

### With Custom Matcher

```html
<bs-select-dropdown
  value.bind="selectedUser"
  options.bind="users"
  matcher.bind="userMatcher"
  label="Select User"
></bs-select-dropdown>
```

```typescript
export class MyComponent {
  selectedUser = { id: 1, name: 'John' };

  users = [
    { value: { id: 1, name: 'John' }, text: 'John Doe' },
    { value: { id: 2, name: 'Jane' }, text: 'Jane Smith' }
  ];

  userMatcher = (a, b) => a?.id === b?.id;
}
```

### With Empty Value

```html
<bs-select-dropdown
  value.bind="selectedValue"
  options.bind="options"
  empty-value.bind="null"
  label="Select Option"
></bs-select-dropdown>
```

## Bindable Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `any \| any[]` | - | Selected value(s), array for multiple mode |
| `options` | `ISelectOption[] \| [any, string][] \| Record<string, string>` | `[]` | Options as array of objects, entries, or key-value object |
| `multiple` | `boolean` | `false` | Enable multi-select mode |
| `floatingLabel` | `boolean` | `false` | Enable floating label style |
| `size` | `number` | - | Number of visible options (HTML size attribute) |
| `bsSize` | `'sm' \| 'lg'` | - | Bootstrap size variant |
| `autocomplete` | `string` | - | Autocomplete attribute value |
| `matcher` | `(a: any, b: any) => boolean` | - | Custom function to compare values |
| `emptyValue` | `any` | - | Value to use when no option is selected |

### Inherited from BaseField

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | `string` | - | Input name attribute |
| `label` | `string` | - | Label text |
| `title` | `string` | - | Title attribute |
| `disabled` | `boolean` | `false` | Disable the select |
| `required` | `boolean` | `false` | Mark as required |
| `valid` | `boolean` | - | Validation state |
| `validFeedback` | `string` | - | Valid feedback message |
| `invalidFeedback` | `string` | - | Invalid feedback message |
| `form` | `string` | - | Associated form id |
| `text` | `string \| HTMLElement` | - | Helper text |

## ISelectOption Interface

```typescript
interface ISelectOption<T = unknown> {
  value: T;           // The actual value
  text: string;       // Display text
  disabled?: boolean; // Whether option is disabled
  group?: string;     // Optional group name
}
```

## Value Matching

By default, values are compared using strict equality (`===`). For complex objects, provide a custom `matcher` function:

```typescript
// Match by ID
matcher = (a, b) => a?.id === b?.id;

// Match by multiple properties
matcher = (a, b) => a?.type === b?.type && a?.id === b?.id;

// Deep equality (use with caution for performance)
matcher = (a, b) => JSON.stringify(a) === JSON.stringify(b);
```

## Multi-Select Mode

When `multiple` is true:

- Value is an array
- Multiple options can be selected
- Ctrl/Cmd+Click to toggle selection
- Shift+Click for range selection

```typescript
export class MyComponent {
  selectedValues: string[] = ['option1', 'option2'];
}
```

## Empty Value Handling

Use `emptyValue` to specify what value should be used when no option is selected:

```html
<!-- Use null for empty -->
<bs-select-dropdown empty-value.bind="null"></bs-select-dropdown>

<!-- Use undefined for empty -->
<bs-select-dropdown empty-value.bind="undefined"></bs-select-dropdown>

<!-- Use empty string for empty -->
<bs-select-dropdown empty-value.bind="''"></bs-select-dropdown>
```

## Styling

The component uses standard Bootstrap form classes and can be styled using Bootstrap utilities:

```html
<bs-select-dropdown
  value.bind="value"
  options.bind="options"
  label="Select"
  class="mb-3"
  bs-size="sm"
></bs-select-dropdown>
```

## Accessibility

The component follows accessibility best practices:

- Proper label association
- ARIA attributes for validation states
- Keyboard navigation (Arrow keys, Enter, Space)
- Screen reader friendly
- Focus management

## Performance Optimization

For large datasets:

1. Use the `size` attribute to limit visible options
2. Consider virtual scrolling for very large lists
3. Avoid re-rendering by using stable option references
4. Use primitive values instead of objects when possible

## Browser Support

Requires browsers that support:

- ES2015+
- Custom Elements
- HTML5 form controls
