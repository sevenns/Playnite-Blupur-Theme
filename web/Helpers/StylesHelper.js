import { css } from 'vue-styled-components';

/**
 * Class representing a styles helper.
 *
 * @class StylesHelper
 */

class StylesHelper {
  /**
   * Get default font setting
   *
   * @static
   */

  static get defaultFont () {
    return {
      family: 'lato, sans-serif',
      size: 18
    };
  }

  /**
   * Get colors
   *
   * @static
   */

  static get colors () {
    return {
      Text: '#f2f2f2',

      MainWindowBackground: '#202040',
      MainWindowBorders: '#262a4f',
      PopupsBackground: '#202060',
      PopupBorders: '#252570',
      ActiveElements: '#602080',
      AccentActiveElements: '#b030b0',
      HoverActiveElements: '#c937c9',

      Bahia: '#a6cb12',
      Persimmon: '#ff5959',
      Alabaster: '#faf9f9',
      DodgerBlue: '#2f89fc',
      SelectiveYellow: '#fbb901'
    };
  }

  /**
   * Get border radius
   *
   * @static
   */

  static get borderRadius () {
    return '3px';
  }

  /**
   * Get sizes
   *
   * @static
   */

  static get sizes () {
    return {
      xs: 450,
      sm: 768,
      l: 1280,
      xl: 1440,
      md: 1024
    };
  }

  /**
   * Css media queries function
   *
   * @param {Number} [to=-1] To this width of page
   * @param {Number} [from=0] From this width of page
   *
   * @static
   *
   * @returns {String}
   */

  static respond (from = 0, to = -1) {
    if (typeof from !== 'number' || !(from >= 0)) {
      throw new Error('"from" must be a number >= 0');
    }

    if (typeof to !== 'number' || !(to >= -1)) {
      throw new Error('"to" must be a number >= -1');
    }

    if (from === 0) {
      return css`@media (max-width: ${to - 1}px)`;
    }

    if (to === -1) {
      return css`@media (min-width: ${from}px)`;
    }

    return css`@media (min-width: ${from}px) and (max-width: ${to - 1}px)`;
  }

  /**
   * Css media queries function
   *
   * @param {Number} [to=-1] To this width of page
   * @param {Number} [from=0] From this width of page
   *
   * @static
   *
   * @returns {String}
   */

  static fontFace (data = null) {
    if (!data) {
      throw new Error('"data" argument is required');
    }

    if (!data.eot || typeof data.eot !== 'string' || (data.eot && data.eot.length === 0)) {
      throw new Error('"eot" must be a string with path to font');
    }

    if (!data.woff || typeof data.woff !== 'string' || (data.woff && data.woff.length === 0)) {
      throw new Error('"woff" must be a string with path to font');
    }

    if (!data.woff2 || typeof data.woff2 !== 'string' || (data.woff2 && data.woff2.length === 0)) {
      throw new Error('"woff2" must be a string with path to font');
    }

    if (!data.ttf || typeof data.ttf !== 'string' || (data.ttf && data.ttf.length === 0)) {
      throw new Error('"ttf" must be a string with path to font');
    }

    if (!data.family || typeof data.family !== 'string' || (data.family && data.family.length === 0)) {
      throw new Error('"family" must be a string');
    }

    return css`
      @font-face {
        font-family: ${data.family};
        font-style: ${data.style};
        font-weight: ${data.weight};
        src: url('${data.eot}'), url('${data.eot}?#iefix') format('embedded-opentype'), url('${data.woff}') format('woff'), url('${data.woff2}') format('woff2'), url('${data.ttf}') format('truetype');
      }
    `;
  }

  /**
   * Convert px to rem
   *
   * @param {Number} px Value in pixels
   *
   * @static
   *
   * @returns {Number}
   */

  static pxToRem (px) {
    if (!px || typeof px !== 'number' || !(px > 0)) {
      throw new Error('"px" must be a number > 0');
    }

    return px / StylesHelper.defaultFont.size;
  }

  static hexToRgb (v, alpha = 1) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(v);

    if (!result) {
      throw new Error('You passed an argument that is not a "hex" value');
    }

    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: alpha
    };
  }
}

export default StylesHelper;
