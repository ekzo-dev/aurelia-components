import { DI, IContainer, Registration } from 'aurelia';

export interface IBootstrapOptions {
  /**
   * Use form floating labels
   * https://getbootstrap.com/docs/5.3/forms/floating-labels/
   */
  floatingLabels: boolean;
  /**
   * Use native HTML validation messages as invalid feedback
   */
  htmlValidationMessages: boolean;
  /**
   * Auto register all available components. Disable if you need to manually register only subset of components
   */
  registerComponents: boolean;
  /**
   * Icons SVG sprite location. May be external or local, then bundler (Vite/Webpack) must be configured to include it
   */
  iconsSpritePath: string;
}

const defaultOptions: IBootstrapOptions = {
  floatingLabels: false,
  htmlValidationMessages: true,
  registerComponents: true,
  iconsSpritePath: 'bootstrap-icons.svg',
};

export const IBootstrapOptions = DI.createInterface<IBootstrapOptions>('IBootstrapOptions');

export function createConfiguration(opts: Partial<IBootstrapOptions>, resources: any[]) {
  return {
    register(container: IContainer): void {
      const finalOptions = { ...defaultOptions, ...opts };

      container.register(Registration.instance(IBootstrapOptions, finalOptions));

      // Register other plugin resources
      if (finalOptions.registerComponents) {
        container.register(resources);
      }
    },
    customize(options: Partial<IBootstrapOptions>) {
      return createConfiguration(options, resources);
    },
  };
}
