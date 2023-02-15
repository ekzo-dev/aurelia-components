const CopyWebpackPlugin = require('copy-webpack-plugin');

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
      plugins: [
        ...config.plugins,
        new CopyWebpackPlugin({
          patterns: [{ from: './node_modules/bootstrap-icons/bootstrap-icons.svg' }],
        }),
      ],
    };
  },
};
