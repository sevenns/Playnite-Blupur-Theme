import Paths from '../PathsConfig';

/**
 * Setting nuxt build dir
 * Check docs: https://nuxtjs.org/api/configuration-builddir
 */

const directory = '.Built';

/**
 * Setting nuxt build config
 * Check docs: https://nuxtjs.org/api/configuration-build
 */

const config = {
  extend (config, { isDev, isClient }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      $App: Paths.App,
      $Root: Paths.Root,
      $Pages: Paths.Pages,
      $Store: Paths.Store,
      $Config: Paths.Config,
      $Static: Paths.Static,
      $Assets: Paths.Assets,
      $Layouts: Paths.Layouts,
      $Plugins: Paths.Plugins,
      $Helpers: Paths.Helpers,
      $Components: Paths.Components
    };

    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      });
    }
  },

  babel: {
    presets(env, [preset, options]) {
      return [
        ['@nuxt/babel-preset-app', {
          ...options,
          corejs: {
            version: 3
          }
        }]
      ];
    }
  }
};

export const BuildDir = directory;
export const BuildConfig = config;
