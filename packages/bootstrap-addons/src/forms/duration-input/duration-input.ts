import template from './duration-input.html';

import './duration-input.scss';

import '@formatjs/intl-durationformat/polyfill';

import { BaseField, Size } from '@ekzo-dev/bootstrap';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import { bindable, BindingMode, customElement } from 'aurelia';

interface IDuration {
  years?: string;
  months?: string;
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
}

@customElement({
  name: 'bs-duration-input',
  template,
})
export class BsDurationInput extends BaseField {
  @bindable({ mode: BindingMode.twoWay })
  get value(): string {
    const { years, months, days, hours, minutes, seconds } = this.duration;

    const date = `${years ? years + 'Y' : ''}${months ? months + 'M' : ''}${days ? days + 'D' : ''}`;
    const time = `${hours ? hours + 'H' : ''}${minutes ? minutes + 'M' : ''}${seconds ? seconds + 'S' : ''}`;

    return date || time ? `P${date}${time ? 'T' + time : ''}` : '';
  }
  set value(value: string) {
    const match = value.match(/^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/);

    if (match) {
      this.duration = {
        years: match[1],
        months: match[2],
        days: match[3],
        hours: match[4],
        minutes: match[5],
        seconds: match[6],
      };
    } else {
      this.duration = {};
    }
  }

  @bindable()
  bsSize?: Size;

  @bindable(coerceBoolean)
  floatingLabel: boolean = false;

  duration: IDuration = {};

  labels: IDuration = this.#getLabels();

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

  #getLabels(): IDuration {
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
