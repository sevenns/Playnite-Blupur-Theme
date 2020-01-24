import Paths from '../PathsConfig';

/**
 * Setting src directory
 * Check docs: https://nuxtjs.org/api/configuration-srcdir
 */

const srcDir = Paths.App;

/**
 * Setting own directories
 * Check docs: https://nuxtjs.org/api/configuration-dir
 */

const customDirs = {
  store: 'Store',
  pages: 'Pages',
  assets: 'Assets',
  static: 'Static',
  layouts: 'Layouts',
  middleware: 'Middleware'
};

export const SourcesDirectory = srcDir;
export const CustomDirectories = customDirs;
