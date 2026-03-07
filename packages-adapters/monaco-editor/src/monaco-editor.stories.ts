import { MonacoEditor } from '.';

const meta = {
  title: 'Monaco Editor / Editor',
  component: MonacoEditor,
  render: () => ({
    template: `<monaco-editor
      value.bind='value'
      language.bind='language'
      options.bind='options'
    ></monaco-editor>`,
  }),
  argTypes: {
    value: { control: 'text' },
    language: {
      control: 'select',
      options: ['javascript', 'typescript', 'json', 'css', 'scss', 'less', 'html', 'handlebars', 'razor'],
    },
    options: { control: 'object' },
  },
};

export default meta;

export const Overview = {
  args: {
    value: 'const a = 2;',
    language: 'javascript',
    options: {
      automaticLayout: true,
    },
  },
};
