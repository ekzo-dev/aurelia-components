import { IPlatform, Controller, ICustomElementController, LifecycleFlags } from '@aurelia/runtime-html';
import { IDialogDomRenderer, IDialogGlobalSettings, IDialogController } from '@aurelia/dialog';
import { IContainer } from '@aurelia/kernel';
import { INode, InstanceProvider, Registration } from 'aurelia';
import { BsModal } from './modal';

export class BsDialogDomRenderer implements EventListenerObject {
  /** @internal */
  protected static inject = [IPlatform, IContainer, IDialogController];

  private controller: ICustomElementController<BsModal>;

  private modal: HTMLElement;

  public constructor(
    private readonly platform: IPlatform,
    private readonly container: IContainer,
    private readonly dialogController: IDialogController
  ) {}

  public static register(container: IContainer) {
    Registration.transient(IDialogDomRenderer, this).register(container);
  }

  public render(componentController: ICustomElementController) {
    const { container, platform } = this;
    const { settings } = this.dialogController;
    const dialogHost = settings.host ?? platform.document.body;
    const modal = platform.document.createElement('bs-modal');

    container.registerResolver(
      platform.HTMLElement,
      container.registerResolver(
        platform.Element,
        container.registerResolver(INode, new InstanceProvider('ElementResolver', modal))
      )
    );

    const viewModel = container.invoke(BsModal);
    // configure modal to auto open when attached, show() returns a Promise that will wait for animation to complete
    viewModel['attached'] = (): Promise<void> => viewModel.show();
    // TODO: pass settings to viewModel through DialogService.open(...)
    Object.assign(viewModel, {});

    const controller = Controller.$el<BsModal>(container, viewModel, modal, {
      projections: {
        default: componentController.definition,
      },
    });
    controller.addChild(componentController);

    dialogHost.append(modal);
    modal.addEventListener('hide.bs.modal', this);

    this.modal = modal;
    this.controller = controller;

    return controller.activate(controller, null, LifecycleFlags.fromBind, componentController.scope);
  }

  async dispose(): Promise<void> {
    const { controller, modal } = this;

    modal.removeEventListener('hide.bs.modal', this);

    await controller.viewModel.hide();
    await controller.deactivate(controller, null, LifecycleFlags.fromBind);

    modal.remove();
  }

  handleEvent(object: Event) {
    this.dialogController.cancel();
  }
}
