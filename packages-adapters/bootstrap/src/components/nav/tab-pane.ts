import { bindable, customAttribute, ICustomAttributeViewModel } from 'aurelia';
import { coerceBoolean } from '@ekzo-dev/toolkit';
import './nav.scss';

@customAttribute('bs-tab-pane')
export class BsTabPane implements ICustomAttributeViewModel {
  @bindable()
  fade: boolean = true;

  @bindable()
  for!: string;

  classList!: DOMTokenList;

  tab?: HTMLElement;

  constructor(private element: HTMLElement) {
    this.classList = element.classList;
  }

  attaching() {
    this.classList.add(...['tab-pane', this.fade ? 'fade' : ''].filter(Boolean));
    this.attributes({ id: `${this.for}-pane` });
  }

  attached() {
    this.tab = document.getElementById(this.for);
    this.tabAttributes(true);
  }

  detaching() {
    this.classList.remove('tab-pane', 'fade');
    this.attributes({ id: null });
    this.tabAttributes(false);
  }

  fadeChanged(value: boolean) {
    this.classList.toggle('fade', value);
  }

  private attributes(attributes: Record<string, string | null>, element?: HTMLElement) {
    const elem = element || this.element;

    Object.entries(attributes).forEach(([name, value]) => {
      if (value != null) {
        elem.setAttribute(name, value);
      } else {
        elem.removeAttribute(name);
      }
    });
  }

  private tabAttributes(set: boolean) {
    const { tab } = this;

    if (tab) {
      this.attributes(
        {
          'data-bs-toggle': set ? 'tab' : null,
          'data-bs-target': set ? `#${this.for}-pane` : null,
        },
        tab
      );

      if (tab.classList.contains('active')) {
        this.classList.add('show', 'active');
      }
    } else if (set) {
      console.error(`Tab nav-link #${this.for} not found for tab-pane`);
    }
  }
}
