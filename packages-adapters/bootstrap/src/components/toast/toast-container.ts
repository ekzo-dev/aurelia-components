import { customElement, ICustomElementViewModel } from 'aurelia';
import template from './toast-container.html';
import './toast.scss';

@customElement({
  name: 'bs-toast-container',
  template,
})
export class BsToastContainer implements ICustomElementViewModel {}
