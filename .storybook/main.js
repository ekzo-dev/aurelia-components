const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
  stories: ['./*.stories.mdx', '../packages-adapters/**/*.stories.ts', '../packages/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-performance/register',
    'storybook-addon-pseudo-states',
  ],
  framework: '@storybook/aurelia',
  core: {
    builder: 'webpack5',
    channelOptions: {
      allowClass: false,
    },
  },
  webpackFinal: (config) => {
    // console.log('webpack', config);
    return {
      ...config,
      // target: 'es2020',
      // module: {
      //   ...config.module,
      //   rules: [
      //     ...config.module.rules,
      //     {
      //       test: /\.js$/,
      //       enforce: 'pre',
      //       use: ['source-map-loader'],
      //     },
      //   ],
      // },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...[
            'fetch-client',
            'kernel',
            'metadata',
            'platform',
            'platform-browser',
            'route-recognizer',
            'router',
            'router-lite',
            'runtime',
            'runtime-html',
            'testing',
            'webpack-loader',
          ].reduce((map, pkg) => {
            const name = `@aurelia/${pkg}`;
            map[name] = path.resolve(__dirname, '../node_modules', name, 'dist/esm/index.dev.mjs');
            return map;
          }, {
            'aurelia': path.resolve(__dirname, '../node_modules/aurelia/dist/esm/index.dev.mjs'),
            // add your development aliasing here
          })
        }
      },
      plugins: [
        ...config.plugins,
        new CopyWebpackPlugin({
          patterns: [{ from: './node_modules/bootstrap-icons/bootstrap-icons.svg' }],
        }),
      ],
    };
  },
};
