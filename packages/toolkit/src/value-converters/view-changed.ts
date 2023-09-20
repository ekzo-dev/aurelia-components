import { valueConverter } from 'aurelia';

@valueConverter('viewChanged')
export class ViewChangedValueConverter {
  fromView(value: any, callback: (any) => void) {
    callback(value);

    return value;
  }
}
