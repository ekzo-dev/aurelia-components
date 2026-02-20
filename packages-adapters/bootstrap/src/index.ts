import * as components from './components';
import { createConfiguration, IBootstrapOptions } from './configuration';
import * as content from './content';
import * as forms from './forms';
import { BsIcon } from './icon';

const BootstrapConfiguration = createConfiguration({}, [
  ...Object.values(components),
  ...Object.values(forms),
  ...Object.values(content),
  BsIcon,
]);

export * from './components';
export * from './content';
export * from './forms';
export * from './types';
export { BootstrapConfiguration, BsIcon, IBootstrapOptions };
