import template from './duration-input.html';

import './duration-input.scss';

import { BaseField, Size } from '@ekzo-dev/bootstrap';
import { bindable, BindingMode, customElement } from 'aurelia';

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

  duration: {
    years?: string;
    months?: string;
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  } = {};

  get classes(): string {
    return [
      'input-group',
      this.bsSize ? `input-group-${this.bsSize}` : null,
      this.valid === true ? 'is-valid' : null,
      this.valid === false ? 'is-invalid' : null,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
