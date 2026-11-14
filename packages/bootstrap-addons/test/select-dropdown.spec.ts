import { tasksSettled } from '@aurelia/runtime';
import { createFixture } from '@aurelia/testing';
import { BootstrapConfiguration, ISelectOption } from '@ekzo-dev/bootstrap';

import { BsSelectDropdown } from '../src/forms/select-dropdown';

type StoppableFixture = {
  stop(dispose?: boolean): void | Promise<void>;
};

class Host {
  value: unknown = 'b';

  disabled: boolean = false;

  options: ISelectOption[] = [
    { value: 'a', text: 'Alpha' },
    { value: 'b', text: 'Bravo' },
    { value: 'c', text: 'Charlie' },
  ];

  changes: unknown[] = [];

  /** Records the pick, the way a form does. */
  onChange = (): void => {
    this.changes.push(this.value);
  };
}

const fixtures: StoppableFixture[] = [];

async function mountSelect(configure?: (host: Host) => void) {
  const host = new Host();
  configure?.(host);

  const fixture = createFixture(
    `<bs-select-dropdown
      value.bind="value"
      options.bind="options"
      disabled.bind="disabled"
      change.trigger="onChange()"
    ></bs-select-dropdown>`,
    host,
    [BootstrapConfiguration, BsSelectDropdown]
  );

  fixtures.push(fixture);
  await fixture.started;
  await tasksSettled();

  return fixture;
}

function control(appHost: HTMLElement): HTMLInputElement {
  return appHost.querySelector('input.form-select') as HTMLInputElement;
}

function menu(appHost: HTMLElement): HTMLElement {
  return appHost.querySelector('.dropdown-menu') as HTMLElement;
}

function items(appHost: HTMLElement): HTMLElement[] {
  return Array.from(appHost.querySelectorAll('.dropdown-menu .dropdown-item'));
}

/** Opens the menu the way a user does, and asserts it really is open. */
async function open(appHost: HTMLElement): Promise<void> {
  control(appHost).click();
  await tasksSettled();

  expect(control(appHost).classList.contains('show')).toBe(true);
  expect(menu(appHost).classList.contains('show')).toBe(true);
}

afterEach(async () => {
  await Promise.all(fixtures.splice(0).map((fixture) => fixture.stop(true)));
});

describe('bs-select-dropdown', () => {
  it('shows the text of the bound value', async () => {
    const fixture = await mountSelect();

    expect(control(fixture.appHost).value).toBe('Bravo');
    expect(items(fixture.appHost).map((item) => item.textContent!.trim())).toStrictEqual(['Alpha', 'Bravo', 'Charlie']);
  });

  it('marks the option of the bound value as active', async () => {
    const fixture = await mountSelect();

    expect(items(fixture.appHost).map((item) => item.classList.contains('active'))).toStrictEqual([false, true, false]);
  });

  it('picks an option, reports the change and closes the menu', async () => {
    const fixture = await mountSelect();
    await open(fixture.appHost);

    items(fixture.appHost)[2].click();
    await tasksSettled();

    expect(fixture.component.value).toBe('c');
    expect(fixture.component.changes).toStrictEqual(['c']);
    expect(control(fixture.appHost).value).toBe('Charlie');
    expect(control(fixture.appHost).classList.contains('show')).toBe(false);
    expect(menu(fixture.appHost).classList.contains('show')).toBe(false);
  });

  it('disables the control from its binding', async () => {
    const fixture = await mountSelect((host) => {
      host.disabled = true;
    });

    expect(control(fixture.appHost).disabled).toBe(true);
  });

  it('closes an open menu when the control is disabled', async () => {
    const fixture = await mountSelect();
    await open(fixture.appHost);

    fixture.component.disabled = true;
    await tasksSettled();

    // Bootstrap skips disabled toggles when it closes menus, and refuses to hide one itself, so a
    // menu still open at this point would stay on screen for good.
    expect(control(fixture.appHost).disabled).toBe(true);
    expect(control(fixture.appHost).classList.contains('show')).toBe(false);
    expect(menu(fixture.appHost).classList.contains('show')).toBe(false);
  });

  it('closes the menu when the pick itself disables the control', async () => {
    const fixture = await mountSelect();
    fixture.component.onChange = () => {
      fixture.component.changes.push(fixture.component.value);
      fixture.component.disabled = true;
    };
    await open(fixture.appHost);

    items(fixture.appHost)[0].click();
    await tasksSettled();

    expect(fixture.component.changes).toStrictEqual(['a']);
    expect(control(fixture.appHost).disabled).toBe(true);
    expect(control(fixture.appHost).classList.contains('show')).toBe(false);
    expect(menu(fixture.appHost).classList.contains('show')).toBe(false);
  });

  it('survives being disabled while the menu was never opened', async () => {
    const fixture = await mountSelect();

    fixture.component.disabled = true;
    await tasksSettled();

    expect(control(fixture.appHost).disabled).toBe(true);
    expect(menu(fixture.appHost).classList.contains('show')).toBe(false);
  });
});
