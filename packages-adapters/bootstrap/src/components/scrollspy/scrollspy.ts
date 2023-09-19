import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';

import { coerceBoolean } from '../../utils';

@customAttribute('bs-scrollspy')
export class BsScrollspy implements ICustomAttributeViewModel {
  //todo целесообразность?

  @bindable(coerceBoolean)
  id: string;

  @bindable(coerceBoolean)
  animation?: boolean;
}
