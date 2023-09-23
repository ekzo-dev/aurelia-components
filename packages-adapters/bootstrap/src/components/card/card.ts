import template from './card.html';

import '../../color-bg.scss';
import './card.scss';

import { bindable, customElement } from 'aurelia';

import { BsVariant } from '../../types';

@customElement({
  name: 'bs-card-group',
  template: '<template class="card-group"><au-slot></au-slot></template>',
})
export class BsCardGroup {}

@customElement({
  name: 'bs-card-header',
  template: '<template class="card-header"><au-slot></au-slot></template>',
})
export class BsCardHeader {}

@customElement({
  name: 'bs-card-body',
  template: '<template class="card-body"><au-slot></au-slot></template>',
})
export class BsCardBody {}

@customElement({
  name: 'bs-card-footer',
  template: '<template class="card-footer"><au-slot></au-slot></template>',
})
export class BsCardFooter {}

@customElement({
  name: 'bs-card-overlay',
  template: '<template class="card-img-overlay"><au-slot></au-slot></template>',
})
export class BsCardOverlay {}

@customElement({
  name: 'bs-card',
  template,
})
export class BsCard {
  @bindable()
  variant?: BsVariant;
}
