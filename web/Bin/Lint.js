
import spawn from 'cross-spawn';

import Logger from '../Helpers/LoggerHelper';

const args = process.argv.slice(2);
const options = {
  stdio: 'inherit',
  cwd: process.cwd()
};

Logger.info('Linting project', { top: true, bottom: true });

spawn.sync('eslint', ['**/*.js', ...args], options);
