import { valueConverter } from 'aurelia';

@valueConverter('iterable')
export class IterableValueConverter {
  toView(value: any) {
    if (value instanceof Object && value.constructor === Object) {
      value = new Map(Object.entries(value));
    }
    return value;
    /*let index = 0;
        let propKeys = Reflect.ownKeys(value);
        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                if (index < propKeys.length) {
                    let key = propKeys[index];
                    index++;
                    return { value: [key, value[key]] };
                } else {
                    return { done: true };
                }
            }
        };*/
  }
}
