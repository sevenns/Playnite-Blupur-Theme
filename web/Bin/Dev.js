
import spawn from 'cross-spawn';

import Logger from '../Helpers/LoggerHelper';

const options = {
  stdio: 'inherit',
  cwd: process.cwd()
};

Logger.info('Launching development server', { top: true, bottom: true });

spawn.sync('nuxt', ['-c', 'Config/NuxtConfig'], options);
