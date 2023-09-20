import { valueConverter } from 'aurelia';
import { CountryCode, parsePhoneNumberFromString } from 'libphonenumber-js';

@valueConverter('formatPhone')
export class FormatPhone {
  toView(value: string, country: CountryCode = 'RU') {
    if (value === undefined || value === null) return value;

    const phone = parsePhoneNumberFromString('+' + value, country);

    if (phone && phone.isValid()) {
      return phone.formatInternational();
    } else {
      return value;
    }
  }
}
