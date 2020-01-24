
import spawn from 'cross-spawn';

import Logger from '../Helpers/LoggerHelper';

const options = {
  stdio: 'inherit',
  cwd: process.cwd()
};

Logger.info('Building application', { top: true, bottom: true });

spawn.sync('nuxt', ['build', '-c', 'Config/NuxtConfig'], options);
