
import spawn from 'cross-spawn';

import Logger from '../Helpers/LoggerHelper';

const options = {
  stdio: 'inherit',
  cwd: process.cwd()
};

Logger.info('Launching production server', { top: true, bottom: true });

spawn.sync('nuxt', ['start', '-c', 'Config/NuxtConfig'], options);
