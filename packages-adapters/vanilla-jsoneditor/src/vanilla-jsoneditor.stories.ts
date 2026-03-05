import { VanillaJsoneditor } from './vanilla-jsoneditor';

const meta = {
  title: 'Svelte Jsoneditor / Vanilla Jsoneditor',
  component: VanillaJsoneditor,
  render: () => ({
    template: `<vanilla-jsoneditor
      content.bind='content'
      selection.bind='selection'
      mode.bind='mode'
      main-menu-bar.bind='mainMenuBar'
      navigation-bar.bind='navigationBar'
      status-bar.bind='statusBar'
      ask-to-format.bind='askToFormat'
      read-only.bind='readOnly'
      indentation.bind='indentation'
      tab-size.bind='tabSize'
      escape-control-characters.bind='escapeControlCharacters'
      escape-unicode-characters.bind='escapeUnicodeCharacters'
      flatten-columns.bind='flattenColumns'
      validator.bind='validator'
      query-language-id.bind='queryLanguageId'
      theme.bind='theme'
    ></vanilla-jsoneditor>`,
  }),
  argTypes: {
    // Content
    content: { control: 'object' },
    selection: { control: 'object' },

    // Mode
    mode: {
      control: 'select',
      options: ['tree', 'text', 'table'],
    },

    // UI Controls
    mainMenuBar: { control: 'boolean' },
    navigationBar: { control: 'boolean' },
    statusBar: { control: 'boolean' },
    askToFormat: { control: 'boolean' },
    readOnly: { control: 'boolean' },

    // Formatting
    indentation: { control: 'number' },
    tabSize: { control: 'number' },
    escapeControlCharacters: { control: 'boolean' },
    escapeUnicodeCharacters: { control: 'boolean' },
    flattenColumns: { control: 'boolean' },

    // Validation and parsing
    validator: { control: 'object' },
    parser: { control: false },
    validationParser: { control: false },
    pathParser: { control: false },
    queryLanguages: { control: 'object' },
    queryLanguageId: { control: 'text' },

    // Theme
    theme: {
      control: 'select',
      options: ['default', 'dark'],
    },

    // Callbacks
    onError: { control: false },
    onChange: { control: false },
    onChangeMode: { control: false },
    onClassName: { control: false },
    onRenderValue: { control: false },
    onSelect: { control: false },
    onRenderMenu: { control: false },
    onChangeQueryLanguage: { control: false },
    onFocus: { control: false },
    onBlur: { control: false },
  },
};

export default meta;

export const Overview = {
  args: {
    content: {
      json: {
        name: 'John Doe',
        age: 30,
        email: 'john@example.com',
        address: {
          street: '123 Main St',
          city: 'New York',
          country: 'USA',
        },
        hobbies: ['reading', 'coding', 'hiking'],
      },
    },
    mode: 'tree',
    theme: 'default',
    mainMenuBar: true,
    navigationBar: true,
    statusBar: true,
    askToFormat: true,
    readOnly: false,
    indentation: 2,
    tabSize: 4,
    escapeControlCharacters: false,
    escapeUnicodeCharacters: false,
    flattenColumns: true,
    // must be reset here, otherwise editor breaks because callback required a return value
    onRenderValue: undefined,
  },
};

export const TextMode = {
  args: {
    content: {
      text: JSON.stringify(
        {
          name: 'Jane Smith',
          age: 25,
          active: true,
          tags: ['developer', 'designer'],
        },
        null,
        2
      ),
    },
    mode: 'text',
    theme: 'default',
    mainMenuBar: true,
    navigationBar: true,
    statusBar: true,
    onRenderValue: undefined,
  },
};

export const TableMode = {
  args: {
    content: {
      json: [
        { id: 1, name: 'Alice', age: 28, city: 'London' },
        { id: 2, name: 'Bob', age: 35, city: 'Paris' },
        { id: 3, name: 'Charlie', age: 42, city: 'Berlin' },
      ],
    },
    mode: 'table',
    theme: 'default',
    mainMenuBar: true,
    navigationBar: true,
    statusBar: true,
    onRenderValue: undefined,
  },
};

export const DarkTheme = {
  args: {
    content: {
      json: {
        user: 'admin',
        settings: {
          theme: 'dark',
          notifications: true,
        },
      },
    },
    mode: 'tree',
    theme: 'dark',
    mainMenuBar: true,
    navigationBar: true,
    statusBar: true,
    onRenderValue: undefined,
  },
};

export const ReadOnly = {
  args: {
    content: {
      json: {
        message: 'This editor is read-only',
        canEdit: false,
      },
    },
    mode: 'tree',
    theme: 'default',
    readOnly: true,
    mainMenuBar: true,
    navigationBar: true,
    statusBar: true,
    onRenderValue: undefined,
  },
};
