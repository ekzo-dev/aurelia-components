import { IDialogController, IDialogDom, IDialogDomRenderer, IDialogSettings } from '@aurelia/dialog';
import { Controller, IContainer, INode, InstanceProvider, IPlatform, Registration, resolve } from 'aurelia';

import { BsModal } from './modal';

const overlay = document.createElement('div');

export class BsDialogDomRenderer {
  private readonly platform = resolve(IPlatform);
  private readonly container = resolve(IContainer);
  private readonly controller = resolve(IDialogController);

  public static register(container: IContainer) {
    container.register(Registration.singleton(IDialogDomRenderer, this));
  }

  public render(host: HTMLElement, settings: IDialogSettings): IDialogDom {
    const { platform } = this;
    let deactivating = false;

    // create dialog host element
    const modal = platform.document.createElement('bs-modal');

    const onHide = () => {
      modal.removeEventListener('hide.bs.modal', onHide);

      if (!deactivating) {
        // call cancel on controller if modal closing is caused by any Bootstrap events
        this.controller.cancel();
      }
    };

    modal.addEventListener('hide.bs.modal', onHide);
    host.appendChild(modal);

    // create container
    const container = this.container.createChild();

    container.registerResolver(
      platform.HTMLElement,
      container.registerResolver(
        platform.Element,
        container.registerResolver(INode, new InstanceProvider('ElementResolver', modal))
      )
    );

    // activate Bootstrap modal component
    const dialog = container.invoke(BsModal);
    const controller = Controller.$el<BsModal>(container, dialog, modal, null);

    dialog.size = 'xl';
    controller.activate(controller, null);

    return {
      contentHost: modal.querySelector('div.modal-body'),
      overlay,
      show: () => dialog.show(),
      hide: () => {
        deactivating = true;

        return dialog.hide();
      },
      dispose: () => {
        controller.deactivate(controller, null);
        modal.remove();
      },
    };
  }
}
