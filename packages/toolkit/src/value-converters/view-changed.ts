import { valueConverter } from 'aurelia';

@valueConverter('viewChanged')
export class ViewChangedValueConverter {
  fromView(value: unknown, callback: (value: unknown) => void) {
    callback(value);

    return value;
  }
}
