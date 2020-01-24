import { injectGlobal } from 'vue-styled-components';

import StylesHelper from '$Helpers/StylesHelper';

export default {
  render (h) {
    this.injectGlobal();

    return (
      <nuxt />
    );
  },

  methods: {
    injectGlobal () {
      injectGlobal`
        ${StylesHelper.fontFace({
          family: 'lato',
          style: 'normal',
          weight: 'normal',
          eot: '/fonts/Lato-Regular.eot',
          ttf: '/fonts/Lato-Regular.ttf',
          woff: '/fonts/Lato-Regular.woff',
          woff2: '/fonts/Lato-Regular.woff2'
        })}

        ${StylesHelper.fontFace({
          family: 'lato',
          style: 'normal',
          weight: 'bold',
          eot: '/fonts/Lato-Bold.eot',
          ttf: '/fonts/Lato-Bold.ttf',
          woff: '/fonts/Lato-Bold.woff',
          woff2: '/fonts/Lato-Bold.woff2'
        })}

        * {
          box-sizing: border-box;
        }

        html {
          font-size: ${StylesHelper.defaultFont.size}px;
        }

        body {
          font-size: 1rem;
          line-height: 1.6;
          min-width: 320px;
          background-color: ${StylesHelper.colors.MainWindowBackground};
          color: ${StylesHelper.colors.Text};
          font-family: ${StylesHelper.defaultFont.family};
        }

        .page-enter-active, .page-leave-active {
          transition: opacity .5s
        }
        .page-enter, .page-leave-active {
          opacity: 0
        }
      `;
    }
  }
};
