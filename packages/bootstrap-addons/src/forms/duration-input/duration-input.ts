import template from './duration-input.html';

import './duration-input.scss';

import { BaseField, Size } from '@ekzo-dev/bootstrap';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import { Temporal } from '@js-temporal/polyfill';
import { bindable, BindingMode, customElement } from 'aurelia';

type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};
type Duration = Writable<
  Partial<Pick<Temporal.Duration, 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds'>>
>;
type DurationLabels = {
  [K in keyof Duration]: string;
};

const durationKeys: (keyof Duration)[] = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'] as const;

/**
 * https://github.com/whatwg/html/issues/5488
 * https://github.com/tc39/proposal-intl-duration-format
 */
@customElement({
  name: 'bs-duration-input',
  template,
})
export class BsDurationInput extends BaseField implements EventListenerObject {
  @bindable({ mode: BindingMode.twoWay })
  get value(): string {
    const { duration } = this;

    if (durationKeys.every((v) => duration[v] == null || duration[v].toString() === '')) {
      return '';
    }

    return Temporal.Duration.from(duration).toString();
  }
  set value(value: unknown) {
    if (value == null || value === '') {
      this.duration = {};
    } else {
      this._parseDuration(value.toString());
    }
  }

  @bindable()
  bsSize?: Size;

  @bindable(coerceBoolean)
  floatingLabel: boolean = this.config.floatingLabels;

  duration: Duration = {};

  labels: DurationLabels = this.#getLabels();

  controls!: NodeListOf<HTMLInputElement>;

  get classes(): string {
    return [
      'form-control',
      this.bsSize ? `form-control-${this.bsSize}` : null,
      this.valid === true ? 'is-valid' : null,
      this.valid === false ? 'is-invalid' : null,
    ]
      .filter(Boolean)
      .join(' ');
  }

  attaching() {
    super.attaching();
    this.controls = this.host.querySelectorAll('input[type=number]');
    this.controls.forEach((control) => {
      control.addEventListener('keypress', this);
      control.addEventListener('paste', this);
    });
  }

  detaching() {
    this.controls.forEach((control) => {
      control.removeEventListener('keypress', this);
      control.removeEventListener('paste', this);
    });
  }

  handleEvent(event: KeyboardEvent | ClipboardEvent): void {
    const data = event instanceof KeyboardEvent ? event.key : event.clipboardData!.getData('text');

    // don't allow non-numeric values
    if (!/^\d+$/.test(data)) {
      event.preventDefault();
    }

    // allow pasting full duration value, e.g. P2YT2H
    if (event instanceof ClipboardEvent && data.startsWith('P')) {
      this._parseDuration(data);
    }
  }

  focus() {
    this.controls.item(0).focus();
  }

  private _parseDuration(value: string) {
    try {
      const duration = Temporal.Duration.from(value);
      const result: Duration = {};

      durationKeys.forEach((key) => {
        result[key] = duration[key] ? duration[key] : undefined;
      });
      this.duration = result;
    } catch (error) {
      if (error instanceof RangeError) {
        console.warn(`[bs-duration-input] ${error.message}`);
        this.duration = {};
      } else {
        throw error;
      }
    }
  }

  #getLabels(): DurationLabels {
    // @ts-ignore
    const str: string = new Intl['DurationFormat'](navigator.language, { style: 'narrow' }).format({
      years: 1,
      months: 1,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    });
    const labels: string[] = str
      .split('1')
      .slice(1)
      .map((n) => n.trim());

    return {
      years: labels[0],
      months: labels[1],
      days: labels[2],
      hours: labels[3],
      minutes: labels[4],
      seconds: labels[5],
    };
  }
}
