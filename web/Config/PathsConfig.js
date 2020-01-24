import { resolve } from 'path';

const Root = resolve(process.cwd());
const App = resolve(Root, 'App');

export default {
  App,
  Root,
  Pages: resolve(App, 'Pages'),
  Store: resolve(App, 'Store'),
  Assets: resolve(App, 'Assets'),
  Static: resolve(App, 'Static'),
  Config: resolve(Root, 'Config'),
  Layouts: resolve(App, 'Layouts'),
  Plugins: resolve(App, 'Plugins'),
  Helpers: resolve(Root, 'Helpers'),
  Components: resolve(App, 'Components')
};
