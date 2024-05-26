import { bindable, BindingMode, customAttribute, resolve } from 'aurelia';

export interface IDragNDropConfig {
  role: 'source' | 'target' | 'all';
  payload?: any;
  hide?: boolean;
  dropHandler?: any;
  dropEffect?: 'copy' | 'move' | 'link';
  addClass?: string;
  canDrop?: boolean;
}

export const defaultConfig: IDragNDropConfig = {
  payload: null,
  hide: false,
  dropHandler: null,
  dropEffect: 'copy',
  role: 'all',
  addClass: '',
  canDrop: true,
};

@customAttribute('drag-n-drop')
export class DragNDropCustomAttribute {
  /* all-in-one config */
  @bindable({ primary: true })
  config: IDragNDropConfig;

  /**
   * the value associated with the element (ie: index, ID)
   */
  @bindable({ mode: BindingMode.twoWay })
  payload: any;

  /**
   * set through drag-n-drop - hides the element if true
   */
  @bindable()
  hide: boolean;

  /**
   * update function to call from parent
   */
  @bindable()
  dropHandler: any;

  /**
   * effect allowed to the element
   */
  @bindable()
  dropEffect: 'copy' | 'move' | 'link';

  /**
   * element's role: Source | Target | All
   */
  @bindable()
  role: 'source' | 'target' | 'all';

  /**
   * custom class
   */
  @bindable()
  addClass: string;

  /**
   * custom class
   */
  @bindable()
  canDrop: boolean;

  /**
   * counter for DragEnter - DragLeave
   */
  private dragCounter = 0;

  private sourceEvents: string[] = ['dragstart', 'dragend'];
  private targetEvents: string[] = ['dragenter', 'dragover', 'dragleave', 'drop'];

  constructor(private readonly element: HTMLElement = resolve(HTMLElement)) {
    // window.addEventListener('dragend', (event) => this.dragend(event));
  }

  binding() {
    const config: IDragNDropConfig = Object.assign({}, defaultConfig, this.config);

    Object.keys(config).map((key) => {
      this[key] = this[key] || config[key];
    });
  }

  destroy() {
    // window.removeEventListener('dragend', (event) => this.dragend(event));
  }

  attaching() {
    if (['all', 'source'].includes(this.role)) {
      this.element.setAttribute('draggable', 'true');
      this.element.classList.add('moveable');

      this.sourceEvents.forEach((type) => {
        this.element.addEventListener(type, (event) => this[type](event));
      });
    }

    if (['all', 'target'].includes(this.role)) {
      this.targetEvents.forEach((type) => {
        this.element.addEventListener(type, (event) => this[type](event));
      });
    }
  }

  detaching() {
    if (['all', 'source'].includes(this.role)) {
      this.element.removeAttribute('draggable');
      this.element.classList.remove('moveable');

      this.sourceEvents.forEach((type) => {
        this.element.removeEventListener(type, (event) => this[type](event));
      });
    }

    if (['all', 'target'].includes(this.role)) {
      this.targetEvents.forEach((type) => {
        this.element.removeEventListener(type, (event) => this[type](event));
      });
    }
  }

  dragstart(event) {
    // if (event.stopPropagation) {
    //   event.stopPropagation()
    // }

    this.dragCounter = 0;
    event.dataTransfer.effectAllowed = this.dropEffect;
    event.dataTransfer.setData('input/plain', JSON.stringify(this.payload));
    this.element.style.opacity = '0.5';
    // (this.element as HTMLElement).style.transform = 'scale(0.9, 0.9)';
    this.element.setAttribute('moving', '');
    // this.dragging = true;

    // this.element.classList.remove('column')
  }

  dragend(event) {
    // TODO: over / under - зачем?
    this.element.classList.remove('over');
    this.element.style.opacity = '';
    // (this.element as HTMLElement).style.transform = '';
    this.element.removeAttribute('moving');
    this.element.removeAttribute('under');
    // this.dragging = false;

    // TODO: разобраться с hide
    const hiddenElement: HTMLElement = document.querySelector('[hidden]');

    if (hiddenElement) {
      hiddenElement.style.display = '';
    }

    this.element.removeAttribute('hidden');
  }

  dragenter(event) {
    if (event.preventDefault) {
      event.preventDefault();
    }

    // if (event.stopPropagation) {
    //   event.stopPropagation();
    // }

    const elementDragging: HTMLElement = document.querySelector('[moving]');

    if (elementDragging !== this.element) {
      if (elementDragging.getAttribute('hidden') === null && this.hide) {
        elementDragging.setAttribute('hidden', '');
        elementDragging.style.display = 'none';
      }

      // TODO: зачем dragCounter?
      this.dragCounter++;
      this.element.classList.add('over');

      if (this.canDrop && this.addClass) {
        this.element.classList.add(this.addClass);
      }
    }
  }

  dragover(event) {
    if (event.preventDefault) {
      event.preventDefault();
    }

    // if (event.stopPropagation) {
    //   event.stopPropagation()
    // }

    event.dataTransfer.dropEffect = this.dropEffect;

    // return false;
  }

  dragleave(event) {
    const elementDragging: HTMLElement = document.querySelector('[moving]');

    if (elementDragging !== this.element) {
      this.dragCounter--;

      if (this.dragCounter === 0) {
        this.element.classList.remove('over');

        if (this.canDrop && this.addClass) {
          this.element.classList.remove(this.addClass);
        }
      }
    }
  }

  drop(event) {
    if (this.canDrop) {
      if (event.preventDefault) {
        event.preventDefault();
      }

      if (event.stopPropagation) {
        event.stopPropagation();
      }

      const dragPayload = event.dataTransfer.getData('input/plain');

      if (JSON.stringify(this.payload) !== dragPayload) {
        if (this.dropHandler) {
          const event = { drop: this.payload, drag: JSON.parse(dragPayload) };

          this.dropHandler(event);
        }
        // this.dragging = false;
      }

      this.element.classList.remove('over');

      return false;
    }
  }
}
