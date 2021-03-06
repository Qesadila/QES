module.exports = {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'Qesadila',
    title: 'Qesadila',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description ||
          'Qesadila is open source e-voting system, offered under licence: GNU GPLv3. By e-voting we mean the participation on making decisions of any group of voters, where is necessery to autorize the voters (using qualified electronic signature, or generated certificate).'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  buildDir: 'docs',
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.js'
          },
          {
            code: 'cs',
            file: 'cs.js'
          },
          {
            code: 'sk',
            file: 'sk.js'
          }
        ],
        lazy: true,
        langDir: 'lang/'
      }
    ],
    // Doc: https://github.com/nuxt-community/sentry-module#readme
    '@nuxtjs/sentry'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://qesadila.azurewebsites.net'
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'cs',
        file: 'cs.js'
      },
      {
        code: 'sk',
        file: 'sk.js'
      }
    ],
    lazy: true,
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },
  sentry: {
    dsn: '', // Enter your project's DSN here
    config: {} // Additional config
  }
}
