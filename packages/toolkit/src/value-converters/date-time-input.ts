import { valueConverter } from 'aurelia';

type DataType = 'time' | 'date-time';

const p = (value: number): string => String(value).padStart(2, '0');

@valueConverter('dateTimeInput')
export class DateTimeInputValueConverter {
  toView(value: string, type: DataType): string {
    if (value == null || value === '') return undefined;

    if (type === 'date-time') {
      try {
        const d = new Date(value);

        return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
      } catch (e) {
        console.warn(`Discard invalid value on date-time field: ${value}`);

        return undefined;
      }
    }

    if (type === 'time') {
      return value.replace('Z', '');
    }

    console.error('missing required parameter "type" for DateTimeInputConverter');

    return undefined;
  }

  fromView(value: string, type: DataType): string {
    if (value == null || value === '') return undefined;

    if (type === 'date-time') {
      try {
        return new Date(`${value}:00`).toISOString();
      } catch (e) {
        console.warn(`Discard invalid value on date-time field: ${value}`);

        return undefined;
      }
    }

    if (type === 'time') {
      return `${value}${value.length === 5 ? ':00' : ''}Z`;
    }

    console.error('missing required parameter "type" for DateTimeInputConverter');

    return undefined;
  }
}
