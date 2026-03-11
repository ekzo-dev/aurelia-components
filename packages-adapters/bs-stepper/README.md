# @ekzo-dev/bs-stepper

Aurelia 2 adapter for [bs-stepper](https://github.com/Johann-S/bs-stepper) - a lightweight JavaScript library that creates step-by-step wizards and multi-step forms with Bootstrap styling.

## Installation

```bash
npm install @ekzo-dev/bs-stepper
```

### Peer Dependencies

This package requires the following peer dependencies:

- `aurelia` ^2.0.0
- `bs-stepper` ~1.7.0

## Usage

### Basic Example

```html
<bs-stepper>
  <bs-stepper-step number="1" label="Email">
    <bs-input label="Email address" type="email"></bs-input>
    <button click.trigger="stepper.next()">Next</button>
  </bs-stepper-step>

  <bs-stepper-step number="2" label="Password">
    <bs-input label="Password" type="password"></bs-input>
    <button click.trigger="stepper.previous()">Previous</button>
    <button click.trigger="stepper.next()">Next</button>
  </bs-stepper-step>

  <bs-stepper-step number="3" label="Complete">
    <p>Review your information and submit</p>
    <button click.trigger="stepper.previous()">Previous</button>
    <button click.trigger="submit()">Submit</button>
  </bs-stepper-step>
</bs-stepper>
```

### Accessing Stepper Methods

Use `component.ref` to access the stepper instance and its methods:

```html
<bs-stepper component.ref="stepper">
  <bs-stepper-step number="1" label="Step 1">
    <button click.trigger="stepper.next()">Next</button>
  </bs-stepper-step>

  <bs-stepper-step number="2" label="Step 2">
    <button click.trigger="stepper.previous()">Previous</button>
    <button click.trigger="stepper.next()">Next</button>
  </bs-stepper-step>

  <bs-stepper-step number="3" label="Step 3">
    <button click.trigger="stepper.previous()">Previous</button>
    <button click.trigger="stepper.reset()">Reset</button>
  </bs-stepper-step>
</bs-stepper>
```

## Components

### bs-stepper

The main container component for the stepper.

#### Bindable Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `linear` | `boolean` | `true` | If `true`, users must complete steps in order. If `false`, users can navigate to any step. |
| `animation` | `boolean` | `false` | Enable fade animation when switching between steps. |
| `vertical` | `boolean` | `false` | Display stepper in vertical layout instead of horizontal. |

#### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `next()` | - | Navigate to the next step. |
| `previous()` | - | Navigate to the previous step. |
| `to(stepNumber)` | `stepNumber: number` | Navigate to a specific step by its index (0-based). |
| `reset()` | - | Reset the stepper to the first step. |

#### Example with All Properties

```html
<bs-stepper
  linear.bind="true"
  animation.bind="true"
  vertical.bind="false"
  component.ref="stepper">

  <bs-stepper-step number="1" label="Account">
    <!-- Step content -->
  </bs-stepper-step>

  <bs-stepper-step number="2" label="Profile">
    <!-- Step content -->
  </bs-stepper-step>
</bs-stepper>
```

### bs-stepper-step

Individual step component that must be placed inside `<bs-stepper>`.

#### Bindable Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | Yes | The label displayed in the step header. |
| `number` | `string` | No | The number or icon displayed in the step circle. If not provided, steps will be auto-numbered. |

#### Example

```html
<bs-stepper-step number="1" label="Personal Information">
  <form>
    <input type="text" placeholder="Name">
    <input type="email" placeholder="Email">
  </form>
</bs-stepper-step>
```

## Examples

### Linear Stepper (Default)

Users must complete steps in order:

```html
<bs-stepper linear.bind="true" component.ref="stepper">
  <bs-stepper-step number="1" label="Basic Info">
    <input type="text" placeholder="Name">
    <button click.trigger="stepper.next()">Next</button>
  </bs-stepper-step>

  <bs-stepper-step number="2" label="Contact">
    <input type="email" placeholder="Email">
    <button click.trigger="stepper.previous()">Back</button>
    <button click.trigger="stepper.next()">Next</button>
  </bs-stepper-step>

  <bs-stepper-step number="3" label="Review">
    <p>Please review your information</p>
    <button click.trigger="stepper.previous()">Back</button>
    <button click.trigger="submit()">Submit</button>
  </bs-stepper-step>
</bs-stepper>
```

### Non-Linear Stepper

Users can navigate to any step:

```html
<bs-stepper linear.bind="false" component.ref="stepper">
  <bs-stepper-step number="1" label="Step 1">
    <!-- Content -->
  </bs-stepper-step>

  <bs-stepper-step number="2" label="Step 2">
    <!-- Content -->
  </bs-stepper-step>

  <bs-stepper-step number="3" label="Step 3">
    <!-- Content -->
  </bs-stepper-step>
</bs-stepper>
```

### Vertical Stepper

Display steps vertically:

```html
<bs-stepper vertical.bind="true" component.ref="stepper">
  <bs-stepper-step number="1" label="Step 1">
    <!-- Content -->
  </bs-stepper-step>

  <bs-stepper-step number="2" label="Step 2">
    <!-- Content -->
  </bs-stepper-step>

  <bs-stepper-step number="3" label="Step 3">
    <!-- Content -->
  </bs-stepper-step>
</bs-stepper>
```

### Stepper with Animation

Enable fade transitions between steps:

```html
<bs-stepper animation.bind="true" component.ref="stepper">
  <bs-stepper-step number="1" label="Step 1">
    <!-- Content -->
  </bs-stepper-step>

  <bs-stepper-step number="2" label="Step 2">
    <!-- Content -->
  </bs-stepper-step>
</bs-stepper>
```

### Complete Form Example

```typescript
export class RegistrationForm {
  formData = {
    email: '',
    password: '',
    name: '',
    agreed: false,
  };

  stepper!: BsStepper;

  validateEmail() {
    if (this.formData.email) {
      this.stepper.next();
    } else {
      alert('Please enter an email');
    }
  }

  validatePassword() {
    if (this.formData.password && this.formData.password.length >= 8) {
      this.stepper.next();
    } else {
      alert('Password must be at least 8 characters');
    }
  }

  submit() {
    if (this.formData.agreed) {
      console.log('Form submitted:', this.formData);
      this.stepper.reset();
    } else {
      alert('Please agree to terms');
    }
  }
}
```

```html
<bs-stepper
  linear.bind="true"
  animation.bind="true"
  component.ref="stepper">

  <bs-stepper-step number="1" label="Email">
    <h3>Enter your email</h3>
    <input
      type="email"
      value.bind="formData.email"
      placeholder="Email address">
    <button click.trigger="validateEmail()">Next</button>
  </bs-stepper-step>

  <bs-stepper-step number="2" label="Password">
    <h3>Create a password</h3>
    <input
      type="password"
      value.bind="formData.password"
      placeholder="Password (min 8 characters)">
    <button click.trigger="stepper.previous()">Back</button>
    <button click.trigger="validatePassword()">Next</button>
  </bs-stepper-step>

  <bs-stepper-step number="3" label="Profile">
    <h3>Tell us about yourself</h3>
    <input
      type="text"
      value.bind="formData.name"
      placeholder="Full name">
    <button click.trigger="stepper.previous()">Back</button>
    <button click.trigger="stepper.next()">Next</button>
  </bs-stepper-step>

  <bs-stepper-step number="4" label="Review">
    <h3>Review your information</h3>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Name:</strong> ${formData.name}</p>
    <label>
      <input type="checkbox" checked.bind="formData.agreed">
      I agree to the terms and conditions
    </label>
    <button click.trigger="stepper.previous()">Back</button>
    <button click.trigger="submit()">Submit</button>
  </bs-stepper-step>
</bs-stepper>
```

### Programmatic Navigation

```typescript
export class WizardComponent {
  stepper!: BsStepper;

  goToReview() {
    // Jump directly to step 3 (0-based index)
    this.stepper.to(2);
  }

  restartWizard() {
    this.stepper.reset();
  }
}
```

```html
<bs-stepper component.ref="stepper">
  <bs-stepper-step number="1" label="Start">
    <button click.trigger="goToReview()">Skip to Review</button>
  </bs-stepper-step>

  <bs-stepper-step number="2" label="Middle">
    <!-- Content -->
  </bs-stepper-step>

  <bs-stepper-step number="3" label="Review">
    <button click.trigger="restartWizard()">Start Over</button>
  </bs-stepper-step>
</bs-stepper>
```

## Styling

The component includes the default bs-stepper CSS. You can customize the appearance by overriding CSS classes:

```css
/* Customize step colors */
.bs-stepper-header .step-trigger {
  padding: 1rem;
}

.bs-stepper-circle {
  background-color: #007bff;
}

.bs-stepper-label {
  font-weight: bold;
}

/* Active step */
.bs-stepper-header .step.active .bs-stepper-circle {
  background-color: #28a745;
}

/* Completed step */
.bs-stepper-header .step.done .bs-stepper-circle {
  background-color: #6c757d;
}
```

## Events

The bs-stepper library dispatches custom events:

- `show.bs-stepper` - Fired before a step is shown
- `shown.bs-stepper` - Fired after a step is shown

Note: These events do not bubble by default in the current implementation.

## TypeScript Support

The package includes full TypeScript definitions:

```typescript
import { BsStepper, BsStepperStep, IBsStepperEventDetail } from '@ekzo-dev/bs-stepper';

export class MyComponent {
  stepper!: BsStepper;

  attached() {
    // Access stepper methods with full type safety
    this.stepper.next();
    this.stepper.to(2);
  }
}
```

## Browser Support

Supports all modern browsers that are compatible with Aurelia 2 and Bootstrap 5.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](https://github.com/ekzo-dev/aurelia-components/blob/main/CONTRIBUTING.md) first.

## License

MIT © [Ekzo](https://github.com/ekzo-dev)

## Links

- [GitHub Repository](https://github.com/ekzo-dev/aurelia-components)
- [Issue Tracker](https://github.com/ekzo-dev/aurelia-components/issues)
- [bs-stepper Documentation](https://github.com/Johann-S/bs-stepper)
- [bs-stepper Demo](https://johann-s.github.io/bs-stepper/)
- [Aurelia 2 Documentation](https://docs.aurelia.io)