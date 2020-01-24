import StylesHelper from '../../Helpers/StylesHelper';

import NuxtCss from './NuxtCss';
import NuxtHead from './NuxtHead';
import NuxtMode from './NuxtMode';
import NuxtServer from './NuxtServer';
import NuxtPlugins from './NuxtPlugins';
import NuxtModules from './NuxtModules';
import NuxtGenerate from './NuxtGenerate';
import { BuildDir, BuildConfig } from './NuxtBuild';
import { SourcesDirectory, CustomDirectories } from './NuxtCustomDirectories';

export default {
  css: NuxtCss,
  mode: NuxtMode,
  head: NuxtHead,
  server: NuxtServer,
  buildDir: BuildDir,
  build: BuildConfig,
  modules: NuxtModules,
  plugins: NuxtPlugins,
  dir: CustomDirectories,
  generate: NuxtGenerate,
  srcDir: SourcesDirectory,

  loading: {
    color: StylesHelper.colors.PragmaticCinnamon,
    height: '5px'
  },

  pageTransition: 'page'
};
