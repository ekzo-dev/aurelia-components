import type { StorybookConfig } from 'storybook/internal/types';

import htmlImport from '@ayatkyo/vite-plugin-html-import';
import { type InlineConfig, mergeConfig } from 'vite';

const config: StorybookConfig & { viteFinal?: (config: InlineConfig) => InlineConfig | Promise<InlineConfig> } = {
  stories: [
    '../packages-adapters/bootstrap/**/*.stories.ts',
    '../packages-adapters/vanilla-jsoneditor/**/*.stories.ts',
    '../packages-adapters/monaco-editor/**/*.stories.ts',
    '../packages/bootstrap-addons/**/*.stories.ts',
  ],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@aurelia/storybook',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: (viteConfig: InlineConfig) => {
    // Ensure problematic Aurelia deps are excluded from pre-bundling.
    viteConfig.optimizeDeps = viteConfig.optimizeDeps ?? {};
    viteConfig.optimizeDeps.exclude = Array.from(
      new Set([...(viteConfig.optimizeDeps.exclude ?? []), '@aurelia/runtime-html'])
    );

    return mergeConfig(viteConfig, {
      define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'development'),
      },
      plugins: [htmlImport()],
      // https://getbootstrap.com/docs/5.3/getting-started/vite/#configure-vite
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ['import', 'color-functions', 'global-builtin', 'if-function'],
          },
        },
      },
    });
  },
};

export default config;
