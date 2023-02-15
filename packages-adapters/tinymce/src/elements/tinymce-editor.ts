import { BindingMode, customElement, bindable } from 'aurelia';
import tinymce, { Editor, RawEditorSettings } from 'tinymce';
// theme
import 'tinymce/themes/silver';
import 'tinymce/skins/ui/oxide/skin.min.css';
// icons
import 'tinymce/icons/default';
// all free plugins
// import 'tinymce/plugins/advlist';
// import 'tinymce/plugins/anchor';
// import 'tinymce/plugins/autolink';
// import 'tinymce/plugins/autoresize';
// import 'tinymce/plugins/autosave';
// // import 'tinymce/plugins/bbcode'; deprecated
// import 'tinymce/plugins/charmap';
// import 'tinymce/plugins/code';
// import 'tinymce/plugins/codesample';
// // import 'tinymce/plugins/colorpicker'; moved to core
// // import 'tinymce/plugins/contextmenu'; moved to core
// import 'tinymce/plugins/directionality';
// import 'tinymce/plugins/emoticons';
// // import 'tinymce/plugins/fullpage'; deprecated
// import 'tinymce/plugins/fullscreen';
// import 'tinymce/plugins/help';
// import 'tinymce/plugins/hr';
// import 'tinymce/plugins/image';
// import 'tinymce/plugins/imagetools';
// import 'tinymce/plugins/importcss';
// import 'tinymce/plugins/insertdatetime';
// // import 'tinymce/plugins/legacyoutput'; deprecated
// import 'tinymce/plugins/link';
// import 'tinymce/plugins/lists';
// import 'tinymce/plugins/media';
// import 'tinymce/plugins/nonbreaking';
// import 'tinymce/plugins/noneditable';
// import 'tinymce/plugins/pagebreak';
// import 'tinymce/plugins/paste';
// import 'tinymce/plugins/preview';
// import 'tinymce/plugins/print';
// import 'tinymce/plugins/quickbars';
// import 'tinymce/plugins/save';
// import 'tinymce/plugins/searchreplace';
// // import 'tinymce/plugins/spellchecker'; deprecated
// import 'tinymce/plugins/tabfocus';
// import 'tinymce/plugins/table';
// import 'tinymce/plugins/template';
// // import 'tinymce/plugins/textcolor'; moved to core
// import 'tinymce/plugins/textpattern';
// // import 'tinymce/plugins/toc'; deprecated
// import 'tinymce/plugins/visualblocks';
// import 'tinymce/plugins/visualchars';
// import 'tinymce/plugins/wordcount';

import template from './tinymce-editor.html';
import './tinymce-editor.scss';

const delayUtil = tinymce.util.Tools.resolve('tinymce.util.Delay');

@customElement({
  name: 'tinymce-editor',
  template,
})
export class TinymceEditor {
  @bindable({ mode: BindingMode.twoWay })
  value: string = '';

  @bindable()
  readonly settings: RawEditorSettings = {};

  editor?: Editor;

  container!: HTMLTextAreaElement;

  private contentCache?: string;

  attaching() {
    this.createEditor();
  }

  detaching() {
    this.destroyEditor();
  }

  valueChanged(value: string) {
    if (this.editor && value !== this.contentCache) {
      this.editor.setContent(value);
    }
  }

  settingsChanged() {
    this.destroyEditor();
    this.createEditor();
  }

  private createEditor() {
    // TODO: removed in TinyMCE 6.0, change when upgrading
    const debounceUpdate = delayUtil.debounce(() => this.updateValue(), 250);

    tinymce
      .init({
        // Do not load external css files
        skin: false,
        content_css: false,

        // Apply user settings
        ...(this.settings || {}),

        // Force element selector
        selector: undefined,
        target: this.container,

        // Setup value change events and proxy initial setup callback
        setup: (editor) => {
          editor.on('change input undo redo', debounceUpdate);
          this.settings?.setup && this.settings.setup(editor);
        },
      })
      .then((editors) => {
        this.editor = editors[0];
      });
  }

  private destroyEditor() {
    tinymce.remove(this.editor!);
    this.editor = undefined;
  }

  private updateValue() {
    if (this.editor) {
      this.contentCache = this.editor.getContent();
      this.value = this.contentCache;
    }
  }
}
