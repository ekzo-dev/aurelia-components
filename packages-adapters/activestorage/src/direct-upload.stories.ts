import { Meta, Story } from '@storybook/aurelia';
import { AsDirectUpload, IEndpoint } from '.';

const endpoint: IEndpoint = {
  url: 'http://127.0.0.1:3000/rails/active_storage/direct_uploads',
  headers: {},
};

const meta: Meta = {
  title: 'Active Storage / Direct Upload',
  component: AsDirectUpload,
  parameters: {
    actions: {
      handles: [
        'direct-upload:initialize',
        'direct-upload:start',
        'direct-upload:before-blob-request',
        'direct-upload:before-storage-request',
        'direct-upload:progress',
        'direct-upload:error',
        'direct-upload:end',
      ],
    },
  },
  args: {
    endpoint,
  },
};
export default meta;

const Default: Story = (args) => ({
  props: {
    ...args,
    format: (data) =>
      JSON.stringify(
        data,
        (key, value) => {
          if (key === 'file') {
            return value.toString();
          }
          return value;
        },
        2
      ),
  },
  template: `
<input
  type="file"
  as-direct-upload="endpoint.bind: endpoint; clear.bind: clear"
  direct-upload:end.trigger="file = $event.detail"
/>
<pre if.bind="file" style="margin-top: 1rem">Uploaded file: \${format(file)}</pre>`,
});

export { Default };
