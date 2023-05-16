import { bindable, customAttribute } from 'aurelia';
import { Tab } from 'bootstrap';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import './nav.scss';
import { BaseAttribute } from '../base-attribute';
import { TOGGLE } from '../../constants';

@customAttribute('bs-tab-pane')
export class BsTabPane extends BaseAttribute {
  @bindable()
  for!: string;

  @bindable(coerceBoolean)
  fade: boolean = true;

  private tab?: HTMLElement;

  attaching() {
    super.attaching();
    if (!this.element.id) {
      this.element.setAttribute('id', `${this.for}-pane`);
    }
  }

  attached() {
    this.createTab();
  }

  detaching() {
    super.detaching();
    this.destroyTab();
  }

  fadeChanged(newValue: boolean) {
    this.setClass('fade', newValue);
  }

  show() {
    Tab.getInstance(this.tab)?.show();
  }

  get classes(): string[] {
    return ['tab-pane', this.fade ? 'fade' : null].filter(Boolean);
  }

  private createTab() {
    const tab = document.getElementById(this.for);

    if (tab) {
      tab.setAttribute(TOGGLE, 'tab');
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
    this.tab?.removeAttribute(TOGGLE);
    Tab.getInstance(this.tab)?.dispose();
    this.tab = undefined;
  }
}
