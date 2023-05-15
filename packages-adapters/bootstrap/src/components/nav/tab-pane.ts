import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import { Tab } from 'bootstrap';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import './nav.scss';

@customAttribute('bs-tab-pane')
export class BsTabPane implements ICustomAttributeViewModel {
  @bindable()
  fade: boolean = true;

  @bindable()
  for!: string;

  private tab?: HTMLElement;

  constructor(private element: HTMLElement) {}

  attaching() {
    this.setClass(['tab-pane', this.fade ? 'fade' : ''].filter(Boolean));
    if (!this.element.id) {
      this.element.setAttribute('id', `${this.for}-pane`);
    }
  }

  attached() {
    this.createTab();
  }

  detaching() {
    this.setClass(['tab-pane', 'fade'], false);
    this.destroyTab();
  }

  fadeChanged(value: boolean) {
    this.setClass(['fade'], value);
  }

  show() {
    Tab.getInstance(this.tab)?.show();
  }

  private setClass(list: string[], add: boolean = true) {
    this.element.classList[add ? 'add' : 'remove'](...list);
  }

  private createTab() {
    const tab = document.getElementById(this.for);

    if (tab) {
      tab.setAttribute('data-bs-toggle', 'tab');
      tab.setAttribute('data-bs-target', `#${this.element.id}`);

      if (tab.classList.contains('active')) {
        this.setClass(['show', 'active']);
      }
      this.tab = tab;
    } else {
      console.error(`Tab nav-link #${this.for} not found for tab-pane`);
    }
  }

  private destroyTab() {
    this.tab?.removeAttribute('data-bs-toggle');
    Tab.getInstance(this.tab)?.dispose();
    this.tab = undefined;
  }
}
