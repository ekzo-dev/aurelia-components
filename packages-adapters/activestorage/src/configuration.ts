import { DI, IContainer, Registration } from 'aurelia';

export interface IEndpoint {
  url: string;
  headers?: Record<string, string>;
}

interface IActiveStorageOptions {
  directUploadEndpoint: IEndpoint;
}

export class ActiveStorageOptions implements IActiveStorageOptions {
  constructor(public directUploadEndpoint: IEndpoint = null) {}
}

export const IActiveStorageOptions = DI.createInterface<IActiveStorageOptions>('IActiveStorageOptions');

export const ActiveStorage = {
  directUploadEndpoint(endpoint: IEndpoint) {
    const options = new ActiveStorageOptions(endpoint);

    return {
      register(container: IContainer) {
        Registration.instance(ActiveStorageOptions, options).register(container);

        return Registration.instance(IActiveStorageOptions, options).register(container);
      },
    };
  },
};
