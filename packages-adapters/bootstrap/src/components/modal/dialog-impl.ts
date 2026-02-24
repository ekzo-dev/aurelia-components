import { createDialogConfiguration, IDialogController, IDialogDom, IDialogDomRenderer } from '@aurelia/dialog';
import { onResolve } from '@aurelia/kernel';
import { registerHostNode } from '@aurelia/runtime-html';
import { Controller, IContainer, IPlatform, noop, queueTask, resolve } from 'aurelia';

import { BsModal, ModalFullscreen, ModalSize } from './modal';

export type DialogOptionsBootstrapModal = {
  /**
   * Title of the modal
   */
  title?: string;

  /**
   * Should modal appear/hide with animation?
   */
  animation?: boolean;

  /**
   * Should modal be centered on the screen?
   */
  centered?: boolean;

  /**
   * When modals become too long for the user’s viewport or device, they scroll independent of the page itself.
   * To change this and make modal scrollable itself set this to true
   */
  scrollable?: boolean;

  /**
   * Size of the modal
   */
  size?: ModalSize;

  /**
   * Configure breakpoint when modal must be open full screen
   */
  fullscreen?: ModalFullscreen;

  /**
   * Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn’t close the modal when clicked
   */
  backdrop?: boolean | 'static';

  /**
   * Close the modal when escape key is pressed
   */
  keyboard?: boolean;

  /**
   * Put the focus on the modal when initialized
   */
  focus?: boolean;
};

export class DialogRendererBootstrapModal implements IDialogDomRenderer<DialogOptionsBootstrapModal> {
  private readonly platform = resolve(IPlatform);
  private readonly container = resolve(IContainer);

  public render(host: HTMLElement, requestor: IDialogController, options: DialogOptionsBootstrapModal): IDialogDom {
    const { platform } = this;
    let deactivating = false;

    // create dialog host element
    const modal = platform.document.createElement('bs-modal');

    const onHide = () => {
      modal.removeEventListener('hide.bs.modal', onHide);

      if (!deactivating) {
        // call cancel on controller if modal closing is caused by any Bootstrap events
        void requestor.cancel();
      }
    };

    modal.addEventListener('hide.bs.modal', onHide);
    host.appendChild(modal);

    // create container
    const container = this.container.createChild();

    registerHostNode(container, modal);

    // activate Bootstrap modal component
    const dialog = container.invoke(BsModal);
    const controller = Controller.$el<BsModal>(container, dialog, modal, null);

    Object.assign(dialog, options);
    void controller.activate(controller, null);

    return {
      contentHost: modal.querySelector('div.modal-body')!,
      show: () => dialog.show(),
      hide: () => {
        deactivating = true;

        return dialog.hide();
      },
      dispose: () => {
        void onResolve(controller.deactivate(controller, null), () => {
          // remove element next tick to allow Bootstrap finish it's logic
          queueTask(() => modal.remove());
        });
      },
    };
  }
}

export const DialogConfigurationBootstrapModal = createDialogConfiguration<DialogOptionsBootstrapModal>(
  noop,
  class {
    renderer = DialogRendererBootstrapModal;
    options: DialogOptionsBootstrapModal = {};
  }
);
