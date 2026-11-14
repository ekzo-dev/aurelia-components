import { tasksSettled } from '@aurelia/runtime';
import { createFixture } from '@aurelia/testing';
import { customElement } from 'aurelia';

import { BsStepper, BsStepperStep } from '../src';

/** Content that takes its time to attach — a form whose fields load something first */
@customElement({ name: 'slow-content', template: 'slow' })
class SlowContent {
  attaching() {
    return new Promise<void>((resolve) => setTimeout(resolve, 20));
  }
}

class Host {
  stepper!: BsStepper;

  first: boolean = true;
}

async function mount(template: string, configure?: (host: Host) => void) {
  const host = new Host();
  configure?.(host);

  const fixture = createFixture(template, host, [BsStepper, BsStepperStep, SlowContent]);
  await fixture.started;
  await new Promise((resolve) => setTimeout(resolve, 50));
  await tasksSettled();

  return fixture;
}

function labels(fixture: { appHost: HTMLElement; component: Host }) {
  return {
    steps: fixture.component.stepper.steps.map((step) => step.label),
    header: [...fixture.appHost.querySelectorAll('.bs-stepper-label')].map((label) => label.textContent),
  };
}

describe('bs-stepper', () => {
  it('keeps its steps in the order of the document when a step attaches late', async () => {
    const fixture = await mount(`
      <bs-stepper component.ref="stepper">
        <bs-stepper-step number="1" label="Connection"><slow-content></slow-content></bs-stepper-step>
        <bs-stepper-step number="2" label="Operations"></bs-stepper-step>
      </bs-stepper>`);

    expect(labels(fixture)).toEqual({ steps: ['Connection', 'Operations'], header: ['Connection', 'Operations'] });
    // the stepper opens on the first step of the document
    const [connection, operations] = fixture.component.stepper.steps;
    expect(connection.host.classList.contains('active')).toBe(true);
    expect(operations.host.classList.contains('active')).toBe(false);

    await fixture.stop(true);
  });

  it('puts a step shown again back in its place', async () => {
    const fixture = await mount(
      `
      <bs-stepper component.ref="stepper">
        <bs-stepper-step number="1" label="Schema" if.bind="first"></bs-stepper-step>
        <bs-stepper-step number="2" label="Connection"></bs-stepper-step>
        <bs-stepper-step number="3" label="Operations"></bs-stepper-step>
      </bs-stepper>`,
      (host) => (host.first = false)
    );

    expect(labels(fixture).steps).toEqual(['Connection', 'Operations']);

    fixture.component.first = true;
    await tasksSettled();

    expect(labels(fixture)).toEqual({
      steps: ['Schema', 'Connection', 'Operations'],
      header: ['Schema', 'Connection', 'Operations'],
    });

    await fixture.stop(true);
  });
});
