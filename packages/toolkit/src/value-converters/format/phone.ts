import { valueConverter } from 'aurelia';
import { parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js';

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
