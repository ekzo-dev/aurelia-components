# `tinymce-wrapper`

Wrapper around TinyMCE WYSIWYG editor (https://www.tiny.cloud/)

**First basic implementation, should be improved:**
1. Move most basic settings to inputs, so not recreate editor from scratch on each setting change
2. Move plugin and theme loading to config, to decrease bundle size
3. Try to load tinymce core dynamically to decrease bundle size
4. Suggest solution how to load content_css to iframe, for now it is up to component user
5. Analyze overall bundle size influence and may be import minified plugins/themes

**Examples in other frameworks:**
- Angular: https://github.com/tinymce/tinymce-angular/
- React: https://github.com/tinymce/tinymce-react
- Native Web Component (experimental): https://github.com/tinymce/tinymce-webcomponent/
