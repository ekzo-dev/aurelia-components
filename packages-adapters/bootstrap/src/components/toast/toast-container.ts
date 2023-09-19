import './toast.scss';

import { customElement, ICustomElementViewModel } from 'aurelia';

import template from './toast-container.html';

@customElement({
  name: 'bs-toast-container',
  template,
})
export class BsToastContainer implements ICustomElementViewModel {}
