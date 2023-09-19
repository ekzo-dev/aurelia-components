// import { Container, FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

// import {
//     CheckboxCustomElement,
//     FileFieldCustomElement,
//     RadioCustomElement,
//     TextFieldCustomElement,
//     SelectCustomElement,
//     SwitchCustomElement,
// } from './elements/forms';

// import { Config } from './config';
//
// export function configure(frameworkConfig: FrameworkConfiguration, callback) {
//     frameworkConfig.globalResources([
//         CheckboxCustomElement,
//         FileFieldCustomElement,
//         RadioCustomElement,
//         SelectCustomElement,
//         SwitchCustomElement,
//         TextFieldCustomElement,
//     ]);
//
//     if (typeof callback === 'function') {
//         callback(Container.instance.get(Config));
//     }
//
//     frameworkConfig.plugin(PLATFORM.moduleName('aurelia-inputmask'));
// }

export * from './components';
export * from './content';
export * from './forms';
export * from './icon';
export * from './types';
