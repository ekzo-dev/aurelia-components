import { Blob, DirectUpload, DirectUploadDelegate } from '@rails/activestorage';
import { bindable, customAttribute, ICustomAttributeViewModel, resolve } from 'aurelia';

import { ActiveStorageOptions, IEndpoint } from './configuration';

export interface AsBlob extends Partial<Blob> {
  file: File;
  id: number;
  progress?: number;
}

/**
 * TODO: issue on https://github.com/rails/rails/tree/main/activestorage/app/javascript/activestorage to export DirectUploadController
 */
function dispatchEvent(element, type, eventInit: CustomEventInit = {}) {
  const { disabled } = element;
  const { bubbles, cancelable, detail } = eventInit;
  const event = new CustomEvent<AsBlob>(type, {
    detail: detail || {},
    bubbles: bubbles ?? true,
    cancelable: cancelable ?? true,
  });

  try {
    element.disabled = false;
    element.dispatchEvent(event);
  } finally {
    element.disabled = disabled;
  }

  return event;
}

class DirectUploadController implements DirectUploadDelegate {
  directUpload: DirectUpload;

  constructor(
    private input,
    private file,
    private url,
    private headers: Record<string, string>
  ) {
    this.directUpload = new DirectUpload(this.file, this.url, this);
    this.dispatch('initialize');
  }

  start(callback: (error: Error) => void) {
    this.dispatch('start');

    this.directUpload.create((error, attributes) => {
      if (error) {
        this.dispatchError(error);
      }

      this.dispatch('end', attributes);
      callback(error);
    });
  }

  uploadRequestDidProgress(event: ProgressEvent) {
    const progress = (event.loaded / event.total) * 100;

    if (progress) {
      this.dispatch('progress', { progress });
    }
  }

  dispatch(name: string, detail: Record<string, any> = {}) {
    detail.file = this.file;
    detail.id = this.directUpload.id;

    return dispatchEvent(this.input, `direct-upload:${name}`, { detail });
  }

  dispatchError(error) {
    const event = this.dispatch('error', { error });

    if (!event.defaultPrevented) {
      alert(error);
    }
  }

  // DirectUpload delegate

  directUploadWillCreateBlobWithXHR(xhr: XMLHttpRequest) {
    if (this.headers) {
      Object.entries(this.headers).forEach(([name, value]) => {
        xhr.setRequestHeader(name, value);
      });
    }

    this.dispatch('before-blob-request', { xhr });
  }

  directUploadWillStoreFileWithXHR(xhr: XMLHttpRequest) {
    this.dispatch('before-storage-request', { xhr });
    xhr.upload.addEventListener('progress', (event) => this.uploadRequestDidProgress(event));
  }
}

@customAttribute({
  name: 'as-direct-upload',
})
export class AsDirectUpload implements ICustomAttributeViewModel, EventListenerObject {
  @bindable()
  endpoint: IEndpoint = null;

  @bindable()
  clear: boolean = false;

  private uploading: number = 0;

  private input = resolve(HTMLElement) as HTMLInputElement;

  private options = resolve(ActiveStorageOptions);

  attaching() {
    this.input.addEventListener('change', this);
  }

  detaching() {
    this.input.removeEventListener('change', this);
  }

  handleEvent(_: Event): void {
    if (this.input.files.length) {
      this.save(this.input.files);
    }
  }

  private save(files: FileList): void {
    const endpoint = this.endpoint || this.options?.directUploadEndpoint;

    if (!endpoint) {
      console.error(
        `[AsDirectUpload] Endpoint configuration missing. Register endpoint via DI or pass directly to custom attribute`
      );

      return;
    }

    for (let i = 0; i < files.length; ++i) {
      const file = files.item(i);

      const controller = new DirectUploadController(this.input, file, endpoint.url, endpoint.headers);

      controller.start(() => {
        this.uploading--;

        if (this.uploading === 0 && this.clear) {
          this.input.value = null;
        }
      });

      this.uploading++;
    }
  }
}
