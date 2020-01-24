import chalk from 'chalk';
import moment from 'moment';

import StylesHelper from './StylesHelper';

/**
 * Class representing a logs helper.
 *
 * @class Logger
 */

class Logger {
  /**
   * Log info with status OKEY
   *
   * @param {String|Object} data Data for showing (object or string)
   * @param {Object} [params={}] Various parameters
   * @param {Number} [params.indent=0] Side indent
   * @param {Boolean} [params.top=false] Upper indent
   * @param {Boolean} [params.bottom=false] Bottom indent
   *
   * @static
   *
   * @returns {void}
   */

  static ok (data, params = {}) {
    if (params.top) {
      console.log();
    }

    Logger._log('okey', data, params.indent || 0, params.force);

    if (params.bottom) {
      console.log();
    }
  }

  /**
   * Log info with status INFO
   *
   * @param {String|Object} data Data for showing (object or string)
   * @param {Object} [params={}] Various parameters
   * @param {Number} [params.indent=0] Side indent
   * @param {Boolean} [params.top=false] Upper indent
   * @param {Boolean} [params.bottom=false] Bottom indent
   *
   * @static
   *
   * @returns {void}
   */

  static info (data, params = {}) {
    if (params.top) {
      console.log();
    }

    Logger._log('info', data, params.indent || 0, params.force);

    if (params.bottom) {
      console.log();
    }
  }

  /**
   * Log info with status WARN
   *
   * @param {String|Object} data Data for showing (object or string)
   * @param {Object} [params={}] Various parameters
   * @param {Number} [params.indent=0] Side indent
   * @param {Boolean} [params.top=false] Upper indent
   * @param {Boolean} [params.bottom=false] Bottom indent
   *
   * @static
   *
   * @returns {void}
   */

  static warn (data, params = {}) {
    if (params.top) {
      console.log();
    }

    Logger._log('warn', data, params.indent || 0, params.force);

    if (params.bottom) {
      console.log();
    }
  }

  /**
   * Log info with status ERROR
   *
   * @param {String|Object} data Data for showing (object or string)
   * @param {Object} [params={}] Various parameters
   * @param {Number} [params.indent=0] Side indent
   * @param {Boolean} [params.top=false] Upper indent
   * @param {Boolean} [params.bottom=false] Bottom indent
   *
   * @static
   *
   * @returns {void}
   */

  static error (data, params = {}) {
    if (params.top) {
      console.log();
    }

    Logger._log('error', data, params.indent || 0);

    if (params.bottom) {
      console.log();
    }
  }

  /**
   * Main function for displaying logs
   *
   * @param {String} type Log type ('info', 'warn', etc)
   * @param {String|Object} data Data for showing (object or string)
   * @param {Number} indent Side indent
   *
   * @private
   * @static
   *
   * @returns {void}
   */

  static _log (type, data, indent) {
    const dataType = typeof data;
    const date = moment.utc();
    const processedType = type.toUpperCase();
    const color = Logger._getColor(processedType);

    if (dataType !== 'object') {
      console.log(chalk.hex(color)(`${' '.repeat(4 * indent)}${date.format('HH:mm:ss')} • ${data}`));
    } else {
      console.log();
      console.log(chalk.hex(color)(`${date.format('HH:mm:ss')} •`));
      console.log(data);
      console.log();
    }
  }

  /**
   * Get hex color by log type
   *
   * @param {String} type Log type ('info', 'warn', etc)
   *
   * @private
   * @static
   *
   * @returns {void}
   */

  static _getColor (type) {
    switch (type) {
      case 'OKEY':
        return StylesHelper.colors.Bahia;

      case 'WARN':
        return StylesHelper.colors.SelectiveYellow;

      case 'ERROR':
        return StylesHelper.colors.Persimmon;

      case 'INFO':
        return StylesHelper.colors.DodgerBlue;

      default:
        return StylesHelper.colors.Alabaster;
    }
  }
}

export default Logger;
