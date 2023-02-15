import { customElement, bindable, ICustomElementViewModel } from 'aurelia';
import { JSONSchema7 } from 'json-schema';
import template from './json-schema-viewer.html';
import { JSV } from '../viewer';
import './json-schema-viewer.scss';

@customElement({
  name: 'json-schema-viewer',
  template,
})
export class JsonSchemaViewer implements ICustomElementViewModel {
  @bindable()
  schema!: JSONSchema7;

  loader?: HTMLDivElement;

  constructor(private element: Element) {}

  attached() {
    JSV.init(
      {
        schema: this.schema,
        plain: true, //don't use JQM
        viewerHeight: 600, //set initial dimensions of SVG
        viewerWidth: (this.element as HTMLElement).getBoundingClientRect().width,
      },
      () => {
        document.getElementById('jsv-tree').style.width = '100%';
        //set diagram width to 100%, this DOES NOT resize the svg container
        //it will not adjust to window resize, needs a listener to support that
        JSV.resetViewer();

        this.loader!.style.display = 'none';
      }
    );
  }
}
