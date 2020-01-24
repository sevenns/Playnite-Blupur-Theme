/**
 * Class representing a utility helper.
 *
 * @class UtilityHelper
 */

class UtilityHelper {
  /**
   * Validating function for color string
   *
   * @param {String} v Value for validating
   *
   * @static
   *
   * @returns {Boolean}
   */

  static validateColor (v) {
    const regexp = (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/igm);
    const colors = v.split(' ');

    if (colors.length === 1) {
      return regexp.test(v);
    }

    return !colors.map(c => regexp.test(v)).find(c => !c);
  }
}

export default UtilityHelper;
