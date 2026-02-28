export { render, renderToCanvas } from '@aurelia/storybook';
import { BootstrapConfiguration } from '@ekzo-dev/bootstrap';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';

export const parameters = {
  aurelia: {
    register: [BootstrapConfiguration],
  },
};