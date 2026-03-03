# Duration Input

A form control for entering time durations in ISO 8601 format.

## Overview

The Duration Input component allows users to input time durations using separate fields for days, hours, minutes, and seconds. The component automatically converts the input to ISO 8601 duration format (e.g., `P5DT1H` for 5 days and 1 hour).

## Features

- ISO 8601 duration format support
- Separate inputs for days, hours, minutes, seconds
- Integration with Bootstrap form validation
- Floating label support
- Size variants (sm, lg)
- Full Bootstrap styling
- Inherits all BaseField functionality

## Basic Usage

```html
<bs-duration-input
  value.bind="duration"
  label="Duration"
></bs-duration-input>
```

```typescript
export class MyComponent {
  duration = 'P5DT1H30M'; // 5 days, 1 hour, 30 minutes
}
```

## Examples

### With Validation

```html
<bs-duration-input
  value.bind="duration"
  label="Task Duration"
  required.bind="true"
  invalid-feedback="Please enter a duration"
></bs-duration-input>
```

### With Floating Label

```html
<bs-duration-input
  value.bind="duration"
  label="Duration"
  floating-label.bind="true"
  bs-size="lg"
></bs-duration-input>
```

### Custom Validation

```html
<bs-duration-input
  value.bind="duration"
  label="Duration"
  valid.bind="isValid"
  valid-feedback="Duration is valid"
  invalid-feedback="Duration must be at least 1 hour"
></bs-duration-input>
```

```typescript
export class MyComponent {
  duration = '';

  get isValid() {
    if (!this.duration) return undefined;
    // Check if duration is at least 1 hour
    const match = this.duration.match(/PT(\d+)H/);
    return match && parseInt(match[1]) >= 1;
  }
}
```

## Bindable Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | - | Two-way bound ISO 8601 duration string (e.g., `P5DT1H30M`) |
| `bsSize` | `'sm' \| 'lg'` | - | Bootstrap size variant |
| `floatingLabel` | `boolean` | `false` | Enable floating label style |

### Inherited from BaseField

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | `string` | - | Input name attribute |
| `label` | `string` | - | Label text |
| `title` | `string` | - | Title attribute |
| `disabled` | `boolean` | `false` | Disable the input |
| `required` | `boolean` | `false` | Mark as required |
| `valid` | `boolean` | - | Validation state (undefined = not validated, true = valid, false = invalid) |
| `validFeedback` | `string` | - | Valid feedback message |
| `invalidFeedback` | `string` | - | Invalid feedback message |
| `form` | `string` | - | Associated form id |
| `text` | `string \| HTMLElement` | - | Helper text displayed below the input |

## ISO 8601 Duration Format

The component uses ISO 8601 duration format:

- `P` - Period designator (required)
- `nD` - Number of days
- `T` - Time designator (required if hours/minutes/seconds are present)
- `nH` - Number of hours
- `nM` - Number of minutes
- `nS` - Number of seconds

### Examples

- `P5D` - 5 days
- `PT2H` - 2 hours
- `PT30M` - 30 minutes
- `P1DT6H30M` - 1 day, 6 hours, 30 minutes
- `PT1H30M45S` - 1 hour, 30 minutes, 45 seconds

## Styling

The component uses standard Bootstrap form control classes and can be styled using Bootstrap utilities:

```html
<bs-duration-input
  value.bind="duration"
  label="Duration"
  class="mb-3"
  bs-size="sm"
></bs-duration-input>
```

## Accessibility

The component follows accessibility best practices:

- Proper label association
- ARIA attributes for validation states
- Keyboard navigation support
- Screen reader friendly

## Browser Support

Requires browsers that support:

- ES2015+
- Custom Elements
- Temporal API (polyfilled)
