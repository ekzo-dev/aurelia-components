import { createDialogConfiguration, IDialogController, IDialogDom, IDialogDomRenderer } from '@aurelia/dialog';
import { onResolve } from '@aurelia/kernel';
import { registerHostNode } from '@aurelia/runtime-html';
import { Controller, IContainer, IPlatform, noop, queueTask, resolve } from 'aurelia';

import { Breakpoint } from '../../types';

import { BsOffcanvas, OffcanvasPlacement } from './offcanvas';

export type DialogOptionsBootstrapOffcanvas = {
  /**
   * Title of the offcanvas
   */
  title?: string;

  /**
   * Allow body scrolling while the offcanvas is open
   */
  scroll?: boolean;

  /**
   * Apply a backdrop on the body while offcanvas is open.
   * Alternatively, specify static for a backdrop which doesn’t close the offcanvas when clicked
   */
  backdrop?: boolean;

  /**
   * Closes the offcanvas when an escape key is pressed
   */
  keyboard?: boolean;

  /**
   * Responsive breakpoint for the offcanvas
   */
  responsive?: Breakpoint;

  /**
   * Placement of the offcanvas
   */
  placement?: OffcanvasPlacement;
};

export class DialogRendererBootstrapOffcanvas implements IDialogDomRenderer<DialogOptionsBootstrapOffcanvas> {
  private readonly platform = resolve(IPlatform);
  private readonly container = resolve(IContainer);

  public render(host: HTMLElement, requestor: IDialogController, options: DialogOptionsBootstrapOffcanvas): IDialogDom {
    const { platform } = this;
    let deactivating = false;

    // create dialog host element
    const offcanvas = platform.document.createElement('bs-offcanvas');

    const onHide = () => {
      offcanvas.removeEventListener('hide.bs.offcanvas', onHide);

      if (!deactivating) {
        // call cancel on controller if modal closing is caused by any Bootstrap events
        void requestor.cancel();
      }
    };

    offcanvas.addEventListener('hide.bs.offcanvas', onHide);
    host.appendChild(offcanvas);

    // create container
    const container = this.container.createChild();

    registerHostNode(container, offcanvas);

    // activate Bootstrap modal component
    const dialog = container.invoke(BsOffcanvas);
    const controller = Controller.$el<BsOffcanvas>(container, dialog, offcanvas, null);

    Object.assign(dialog, options);
    void controller.activate(controller, null);

    return {
      contentHost: offcanvas.querySelector('div.offcanvas-body'),
      show: () => dialog.show(),
      hide: () => {
        deactivating = true;

        return dialog.hide();
      },
      dispose: () => {
        void onResolve(controller.deactivate(controller, null), () => {
          // remove element next tick to allow Bootstrap finish it's logic
          queueTask(() => offcanvas.remove());
        });
      },
    };
  }
}

export const DialogConfigurationBootstrapOffcanvas = createDialogConfiguration<DialogOptionsBootstrapOffcanvas>(
  noop,
  class {
    renderer = DialogRendererBootstrapOffcanvas;
    options: DialogOptionsBootstrapOffcanvas = {};
  }
);
