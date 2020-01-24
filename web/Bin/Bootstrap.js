import fs from 'fs';
import { resolve } from 'path';
import moment from 'moment';
import program from 'commander';
import { prompt } from 'inquirer';

import Logger from '../Helpers/LoggerHelper';

class Bootstrap {
  constructor () {
    this.configFilePath = resolve(process.cwd(), 'Config', 'AppConfig.js');

    this.host = 'localhost';
    this.port = 10002;

    this.questions = [
      {
        type: 'input',
        name: 'host',
        message: 'Enter server host:',
        default: this.host
      },
      {
        type: 'input',
        name: 'port',
        message: 'Enter server port:',
        default: this.port,
        validate: v => (parseInt(v, 10) > 0)
      }
    ];
  }

  exec () {
    program.action(() => {
      Logger.info('Application bootstrapping', { top: true, bottom: true });

      prompt(this.questions)
        .then((answers) => {
          this._saveAnswers(answers);
          this._writeConfig();
        })
        .then(() => process.exit())
        .catch((error) => {
          Logger.error(error.message, { top: true, bottom: true });
          process.exit(1);
        });
    });

    program.parse(process.argv);
  }

  _saveAnswers (data) {
    this.port = data.port;
    this.host = data.host;
  }

  _removeConfig () {
    fs.unlinkSync(this.configFilePath);
    Logger.warn('Exists config file has been removed', { top: true });
  }

  _writeConfig () {
    if (fs.existsSync(this.configFilePath)) {
      this._removeConfig();
    }

    Logger.info('Creating config file', { bottom: true });

    const toWrite = this._generateTemplate({
      host: this.host,
      port: this.port
    });

    fs.writeFileSync(this.configFilePath, toWrite);
  }

  _generateTemplate (data = {}) {
    return `/*
    * Auto generated config file!
    * Run "yarn bootstrap / npm run bootstrap" to regenerate
    *
    * Generation date: ${moment().format('HH:mm:ss DD.MM.YYYY')}
    */

    export default {
      host: '${data.host}',
      port: ${data.port}
    };
    `.replace(/[ ]{4}/g, '');
  }
}

export default new Bootstrap().exec();
