import { IPlatform, Controller, ICustomElementController, LifecycleFlags } from '@aurelia/runtime-html';
import { IDialogDomRenderer, IDialogGlobalSettings, IDialogController } from '@aurelia/dialog';
import { IContainer } from '@aurelia/kernel';
import { INode, InstanceProvider, Registration } from 'aurelia';
import { BsModal } from './modal';

export class BsDialogDomRenderer implements EventListenerObject {
  /** @internal */
  protected static inject = [IPlatform, IContainer];

  private controller: ICustomElementController<BsModal>;

  private modal: HTMLElement;

  private dialog: IDialogController;

  public constructor(private readonly p: IPlatform, private readonly container: IContainer) {}

  public static register(container: IContainer) {
    Registration.transient(IDialogDomRenderer, this).register(container);
  }

  public render(dialogHost: HTMLElement, dialog: IDialogController): HTMLElement | ICustomElementController {
    const { container } = this;
    const modal = this.p.document.createElement('bs-modal');

    container.registerResolver(
      this.p.HTMLElement,
      container.registerResolver(
        this.p.Element,
        container.registerResolver(INode, new InstanceProvider('ElementResolver', modal))
      )
    );

    const viewModel = container.invoke(BsModal);
    // configure modal to auto open when attached, show() returns a Promise that will wait for animation to complete
    viewModel['attached'] = (): Promise<void> => viewModel.show();
    // TODO: pass settings to viewModel through DialogService.open(...)
    Object.assign(viewModel, {});

    const controller = Controller.$el<BsModal>(container, viewModel, modal, null);
    // FIXME: activation should be done by DialogController if render() return instanceof Controller?
    // controller.activate(controller, null, LifecycleFlags.fromBind);

    dialogHost.append(dialogHost);
    modal.addEventListener('hide.bs.modal', this);

    this.modal = modal;
    this.controller = controller;
    this.dialog = dialog;

    return controller;
  }

  async dispose(): Promise<void> {
    const { controller, modal } = this;

    modal.removeEventListener('hide.bs.modal', this);

    await controller.viewModel.hide();
    await controller.deactivate(controller, null, LifecycleFlags.fromBind);

    modal.remove();
  }

  handleEvent(object: Event) {
    this.dialog.cancel();
  }
}
