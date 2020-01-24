import App from '../AppConfig';

/**
 * Setting nuxt server
 * Check docs: https://nuxtjs.org/api/configuration-server
 */

export default {
  port: App.Port || 3000,
  host: App.Host || 'localhost'
};
