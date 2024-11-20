import { ISelectOption } from '@ekzo-dev/bootstrap';
import { valueConverter } from 'aurelia';

@valueConverter('filter')
export class Filter {
  toView(
    list: Map<string, ISelectOption[]> | ISelectOption[],
    search: string
  ): Map<string, ISelectOption[]> | ISelectOption[] {
    if (search === '') return list;

    const cb = (option: { text: string }) => option.text.toLowerCase().includes(search.toLowerCase());

    if (list instanceof Map) {
      const result = new Map<string, ISelectOption[]>();

      list.forEach((v, k) => {
        const matchedOptions = v.filter(cb);
        // const matchedGroup = cb({ text: k });

        if (matchedOptions.length /* || matchedGroup */) {
          result.set(k, matchedOptions);
        }
      });

      return result;
    } else {
      return list.filter(cb);
    }
  }
}
