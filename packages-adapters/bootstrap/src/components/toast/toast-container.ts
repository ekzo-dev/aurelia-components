import template from './toast-container.html';

import './toast.scss';

import { customElement, ICustomElementViewModel } from 'aurelia';

@customElement({
  name: 'bs-toast-container',
  template,
})
export class BsToastContainer implements ICustomElementViewModel {}
