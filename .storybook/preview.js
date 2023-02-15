import { addDecorator } from '@storybook/aurelia';
import { withPerformance } from 'storybook-addon-performance';

// TODO: не работает поддержка декораторов в плагине
// addDecorator(withPerformance);

import 'bootstrap/dist/css/bootstrap-reboot.min.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}